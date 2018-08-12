<template>
  <div class="box">
      <div class="img ">
          <span>{{score}}</span>
          <img src="../imgs/jifen.png" alt="">
      </div>
      <div class="score-detail">
            <router-link to="/scoreDetail" class="container">
                <img src="../imgs/lxjf.png" class="pic" alt="">
                <span>积分明细</span>
            </router-link>
      </div>
      <ul>
          <li>
              <span>积分规则</span>
              <img src="../imgs/wenhao.png" alt="">
          </li>
          <li>
              <span class="left">登录APP</span>
              <span class="right">3</span>
          </li>
          <li>
              <span class="left">完善个人信息</span>
              <span class="right">2</span>
          </li>
          <li>
              <span class="left">查看积分</span>
              <span class="right">1</span>
          </li>
          <li>
              <span class="left">查看新闻眼</span>
              <span class="right">1</span>
          </li>
          <li>
              <span class="left">按时交纳党费</span>
              <span class="right">5</span>
          </li>
          <li>
              <span class="left">上传思想汇报</span>
              <span class="right">3</span>
          </li>
      </ul>
  </div>
</template>
<script>
export default {
  data() {
      return {
          score:0
      }
  },
  methods:{
      getScore() {
          this.$axios.get('getScore').then(res => {
              this.score = res.data
          })
      }
  },
  created() {
      this.getScore()
  }
}
</script>
<style scoped>
.img{
    position: relative;
    width: 100%;
}
.img span{
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 75px;
    color: #fff;
    font-size: 16px;
}
.container{
    display: flex;
    margin: 3px 0 0 0;
    padding: 0 10px;
    height: 54px;
    font-size: 16px;
    border-top:1px solid #ddd;
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
li{
    padding: 0 10px;
    display:flex;
    justify-content: space-between;
    height: 34px;
    line-height: 34px;
    border-bottom: 1px solid #ddd;
    font-size: 14px;
}
li img{
    align-self: center;
    width: 18px;
    height: 18px;
}
li span:nth-of-type(2){
    color:#c50206;
}
li:nth-of-type(1){
    color:#000;
    background: #eee;
}
</style>
