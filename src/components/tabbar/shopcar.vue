<template>
    <div class="shopcar-container">
        <div class="goodsList">
            <!--        商品列表-->
            <div class="mui-card" v-for="(item,index) in shopList" :key="item.id">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <mt-switch
                                v-model="$store.getters.getSelectedState[item.id]"
                        @change="changeSelect(item.id,$store.getters.getSelectedState[item.id])"></mt-switch>
                        <img :src="item.thumb_path">
                        <div class="info">
                            <h1>{{item.title}}</h1>
                            <p>
                                <span class="price">{{item.sell_price}}</span>
                                    <numbox :initvalue="$store.getters.getGoodsCount[item.id]"  :goodsid="item.id"></numbox>
                                <a href="#" @click.prevent="remove(item.id,index)">删除</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<!--        商品结算-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner totalCount" >
                    <div class="left">
                        <p>总计(不含运费)</p>
                        <p>已勾选商品<span class="red">{{$store.getters.getTotalPriceAndCount.count}}</span>件,总价:<span class="red">￥{{$store.getters.getTotalPriceAndCount.amount}}</span></p>
                    </div>
                    <mt-button type="danger">去结算</mt-button>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
    import numbox from '../subcomponents/shopcar_numbox.vue'
    export default{
        data(){
            return {
                shopList:[]
            }
        },
        created() {
            this.getShopList()
        },
        methods:{
           getShopList(){
               var idArr = [];
               this.$store.state.car.forEach(item=>{
                   idArr.push(item.id);
                   if(idArr.length<=0){
                       return;
                   }
                   this.$http.get('http://www.liulongbin.top:3005/api/goods/getshopcarlist/'+idArr.join(',')).then(response=>{
                       if(response.body.status===0){
                           this.shopList = response.body.message;
                       }
                   })
               });
           },
            remove(id,index){
                this.shopList.splice(index,1);
                this.$store.commit('removeFromCar',id)
            },
            changeSelect(id,value){
               this.$store.commit("changeSelectedState",{id,selected:value})
            }
        },
        components:{
            numbox,
        }
    }
</script>
<style lang="scss" scoped>
    .shopcar-container{
        .red{
            font-size:16px;
            color:red;
            font-weight: bold;
        }
        background-color: #eee;
        overflow: hidden;
        .totalCount{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .goodsList{
            .mui-card-content-inner{
                display: flex;
                align-items:center;
            }
            img{
                width: 60px;
                height: 60px;
            }
            .info{
                display:flex;
                flex-direction: column;
                justify-content: space-between;
                >h1{
                    font-size:13px;
                }
                .price{
                    color:red;
                    font-weight:bold;
                }
            }
        }
    }

</style>