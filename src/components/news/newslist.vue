<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
                <router-link :to="'/home/newsinfo/'+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h1>{{item.title}}</h1>
                        <p class='mui-ellipsis'>
                            <span>{{item.add_time|dateFormat('YYYY-MM-DD')}}</span>
                            <span>点击:{{item.click}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
<!--            <li class="mui-table-view-cell mui-media">-->
<!--                <a href="javascript:;">-->
<!--                    <img class="mui-media-object mui-pull-left" src="../../images/muwu.jpg">-->
<!--                    <div class="mui-media-body">-->
<!--                        <h1>木屋</h1>-->
<!--                        <p class='mui-ellipsis'>-->
<!--                            <span>发表时间：2020-09-09,09:09:09</span>-->
<!--                            <span>点击0次</span>-->
<!--                        </p>-->
<!--                    </div>-->
<!--                </a>-->
<!--            </li>-->
<!--            <li class="mui-table-view-cell mui-media">-->
<!--                <a href="javascript:;">-->
<!--                    <img class="mui-media-object mui-pull-left" src="../../images/cbd.jpg">-->
<!--                    <div class="mui-media-body">-->
<!--                        <h1>CBD</h1>-->
<!--                        <p class='mui-ellipsis'>-->
<!--                            <span>发表时间：2020-09-09,09:09:09</span>-->
<!--                            <span>点击0次</span>-->
<!--                        </p>-->
<!--                    </div>-->
<!--                </a>-->
<!--            </li>-->
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            newsList:[]
        }
    },
    created(){
        this.getNewsList()
    },
    methods:{
        getNewsList(){
            this.$http.get('http://www.liulongbin.top:3005/api/getnewslist').then(response=>{
                console.log(response);
                if(response.body.status===0){
                    this.newsList = response.body.message;
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .mui-table-view{
        li{
            h1{
                font-size:14px;
            }
            .mui-ellipsis{
                display:flex;
                color:#226aff;
                justify-content: space-between;
            }
        }
    }
</style>