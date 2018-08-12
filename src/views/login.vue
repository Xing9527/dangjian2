<template>
  <div class="login">
      <div class="pic">
          <img src="../imgs/icon-header.png" alt="">
      </div>
      <div class="form">
          <input type="text" v-model="formData.idNum">
          <input type="password" v-model="formData.pwd">
          <button class="btn" @click="login">登录</button>
      </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
  data() {
      return {
          formData:{
              idNum:"",
              pwd:""
          }
      }
  },
  methods:{
      login() {
          this.$axios.post('userLogin',this.formData).then(res => {
              if(res.ret) {
                      Toast({
                        message: '登录成功',
                        duration: 2000
                      });                     
                      this.$router.push('/myparty')
              }else{
                  Toast({
                    message: '登录失败',
                    duration: 2000
                  });
              }
          }) 
      }
  }
}
</script>
<style scoped>
.login{
    padding: 43px 0 0 0;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #c50206;
    z-index: 1000;
}
.pic{
    margin-top: 32px;
    text-align: center;
}
.pic img {
    width: 203px;
    height: 49px;
}
.form{
    margin: 36px auto 0;
    width: 300px;
}
.form input{
    padding: 5px 10px;
    width: 100%;
    height: 42px;
    color: #fff;
    font-size: 14px;
    margin-bottom: 10px;
    border: 1px solid #ff0;
    background: #c50206;
    border-radius: 5px;
    box-sizing: border-box;
}

.btn{
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
