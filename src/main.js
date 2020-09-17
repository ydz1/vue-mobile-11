console.log("ok");
import Vue from 'vue'
import app from './App.vue'
// 按需导入mint-ui中的模块
// import { Header,Swipe, SwipeItem,Button,Lazyload} from 'mint-ui';
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name,Button)
// Vue.use(Lazyload);

//注册vuex
import Vuex from 'vuex'
Vue.use(Vuex);
 var car = JSON.parse(localStorage.getItem('car')||'[]');
const store = new Vuex.Store({
    state:{
        car:car,//用来存放装入购物车的数据
    },
    mutations:{
        addToCar(state,obj){
            var flag = false;
            state.car.some(item=>{
                if(item.id===obj.id){
                    item.count += parseInt(obj.count);
                    flag = true;
                    return true;
                }
            });
            if(flag===false){
                state.car.push(obj)
            }
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        updateCar(state,obj){//更新购物车的数据
            state.car.some(item=>{
                if(item.id==obj.id){
                    item.count = parseInt(obj.count);
                    return true;
                }
            });
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        removeFromCar(state,id){
            state.car.forEach((item,index)=>{
                if(item.id==id){
                    state.car.splice(index,1)
                }
            });
            localStorage.setItem('car',JSON.stringify(state.car));
        },
        changeSelectedState(state,obj){
            state.car.some(item=>{
                if(item.id==obj.id){
                    item.selected = obj.selected
                }
            });
            localStorage.setItem('car',JSON.stringify(state.car));
        }
    },
    getters:{
        getCount(state){
            var c = 0;
            state.car.forEach(item=>{
                c += item.count;
            });
            return c;
        },
        getGoodsCount(state){
            var o = {};
            state.car.forEach(item=>{
                o[item.id]=item.count;
            });
            return o;
        },
        getSelectedState(state){
            var select = {};
            state.car.forEach(item=>{
                select[item.id] = item.selected;
            });
            return select;
        },
        getTotalPriceAndCount(state){
            var total = {
                count:0,
                amount:0
            };
            state.car.forEach(item=>{
                if(item.selected){
                    total.count += item.count;
                    total.amount += item.price * item.count
                }
            });
            console.log(total);
            return total;
        }
    }
});

//全局导入mint-ui的模块
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//缩略图插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview);
// Vue.use(preview, {
//     mainClass: 'pswp--minimal--dark',
//     barsSize: {top: 0, bottom: 0},
//     captionEl: false,
//     fullscreenEl: false,
//     shareEl: false,
//     bgOpacity: 0.85,
//     tapToClose: true,
//     tapToToggleControls: false
// })

import './lib/mui/css/mui.css';
import './lib/mui/css/icons-extra.css'
import VueRouter from 'vue-router'
import router from './router.js';
import moment from 'moment'
//全局过滤器
Vue.filter("dateFormat",function (dataStr,pattern="YYYY-MM-DD hh:mm:ss") {
    return moment(dataStr).format(pattern)
});

Vue.use(VueRouter);

import VueResource from 'vue-resource';
Vue.use(VueResource)
var vm = new Vue({
    el:'#app',
    data:{},
    methods:{},
    render:c=>c(app),
    router,
    store,//将store挂载到vm实例上
});