<template>
    <div class="mui-numbox" data-numbox-min='1' style="height:25px">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" :value="initvalue" @change="numberChange" ref="number"/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>
<script>
    import mui from '../../lib/mui/js/mui.js';
    export default{
        data(){
            return{}
        },
        methods:{
            numberChange(){
                console.log(this.$refs.number.value);
                this.$store.commit('updateCar',{id:this.goodsid,count:this.$refs.number.value})
            }
        },
        mounted(){
            mui(".mui-numbox").numbox();
        },
        props:['initvalue','goodsid']
    }
</script>
<style lang="scss" scoped>

</style>