<template>
  <div class="change">
      <div class="form">
            <label>
                <span>旧密码：</span>
                <input type="password" v-model="formData.oldPwd">
            </label>
            <label>
                <span>新密码：</span>
                <input type="password" v-model="formData.newPwd">
            </label>
            <label>
                <span>确认密码：</span>
                <input type="password" v-model="formData.newPwdAgain">
            </label>
            <button @click="changePwd">确定</button>
      </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
import { MessageBox } from 'mint-ui';
export default {
  data() {
      return {
          formData:{
              oldPwd:"",
              newPwd:"",
              newPwdAgain:""
          }
      }
  },
  methods:{
      changePwd() {
          this.$axios.post('changePwd',this.formData).then(res => {
              if(res.code==401) {
                    Toast({
                        message: '旧密码输入错误',
                        duration: 2000
                    }); 
              }else if(res.code==402) {
                     Toast({
                        message: '新密码与旧密码相同',
                        duration: 2000
                    });
              }else if(res.code==403) {
                    Toast({
                        message: '两次输入的新密码不同',
                        duration: 2000
                    });
              }else if(res.code==200) {
                    MessageBox('提示', '修改成功，请重新登录！');
                  setTimeout(() => {
                      this.$router.push('/login')
                  },1000)
              }
          })
      }
  }
}
</script>
<style scoped>
.change{
    padding: 43px 0 0 0;
}
.form{
    margin: 40px auto;
    width: 80%;
}
label{
    display: block;
    width: 100%;
}
span{
    display: block;
    margin: 15px 0;
    color: #000;
    font-size: 14px;
}
input{
    padding: 0 10px;
    width: 100%;
    height: 40px;
    border: 1px solid #333;
    border-radius: 5px;
    outline-style: none;                
}
button{
    margin-top: 15px;
    width: 100%;
    height: 40px;
    background: rgb(239, 71, 58);
    border-radius: 5px;
    color: #fff;
    font-size: 18px;
    outline-style: none;                    
}
</style>
