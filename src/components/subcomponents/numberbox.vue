<template>
    <div class="mui-numbox" data-numbox-min='1'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1" @change="numberChange" ref="number"/>
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
                // console.log(this.$refs.number.value)
                this.$emit('numberCount',parseInt(this.$refs.number.value));
            }
        },
        mounted(){
            mui(".mui-numbox").numbox()
        },
        watch:{
            max:function(newValue,oldValue){
                mui(".mui-numbox").numbox().setOption('max',newValue)
            }
        },
        props:['max']
    }
</script>
<style lang="scss" scoped>

</style>