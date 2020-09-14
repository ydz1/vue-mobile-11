import VueRouter from "vue-router";
import home from './components/tabbar/home.vue';
import member from './components/tabbar/member.vue';
import shopcar from './components/tabbar/shopcar.vue';
import search from './components/tabbar/search.vue';
import newslist from './components/news/newslist.vue';
import newsinfo from './components/news/newsinfo.vue';
import photos from './components/photos/photos.vue'
import photoinfo from './components/photos/photoinfo.vue'
import goodlist from './components/goods/goodlist.vue'
import goodinfo from './components/goods/goodinfo.vue'
import gooddesc from './components/goods/gooddesc.vue'
import goodcomment from './components/goods/goodcomment.vue'

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
        {path:'/home/photoinfo/:id',component:photoinfo},
        {path:'/home/goodlist',component:goodlist},
        {path:'/home/goodinfo/:id',component:goodinfo,name:'ydz'},
        {path:'/home/gooddesc/:id',component:gooddesc,name:'goodDesc'},
        {path:'/home/goodcomment/:id',component:goodcomment,name:'goodComment'}
    ],
    linkActiveClass:'mui-active'
});
export default router