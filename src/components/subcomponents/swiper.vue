<template>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in lunbotulist" :key="item.id">
            <img :src="item.img">
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
    props:['lunbotulist']
}
</script>
<style lang="scss" scoped>
    .mint-swipe{
        height:200px;
        .mint-swipe-item{
            &:nth-child(1){
                background-color: orangered;
            }
            &:nth-child(2){
                background-color: greenyellow;
            }
            &:nth-child(3){
                background-color:cyan;
            }
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>