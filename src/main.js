console.log("ok");
import Vue from 'vue'
import app from './App.vue'
import { Header,Swipe, SwipeItem,Button} from 'mint-ui';
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
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name,Button)
import VueResource from 'vue-resource';
Vue.use(VueResource)
var vm = new Vue({
    el:'#app',
    data:{},
    methods:{},
    render:c=>c(app),
    router,
});