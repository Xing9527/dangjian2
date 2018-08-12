<template>
  <div class="box">
      <div class="top">
          <img :src="img" alt="">
          <router-link to="/login" class="login">{{username}}</router-link>
      </div>
      <div class="nav">
          <ul>
              <li>
                  <router-link to="/info" class="container">
                      <img src="../imgs/person.png" class="pic" alt="">
                      <span>个人信息</span>
                  </router-link>
              </li>
              <li>
                  <router-link to="/score" class="container">
                      <img src="../imgs/lxjf.png" class="pic" alt="">
                      <span>个人量化积分</span>
                  </router-link>
              </li>
              <li>
                  <router-link to="/changePwd" class="container">
                      <img src="../imgs/xgmm.png" class="pic" alt="">
                      <span>修改密码</span>
                  </router-link>
              </li>
              <li>
                  <router-link to="" class="container">
                      <img src="../imgs/icon_03.png" class="pic" alt="">
                      <span>党费缴纳</span>
                  </router-link>
              </li>
          </ul>
      </div>
      <div class="btn">
          <button @click="logout" v-if="status==true">退出登录</button>
      </div>
      <myFooter></myFooter>  
  </div>
</template>
<script>
import myFooter from "../components/myFooter"
export default {
  data() {
      return {
          img:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1326461856,3179925938&fm=200&gp=0.jpg",
          username:"用户未登录，点击登录",
          status:""
      }
  },
  components:{
      myFooter
  },
  methods:{
      isLogin() {
          this.$axios.get('userIsLogin').then(res => {
              if(res.ret) {
                  this.img = res.data.img;
                  this.username = res.data.username;
                  this.status = true;
              }else{
                  this.status = false
              }
          })
      },
      logout() {
          this.$axios.get('userLogout').then(res => {
              if(res.ret) {
                  this.$router.push('/login')
              }
          })
      }
  },
  created() {
      this.isLogin()
  }
}
</script>
<style scoped>
.top{
    height: 140px;
    background: #c50206;
    text-align: center;
}
.top img{
    margin: 40px 0 10px;
    width: 62.5px;
    height: 62.5px;
    border-radius: 50%;
    border: 1px solid #c50206;
}
.login{
    display: block;
    color: #fff;
}
.container{
    display: flex;
    padding: 0 10px;
    height: 54px;
    font-size: 16px;
    border-bottom:1px solid #ddd;
    line-height: 54px;
    background: url(../imgs/right.png) no-repeat;
    background-size: 8px 12px;
    background-position: 95% 50%;
}
.container span{
    margin-left: 10px;
}
.pic{
    align-self: center;
    width: 32px;
    height: 32px;
}
.btn{
    margin: 40px 0 0;
    padding: 0 12px;
}
.btn button{
    width: 100%;
    height: 47px;
    background: #ef473a;
    text-align: center;
    line-height: 47px;
    color: #fff;
    font-size: 16px;
    border-radius: 4px;
}
</style>
