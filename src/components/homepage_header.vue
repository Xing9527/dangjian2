<template>
  <div class="header">
    <img src="../imgs/icon-header.png" alt="" v-if="$route.name=='homepage'">
    <router-link to="/infoChange" class="info-change" v-if="$route.name=='个人信息'">编辑</router-link>    
    <span to="" @click="$router.back()" class="iconfont icon-left" 
     v-if="$route.name!='homepage'&&$route.name!='通知早知道'&&$route.name!='我的党建'&&$route.name!='个人信息'"></span>
     <router-link to="/myparty" class="iconfont icon-left"  v-if="$route.name=='个人信息'"></router-link>
    <h2 v-if="$route.name != 'homepage'">{{$route.name}}</h2>
  </div>
</template>
<script>
import { MessageBox } from 'mint-ui';
export default {
    methods:{
      isLogin() {
        this.$axios.get('userIsLogin').then(res => {
          if(!res.ret){
            MessageBox('提示', '请先登录！'); 
            setTimeout(() => {
              this.$router.push('/login')
            },1000)           
          }
        })
      }
    },
    watch:{
      $route(to,from,next){
        if(to.name=='个人信息'||to.name=='个人量化积分'||to.name=='修改密码'||to.name=='心得总结'||to.name=='个人总结'||to.name=='思想汇报'){
          this.isLogin()
        }
      }
    }
}
</script>
<style scoped>
.header{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 43px;
  background: #c50206;
  z-index: 1001;
}
img{
  margin:5px ;
  width: 135px;
  height: 32px;
}
h2{
  line-height: 43px;
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-weight: 300;
}
.icon-left{
  margin: 0 0 0 5px;
  float: left;
  color: #fff;
  line-height: 43px;
  font-size: 22px;
}
.info-change{
  padding-right: 10px;
  float: right;
  line-height: 43px;
  font-size: 16px;
  color: #fff;
}
</style>
