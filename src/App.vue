<template>
<div class="app-container">
<!--    header部分-->
    <mt-header fixed title="vue移动端项目">
        <span slot="left" @click="goBack" v-show="flag">
            <mt-button icon="back">back</mt-button>
        </span>
    </mt-header>

<!--router控制部分-->
    <transition>
        <router-view></router-view>
    </transition>
<!--tabbar底部部分-->
    <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item1" to="/home">
            <span class="mui-icon mui-icon-home"></span>
            <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item1" to="/member">
            <span class="mui-icon mui-icon-contact"></span>
            <span class="mui-tab-label">会员</span>
        </router-link>
        <router-link class="mui-tab-item1" to="/shopcar">
            <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="badge">{{$store.getters.getCount}}</span></span>
            <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link class="mui-tab-item1" to="search">
            <span class="mui-icon mui-icon-search"></span>
            <span class="mui-tab-label">搜索</span>
        </router-link>
    </nav>
</div>
</template>
<script>
    export default {
        data(){
            return{
                flag:false
            }
        },
        methods:{
            goBack(){
                this.$router.go(-1)
            }
        },
        created() {
            this.flag = this.$route.path==='/home'?false:true;
        },
        watch:{
            "$route.path":function (newValue) {
                if(newValue==='/home'){
                    this.flag=false;
                }
                else{
                    this.flag=true;
                }

            }
        }
    }
</script>
<style scoped lang="scss">
    .mint-header{
        z-index: 99;
    }
    .app-container{
        padding-top: 40px;
        overflow-x:hidden;
        padding-bottom:50px;
    }
    .v-enter{
        opacity:0;
        transform:translateX(100%)
    }
    .v-leave-to{
        opacity:0;
        transform:translateX(-100%);
        position:absolute;
    }
    .v-enter-active,
    .v-leave-active{
        transition: all 0.4s ease;
    }
    .mui-bar-tab .mui-tab-item1.mui-active {
        color: #007aff;
    }

    .mui-bar-tab .mui-tab-item1 {
        display: table-cell;
        overflow: hidden;
        width: 1%;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #929292;
    }

    .mui-bar-tab .mui-tab-item1 .mui-icon {
        top: 3px;
        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
    }

    .mui-bar-tab .mui-tab-item1 .mui-icon~.mui-tab-label {
        font-size: 11px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
    }

</style>
