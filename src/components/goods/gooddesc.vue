<template>
    <div class="gooddesc-container">
        <h3>{{info.title}}</h3>
        <hr>
        <div class="content" v-html="info.content"></div>
    </div>
</template>
<script>
export default{
    data(){
        return{
           info:{},//图文介绍
        }
    },
    created(){
      this.getInfoDesc();
    },
    methods:{
        getInfoDesc(){
            this.$http.get('http://www.liulongbin.top:3005/api/goods/getdesc/'+this.$route.params.id).then(response=>{
                if(response.body.status===0){
                    this.info = response.body.message[0];
                }
            })
        }
    },
}
</script>
<style lang="scss">
    .gooddesc-container{
        padding:4px;
        h3{
            font-size: 16px;
            color:#226aff;
            text-align:center;
            margin:15px 0;
        }
        .content{
            img{
                width: 100%;
            }
        }
    }
</style>