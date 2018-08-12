<template>
  <div class="reply">
      <div class="msg clear">
            <div class="container clear">
                <img :src="msg.headerImg" alt="">
                <div class="item">
                    <h3>{{msg.name}}</h3>
                    <p><i class="iconfont icon-time"></i> {{msg.createTime}}</p>
                </div>
            </div>
            <div class="content">{{msg.message}}</div>
        </div>
        <div class="rep clear" v-for="item in replyList" :key="item._id" style="margin:0;border-bottom:1px solid #ccc">
            <div class="container clear">
                <img :src="item.img" alt="">
                <div class="item">
                    <h3>{{item.name}}</h3>
                    <p><i class="iconfont icon-time"></i> {{item.createTime}}</p>
                </div>
            </div>
            <div class="content">{{item.reply}}</div>
        </div>
        <p class="no-more">没有更多数据了...</p>
        <div class="add">
            <input type="text" v-model="reply">
            <button class="btn" @click="updata">评论</button>
        </div>
  </div>
</template>
<script>
import timeTrans from "../../util/timeTrans";
export default {
  data() {
      return {
          msg:{
              headerImg:"",
              name:"",
              createTime:"",
              message:""
          },
          reply:"",
          replyList:[]
      }
  },
  methods:{
      getData() {
          this.$axios.get('getMsg',{id:this.$route.query.id}).then(res => {
              res.data[0].createTime = timeTrans(res.data[0].createTime);
              this.msg = res.data[0]
              for(var i=0;i<res.data[0].reply.length;i++) {
                  res.data[0].reply[i].createTime = timeTrans(res.data[0].reply[i].createTime)
              }
              this.replyList = res.data[0].reply;
          })
      },
      updata() {
          if(this.reply.trim()) {
              this.$axios.post('addReply',{reply:this.reply,id:this.$route.query.id}).then(res => {
                  if(res.ret) {
                      this.$router.go(0)
                  }
              })
          }
      }
  },
  created() {
      this.getData()
  }
}
</script>
<style scoped>
.reply{
    position: fixed;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin-top: 43px;
    background: #f1f1f1;
}
.msg{
    margin: 10px;;   
    padding: 16px;
    margin-bottom: 10px;
    border-bottom: 1px solid #eee;
    background:#fff;
}
.rep{
    margin-top: 10px;
    padding: 16px;
    background: #fff;
}
img{
    float: left;
    width: 35px;
    height: 35px;
    border-radius: 50%;
}
.item{
    float: left;
    margin-left: 10px;
}
h3{
    margin: 8px 0 12px 0;
    font-size: 16px;
    color:#333;
}
i{
    font-size: 12px;
}
.content{
    width: 100%;
    word-wrap: break-word;
    word-break: normal;
    line-height: 20px;
    margin-top:10px;
    padding: 10px 0;
    font-size: 16px;
    color: #333;
}
.no-more{
    text-align: center;
    margin-top: 15px;
    font-size: 14px;
}
.add{
    padding: 5px;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    border-top: 1px solid#ccc;
}
.add input {
    padding: 5px 10px;
    width: 87%;
    height: 29px;
    border: 1px solid #ef473a;
    border-radius: 5px;
    font-size: 14px;
    color:#333;
    outline-style: none;            
}
.btn{
    margin-left: 5px;
    height: 30px;
    width: 35px;
    background: #c50206;
    color: #fff;
    border-radius: 5px;
}
</style>
