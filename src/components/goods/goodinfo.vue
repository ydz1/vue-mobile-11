<template>
    <div class="goodinfo-container">
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
                        <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
                            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                            <input id="test" class="mui-input-numbox" type="number" value="1" />
                            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
                        </div>
                    </span>
                    </p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small">加入购物车</mt-button>
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
    import mui from '../../lib/mui/js/mui.js'
export default{
    data(){
        return{
            id:this.$route.params.id,
            lunBoTu:[],
            goodInfo:{}
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
        }
    },
    mounted(){
        mui(".mui-numbox").numbox()
    },
    components:{
        'swiper':swiper
    }
}
</script>
<style lang="scss" scoped>
    .goodinfo-container{
        overflow:hidden;
        background-color: #eee;
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