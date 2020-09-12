<template>
    <div>
<!--        顶部滑动条区域-->
        <div id="slider" class="mui-slider ">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item',item.id===0?'mui-active':'']"  v-for="item in cates" :key="item.id" @click="getPhotosByCateId(item.id)">
                        {{item.title}}
                    </a>
                </div>
            </div>

        </div>
<!--        图片懒加载区域-->
        <ul>
            <li v-for="item in list">
                <img v-lazy="item.img_url">
            </li>
        </ul>
    </div>
</template>
<script>
    import mui from '../../lib/mui/js/mui.js'
    export default{
        data(){
            return{
                cates:[],//存储图片分类
                list:[],//存储图片列表的数组
            }
        },
        created(){
            this.getAllCategory();
            this.getPhotosByCateId(0)
        },
        methods:{
            getAllCategory(){
                this.$http.get('http://www.liulongbin.top:3005/api/getimgcategory').then(response=>{
                    if(response.body.status===0){
                        response.body.message.unshift({title:'全部',id:0})
                        this.cates= response.body.message;
                    }
                })
            },
            getPhotosByCateId(CateId){
                this.$http.get('http://www.liulongbin.top:3005/api/getimages/'+CateId).then(response=>{
                    this.list=response.body.message
                    console.log(this.list)
                })
            }
        },
        mounted() {
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        }
    }
</script>
<style lang="scss" scoped>
    * { touch-action: pan-y; }
    img[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    }
</style>