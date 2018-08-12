<template>
  <div class="info">
        <div class="btn">
            <div @click="update">保存</div>
        </div>
        <ul>
          <li>
              <span class="left">头像</span>
              <label class="pic">  
                  <input type="file" @change="upload" name="file" class="file">
                  <img class="pic" :src="info.headerImg" alt="">
              </label>
          </li>
          <li>
              <span class="left">姓名</span>
              <span class="right"><input v-model="info.name" type="text"></span>
          </li>
          <li>
              <span class="left">身份证号</span>
              <span class="right">{{info.idNum}}</span>
          </li>
          <li>
              <span class="left">性别</span>
              <span class="right">
                  <label class="radio">
                    <input v-model="info.sex" value="男" name="radio" type="radio">  
                    <span class="sex"><i></i></span>男                                        
                  </label>
                  <label>
                    <input v-model="info.sex" value="女" name="radio"  type="radio">    
                    <span class="sex"><i></i></span>女                                      
                  </label>
              </span>
          </li>
          <li>
              <span class="left">政治面貌</span>
              <span class="right">
                  <label>
                      <select v-model="info.politicsStatus" name="" id="select">
                          <option value="党员">党员</option>
                          <option value="预备党员">预备党员</option>
                          <option value="积极分子">积极分子</option>
                      </select>
                  </label>
              </span>
          </li>
        </ul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
      return {
          info:{
              headerImg:"",
              name:"",
              idNum:"",
              sex:"",
              politicsStatus:""
          },
          token:""
      }
  },
  methods:{
      getInfo() {
          this.$axios.get('getInfo').then(res => {
              this.info = res.data
          })
      },
      getToken() {
          this.$axios.qiniuGet().then(res => {
              this.token = res.data
          })
      },
      upload($event) {
        //   console.log($event)
          var file = $event.target.files[0];
        //   console.log(file)
          var form = new FormData();
          form.append("file",file);
          form.append("token",this.token);
          axios.post('https://upload-z1.qiniup.com',form,{headers:{"Content-Type":"multipart/form-data"}}).then(res => {
              this.info.headerImg = "http://image.yaojunrong.com/" + res.data.key;
          })
      },
      update() {
          this.$axios.post('updateInfo',this.info).then(res => {
              if(res.ret) {
                  this.$router.push('/info')
              }
          })
      }
  },
  created() {
      this.getInfo()
      this.getToken()
  }
}
</script>
<style scoped>
.info{
    position: fixed;
    top: 43px;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    z-index: 1002;
}
.btn{
    position: fixed;
    right: 10px;
    top: 0;
    height: 43px;
    line-height: 43px;
    z-index: 1000000;
    outline-style: none;    
}
.btn div {
    font-size: 16px;
    color:#fff;
    background: none;
}
li{
    padding: 0 10px;
    display:flex;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
    font-size: 14px;
}
.pic{
    align-self: center;
    width: 29px;
    height: 29px;
}
.file{
    display:none;
}
input{
    height: 34px;
    text-align: right;
    vertical-align: middle;
    border: 1px solid #fff;
    font-size: 14px;
    color: grey;
    outline-style: none;
}
.sex{
    margin-right: 3px;
    display: inline-block;
    width: 15px;
    height: 15px;
    border:1px solid #aaa;
    border-radius: 50%;
    line-height: 10px;
    text-align: center;
}
.sex i{
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #fff;
}
label input:checked + .sex{
    background: #05f;
}
.radio input{
    display: none;
}

#select{
    outline-style: none; 
    color: grey;
    font-size: 14px;   
}
</style>
