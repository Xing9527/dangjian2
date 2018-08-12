<template>
  <div class="info">
      <ul>
          <li>
              <span class="left">头像</span>
              <img class="pic" :src="info.headerImg" alt="">
          </li>
          <li>
              <span class="left">姓名</span>
              <span class="right">{{info.name}}</span>
          </li>
          <li>
              <span class="left">身份证号</span>
              <span class="right">{{info.idNum}}</span>
          </li>
          <li>
              <span class="left">性别</span>
              <span class="right">{{info.sex}}</span>
          </li>
          <li>
              <span class="left">政治面貌</span>
              <span class="right">{{info.politicsStatus}}</span>
          </li>
      </ul>
  </div>
</template>
<script>
export default {
  data() {
      return {
          info:{
              headerImg:"",
              name:"",
              idNum:"",
              sex:"",
              politicsStatus:""
          }
      }
  },
  methods:{
      getInfo() {
          this.$axios.get('getInfo').then(res => {
              this.info = res.data
          })
      }
  },
  created() {
      this.getInfo()
  }
}
</script>
<style scoped>
.info{
    padding: 43px 0 0 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    z-index: 1000;
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
</style>
