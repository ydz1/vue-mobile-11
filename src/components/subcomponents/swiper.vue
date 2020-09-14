<template>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in lunbotulist" :key="item.id">
            <img :src="item.img" :class="{fullscreen:isfull}">
        </mt-swipe-item>
    </mt-swipe>

</template>
<script>
export default{
    data(){
        return{

        }
    },
    methods:{

    },
    props:['lunbotulist','isfull']
}
</script>
<style lang="scss" scoped>
    .mint-swipe{
        height:200px;
        .mint-swipe-item{
            text-align:center;
            img{
                /*width: 100%;*/
                height: 100%;
            }
        }
    }
    .fullscreen{
        width: 100%;
    }
</style>