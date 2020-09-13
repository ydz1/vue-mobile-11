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
        <div class="thumbs">
            <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
        </div>
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
                photoInfo:{},
                slide1:[],//记录缩略图
            }
        },
        created() {
            this.getPhotoInfo();
            this.getSlide()
        },
        methods:{
            getSlide(){
               this.$http.get('http://www.liulongbin.top:3005/api/getthumimages/'+this.id).then(response=>{
                   if(response.body.status===0){
                       response.body.message.forEach(item=>{
                           item.w=600;
                           item.h=400;
                           item.msrc=item.src;
                       });
                       this.slide1 = response.body.message;
                   }
               })
            },
            getPhotoInfo(){
                this.$http.get('http://www.liulongbin.top:3005/api/getimageInfo/'+this.id).then(response=>{
                    if(response.body.status===0){
                        this.photoInfo = response.body.message[0];
                    }
                })
            },
            handleClose () {
                console.log('close event')
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
        .thumbs {
            /deep/ .my-gallery{   //deep深层作用选择器
                display: flex;
                flex-wrap:wrap;//默认换行
                figure{
                    width: 30%;
                    margin: 5px;
                    img{
                        width: 100%;
                        box-shadow: 0 0 8px #999;
                        border-radius: 5px;
                    }
                }
            }
        }

    }
</style>