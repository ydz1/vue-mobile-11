<template>
    <div class="comment-container">
        <h3>发表评论</h3>
        <hr>
        <textarea maxlength="160" placeholder="请输入你想发表的内容(160字以内)" v-model="addComment"></textarea>
        <mt-button type="primary" size="large" @click="addCommentList">发表评论</mt-button>
        <div class="comment-list">
            <div class="comment-item" v-for="(item,index) in commentMessage" :key="item.add_time">
                <div class="comment-title">
                    第{{index+1}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time|dateFormat}}
                </div>
                <div class="comment-body">
                    {{item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="addMore()">加载更多</mt-button>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                pageIndex:1,
                commentMessage:[],
                addComment:''//添加评论
            }
        },
        created(){
          this.getCommentList();
        },
        methods:{
            addCommentList(){
                this.$http.post('http://www.liulongbin.top:3005/api/postcomment/'+this.$route.params.id,{comment:this.addComment.trim()},{emulateJSON:true}).then(response=>{
                    if(response.body.status===0){
                        console.log("hahha")
                        var cmt = {
                            user_name:'匿名用户',
                            add_time:Date.now(),
                            content:this.addComment.trim()
                        };
                        this.commentMessage.unshift(cmt);
                        this.addComment='';
                    }
                })
            },
            addMore(){
                this.pageIndex++;
                this.getCommentList();
            },
            getCommentList(){
                this.$http.get('http://www.liulongbin.top:3005/api/getcomments/'+this.id+'?pageindex='+this.pageIndex).then(response=>{
                    if(response.body.status===0){
                        this.commentMessage = this.commentMessage.concat(response.body.message);
                    }
                })
            }
        },
        props:["id"],
    }
</script>
<style lang="scss" scoped>
    .comment-container{
        h3{
            font-size:20px;
        }
        textarea{
            font-size:10px;
            margin:0;
        }
        .comment-title{
            font-size:15px;
            background-color: #ccc;
        }
        .comment-body{
            line-height:30px;
            text-indent: 2em;
        }
    }

</style>