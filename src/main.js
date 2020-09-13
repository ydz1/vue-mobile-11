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

//全局导入mint-ui的模块
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)


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
});