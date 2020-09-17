<template>
    <div class="goodinfo-container">
        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
        >
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>

<!--        商品轮播图区域-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :lunbotulist="lunBoTu" :isfull="false"></swiper>
                </div>
            </div>
        </div>
<!--        商品购物栏区域-->
        <div class="mui-card">
            <div class="mui-card-header">{{goodInfo.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价:<del>￥{{goodInfo.market_price}}</del>&nbsp;&nbsp;销售价:<span class="now_price">￥{{goodInfo.sell_price}}</span>
                    </p>
                    <p>购买数量
                    <span>
                        <numberbox @numberCount="getNumberCount" :max="goodInfo.stock_quantity"></numberbox>
                    </span>
                    </p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToShopCar()">加入购物车</mt-button>
                    </p>
                </div>
            </div>
        </div>
<!--        商品参数区域-->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号:{{goodInfo.goods_no}}</p>
                    <p>库存情况:{{goodInfo.stock_quantity}}</p>
                    <p>上架时间:{{goodInfo.add_time}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goodDesc">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="goodComment">商品评论</mt-button>
            </div>
        </div>
    </div>

</template>
<script>
    import swiper from '../subcomponents/swiper.vue'
    import numberbox from "../subcomponents/numberbox.vue";
export default{
    data(){
        return{
            id:this.$route.params.id,
            lunBoTu:[],
            goodInfo:{},
            ballFlag:false,
            number:1
        }
    },
    created(){
        this.getLunBoTu();
        this.getGoodInfo();
    },
    methods:{
        getLunBoTu(){
            this.$http.get('http://www.liulongbin.top:3005/api/getthumimages/'+this.id).then(response=>{
                if(response.body.status===0){
                    response.body.message.forEach(item=>{
                       item.img=item.src
                    });
                    this.lunBoTu=response.body.message
                }
            })
        },
        getGoodInfo(){
            this.$http.get('http://www.liulongbin.top:3005/api/goods/getinfo/'+this.id).then(response=>{
                if(response.body.status===0){
                    this.goodInfo = response.body.message[0];
                }
            })
        },
        goodDesc(){
            this.$router.push({name:'goodDesc',params:{id:this.id}})
        },
        goodComment(){
            this.$router.push({name:'goodComment',param:{id:this.id}})
        },
        addToShopCar(){
            this.ballFlag=!this.ballFlag;
            var goods = {
                id:this.id,
                count:this.number,
                price:this.goodInfo.sell_price,
                selected:true
            };
            this.$store.commit('addToCar',goods)
        },
        beforeEnter:function(el){
            el.style.transform="translate(0,0)";
        },
        enter:function(el,done){
            el.offsetHeight;
            const ballPosition = this.$refs.ball.getBoundingClientRect();
            const badgePosition = document.getElementById("badge").getBoundingClientRect();
            const xDistance = badgePosition.left-ballPosition.left;
            const yDistance = badgePosition.top-ballPosition.top;
            el.style.transform=`translate(${xDistance}px,${yDistance}px)`;
            el.style.transition="all 1s cubic-bezier(0.42,0,1,1)";
            done();
        },
        afterEnter:function(){
            this.ballFlag=!this.ballFlag;
        },
        getNumberCount(count){
            this.number=count;
            // console.log("子组件传给父组件的值为"+this.number)
        }
    },
    components:{
        'swiper':swiper,
        "numberbox":numberbox
    }
}
</script>
<style lang="scss" scoped>
    .goodinfo-container{
        overflow:hidden;
        background-color: #eee;
        .ball{
            width: 15px;
            height: 15px;
            background-color:red;
            border-radius:50%;
            position:absolute;
            z-index:999;
            top:410px;
            left:138px;
        }
        .now_price{
            font-weight:bold;
            color:red;
            font-size:16px;
        }
        .mui-card-footer{
            display:block;
            button{
                margin:10px 0;
            }
        }
    }
</style>