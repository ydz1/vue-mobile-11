<template>
    <div class="photoInfo-container">
        <h3>{{photoInfo.title}}</h3>
        <p class="subtitle">
            <span>{{photoInfo.add_time|dateFormat}}</span>
            <span>点击:{{photoInfo.click}}次</span>
        </p>
        <hr>
        <div class="content" v-html="photoInfo.content"></div>
<!--缩略图区-->

<!--图片内容区-->

<!--评论子组件区-->
        <comment-box :id="id"></comment-box>
    </div>
</template>
<script>
    import comment from '../subcomponents/comment.vue'
    export default{
        data(){
            return{
                id:this.$route.params.id,
                photoInfo:{}
            }
        },
        created() {
            this.getPhotoInfo();
        },
        methods:{
            getPhotoInfo(){
                this.$http.get('http://www.liulongbin.top:3005/api/getimageInfo/'+this.id).then(response=>{
                    if(response.body.status===0){
                        this.photoInfo = response.body.message[0];
                    }
                })
            }
        },
        components:{
            'comment-box':comment
        }
    }

</script>
<style lang="scss" scoped>
    .photoInfo-container{
        padding:3px;
        h3{
            color:#26a2ff;
            font-size:15px;
            text-align: center;
            margin:15px 0;
        }
        .subtitle{
            display:flex;
            justify-content: space-between;
            font-size: 13px;
        }
        .content{
            font-size:13px;
            line-height: 30px;
        }

    }
</style>