<template>
  <div class="live">
      <div class="pic">
          <img src="../imgs/timg.jpg" alt="">
      </div>
      <div class="container" @click="$router.push({path:'/news',query:{type:2}})">
          <div class="item">
              <img src="../imgs/icon1.png" alt="">
              <span>政治学习</span>
          </div>
      </div>
      <div class="container" @click="$router.push('/sixianghuibao')">
          <div class="item">
              <img src="../imgs/icon2.png" alt="">
              <span>思想汇报</span>
          </div>
      </div>
      <div class="container" @click="$router.push('/xindezongjie')">
          <div class="item">
              <img src="../imgs/icon3.png" alt="">
              <span>心得总结</span>
          </div>
      </div>
      <div class="container" @click="go">
          <div class="item">
              <img src="../imgs/icon4.png" alt="">
              <span>民主评议</span>
          </div>
      </div>
      <div class="container" @click="$router.push('/map')">
          <div class="item">
              <img src="../imgs/icon5.png" alt="">
              <span>流动党员找组织</span>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  methods:{
      go() {
          this.$router.push('/twobtn')
      }
  }
}
</script>
<style scoped>
.live{
    padding: 43px 0 0 0;
}
.live img{
    width: 100%;
}
.container{
    margin-top: 10px;
}
.item{
    margin: 15px 20px;
    float: left;
    width: 85px;
    text-align: center;
}
.item img{
    margin-bottom: 10px;
    width: 85px;
    height: 85px;
}
.item span{
    font-size: 14px;
    line-height: 18px;
}
</style>
