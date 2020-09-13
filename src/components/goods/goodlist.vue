<template>
    <div>
        <div class="good-list">
            <div class="goods-item">
                <img src="../../images/商品1.jpg" alt="">
                <h1 class="title">十年老店 华为新品5G 畅享20plus 预定立减</h1>
                <div class="info">
                    <p class="price">
                        <span class="new">￥1699</span>
                        <span class="old">￥2000</span>
                    </p>
                    <p class="sell">
                        <span>热卖中</span>
                        <span>剩60件</span>
                    </p>
                </div>
            </div>
            <div class="goods-item">
                <img src="../../images/商品2.jpg" alt="">
                <h1 class="title">朵唯时尚曲面水滴屏超薄智能手机学生价游戏 款式新颖 价格合理</h1>
                <div class="info">
                    <p class="price">
                        <span class="new">￥1699</span>
                        <span class="old">￥2000</span>
                    </p>
                    <p class="sell">
                        <span>热卖中</span>
                        <span>剩60件</span>
                    </p>
                </div>
            </div>
            <div class="goods-item">
                <img src="../../images/商品1.jpg" alt="">
                <h1 class="title">十年老店 华为新品5G 畅享20plus 预定立减</h1>
                <div class="info">
                    <p class="price">
                        <span class="new">￥1699</span>
                        <span class="old">￥2000</span>
                    </p>
                    <p class="sell">
                        <span>热卖中</span>
                        <span>剩60件</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

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