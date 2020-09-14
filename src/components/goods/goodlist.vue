<template>
    <div>
        <div class="good-list">
            <div class="goods-item" v-for="item in goodList" :key="item.img_url" @click="toGoodInfo(item.id)">
                <img :src="item.img_url" alt="">
                <h1 class="title">{{item.title}}</h1>
                <div class="info">
                    <p class="price">
                        <span class="new">￥{{item.sell_price}}</span>
                        <span class="old">￥{{item.market_price}}}</span>
                    </p>
                    <p class="sell">
                        <span>热卖中</span>
                        <span>剩{{item.stock_quantity}}件</span>
                    </p>
                </div>
            </div>
        </div>

        <mt-button type="danger" size="large" @click="getMore()">加载更多</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            pageIndex:1,
            goodList:[]
        }
    },
    created() {
        this.getGoodList()
    },
    methods:{
        toGoodInfo(id){
            //使用编程式导航
            // 1.router.push('home')方法
            // this.$router.push('/home/goodinfo/'+id);
            // 2.router.push({ path: 'home' })
            // this.$router.push({path:'/home/goodinfo/'+id});
            // 3.router.push({ name: 'user', params: { userId: '123' }})
            this.$router.push({name:'ydz',params:{id}})

        },
        getMore(){
            this.pageIndex++;
            this.getGoodList();
        },
        getGoodList(){
            this.$http.get('http://www.liulongbin.top:3005/api/getgoods?pageindex='+this.pageIndex).then(response=>{
                if(response.body.status===0){
                    this.goodList = this.goodList.concat(response.body.message)
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .good-list{
        display:flex;
        flex-wrap: wrap;
        padding:7px;
        justify-content: space-between;
        .goods-item{
            border:1px solid #ccc;
            width: 49%;
            box-shadow:0 0 8px #ccc;
            margin:4px 0;
            padding: 2px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 270px;
            img{
                width: 100%;
            }
            .title{
                font-size:14px;
            }
            .info{
                background-color: #eee;
                p{
                    margin:0;
                    padding:5px
                }
                .price{
                    .new{
                        color:red;
                        font-size:16px
                    }
                    .old{
                        text-decoration: line-through;
                        font-size:12px;
                        margin-left: 10px;
                    }
                }
                .sell{
                    display:flex;
                    justify-content: space-between;
                }
            }
        }
    }
</style>