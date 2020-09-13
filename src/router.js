import VueRouter from "vue-router";
import home from './components/tabbar/home.vue';
import member from './components/tabbar/member.vue';
import shopcar from './components/tabbar/shopcar.vue';
import search from './components/tabbar/search.vue';
import newslist from './components/news/newslist.vue';
import newsinfo from './components/news/newsinfo.vue';
import photos from './components/photos/photos.vue'
import photoinfo from './components/photos/photoinfo.vue'

var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/member',component:member},
        {path:'/shopcar',component:shopcar},
        {path:'/search',component:search},
        {path:'/home/newslist',component:newslist},
        {path:'/home/newsinfo/:id',component:newsinfo},
        {path:'/home/photos',component:photos},
        {path:'/home/photoinfo/:id',component:photoinfo}
    ],
    linkActiveClass:'mui-active'
});
export default router