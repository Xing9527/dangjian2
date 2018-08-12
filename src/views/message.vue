<template>
  <div class="message">
      <ul>
        <li class="msg clear" v-for="item in msgList" :key="item._id">
            <div class="container clear">
                <img :src="item.headerImg" alt="">
                <div class="item">
                    <h3>{{item.name}}</h3>
                    <p><i class="iconfont icon-time"></i> {{item.createTime}} <i class="iconfont icon-laba001hover"></i> 公开</p>
                </div>
                <div class="hudong">
                    党员互动
                </div>
            </div>
            <div class="content">{{item.message}}</div>
            <router-link :to="'/reply?id='+item._id" class="reply"><i class="iconfont icon-news"></i>回复</router-link>
        </li>
      </ul>
      <i @click="show" class="iconfont icon-xinzeng"></i>
      <div :class="{live:add==false}">
          <div class="bg">
              <div class="over" @click="close"></div>
              <div class="form">
                <textarea v-model="msg" name="" id="" cols="30" rows="10"></textarea>
                <button class="up" @click="upMsg">发布</button>
                <button @click="close" class="close">取消</button>
              </div>
          </div>        
      </div>
  </div>
</template>
<script>
import timeTrans from "../../util/timeTrans";
export default {
  data() {
      return {
          add:false,
          msg:"",
          msgList:[]
      }
  },
  methods:{
      show() {
          this.add = true;
      },
      close() {
          this.add = false;
      },
      upMsg() {
          this.$axios.post('addMsg',{message:this.msg}).then(res => {
              if(res.ret) {
                  this.$router.go(0)
              }
          })
      },
      getMsg() {
          this.$axios.get('getMsg').then(res => {
              for(var i=0;i<res.data.length;i++) {
                  res.data[i].createTime = timeTrans(res.data[i].createTime)
              }
              this.msgList = res.data;
          })
      }
  },
  created() {
      this.getMsg()
  }
}
</script>
<style scoped>
.message{
    width: 100%;
    margin-top: 43px;
    background: #f1f1f1;
}
.msg{
    width: 100%;    
    padding: 16px;
    margin-bottom: 10px;
    border-bottom: 1px solid #eee;
    background:#fff;
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
.hudong{
    float: right;  
    padding: 8px;
    color:#c50206;
    border: 1px solid #c50206;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    border-top-right-radius: 12px; 
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
.reply{
    float: right;
    margin: 10px 0;
    font-size:14px;
    color: #333;
}
.reply i{
    margin-right: 3px;
    color: #333;
    font-size: 15px;
}
.icon-xinzeng{
    position: fixed;
    right: 10px;
    bottom: 100px;
    color: #f00;
    font-size: 55px;
}
.bg {
    position:fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0,0,0,.5);
    z-index:1002;
}
.form{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px;
    background: #eee;
}
textarea{
    padding: 5px;
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
    font-size: 16px;
    color: #333;
    outline-style: none;        
}
.up{
    padding: 5px;
    background: #ef473a;
    color: #fff;
    border: none;
    border-radius: 4px;
}
.close{
    float: right;
    background: none;
}
.live{
    display: none;
}
.over{
    height:70% ;
}
</style>
