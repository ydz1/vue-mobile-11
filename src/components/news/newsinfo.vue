<template>
    <div class="newsInfo-container">
        <div class="title">{{newsInfo.title}}</div>
        <p class="subTitle">
            <span>发表时间:{{newsInfo.add_time|dateFormat}}</span>
            <span>点击次数:{{newsInfo.click}}</span>
        </p>
        <hr>
        <div class="content" v-html="newsInfo.content"></div>
<!--        评论内容-->
        <commentbox :id="this.id"></commentbox>
    </div>
</template>
<script>
    import {Toast} from 'mint-ui';
    import comment from '../subcomponents/comment.vue'
export default{
    data(){
        return{
            id:this.$route.params.id,
            newsInfo:{}
        }
    },
    created() {
       this.getNewsInfo()
    },
    methods:{
        getNewsInfo(){
            this.$http.get('http://www.liulongbin.top:3005/api/getnew/'+this.id).then(response=>{
                // console.log(response);
                if(response.body.status === 0){
                    this.newsInfo = response.body.message[0];
                }
                else{
                    Toast("数据加载失败")
                }
            });
        }
    },
    components:{
        'commentbox':comment
    }
}
</script>
<style lang="scss" scoped>
    .newsInfo-container{
        padding: 0 4px;
        .title{
            font-size:16px;
            color:red;
            text-align: center;
        }
        .subTitle{
            display: flex;
            font-size: 13px;
            justify-content: space-between;
            color:#007aff;
        }
        .content{

        }
    }
</style>