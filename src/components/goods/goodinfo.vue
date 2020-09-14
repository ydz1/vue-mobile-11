<template>
    <div class="goodinfo-container">
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :lunbotulist="lunBoTu"></swiper>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">页眉</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">页眉</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
                </div>
            </div>
            <div class="mui-card-footer">页脚</div>
        </div>
    </div>

</template>
<script>
    import swiper from '../subcomponents/swiper.vue'
export default{
    data(){
        return{
            id:this.$route.params.id,
            lunBoTu:[]
        }
    },
    created(){
        this.getLunBoTu()
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
        }
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
    }
</style>