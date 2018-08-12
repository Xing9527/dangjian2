<template>
  <div class="box">
    <router-link to="/login" class="login" v-if="$route.name=='homepage'&&status==false">登录</router-link>    
    <div class="swiper" :style="'height:'+screenWidth*0.5+'px'">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in swiperList" :key="item._id">
          <router-link :to="'/news/detail?id='+item.path">
            <img :src="item.img" alt="">
            <p class="title">{{item.title}}</p>
          </router-link>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="nav">
      <div class="container">
        <router-link to="/news?type=1&&pn=1" class="item">
          <img src="../imgs/icon_01.png" alt="">
          <p>信工新闻眼</p>
        </router-link>
        <router-link to="/live" class="item">
          <img src="../imgs/icon_03.png" alt="">
          <p>掌上组织生活</p>
        </router-link>
        <router-link to="/message" class="item">
          <img src="../imgs/icon_05.png" alt="">
          <p>党员云互动</p>
        </router-link>
      </div>
      <div class="container">
        <router-link to="/news?type=3" class="item">
          <img src="../imgs/icon_04.png" alt="">
          <p>党建一点通</p>
        </router-link>
        <router-link to="/news?type=4" class="item">
          <img src="../imgs/icon_06.png" alt="">
          <p>党员亮身份</p>
        </router-link>
        <router-link to="/historyToday" class="item">
          <img src="../imgs/icon_02.png" alt="">
          <p>党史上的今天</p>
        </router-link>
      </div>
    </div>
    <div class="pic">
      <img src="../imgs/banner02.png" alt="">
    </div>
    <div class="nav2">
      <img src="../imgs/tese.png" alt="">
      <router-link to="/news?type=5" class="top-left"></router-link>
      <router-link to="/news?type=6" class="top-right"></router-link>
      <router-link to="/news?type=7" class="bottom-left"></router-link>
      <router-link to="/news?type=8" class="bottom-right"></router-link>
    </div>
    <myFooter></myFooter>  
  </div>
</template>
<script>
import myFooter from "../components/myFooter"
export default {
  data() {
    return {
      swiperList:[],
      status:true,
      screenWidth: document.body.clientWidth  
    }
  },
  components:{
      myFooter
  },
  methods:{
    getSwiper() {
      this.$axios.get('getSwiper').then(res => {
        this.swiperList = res.data
      })
    },
    isLogin() {
      this.$axios.get('userIsLogin').then(res => {
        if(res.ret) {
          this.status = true;
        }else{
          this.status = false;
        }
      })
    }
  },
  created() {
    this.getSwiper();
    this.isLogin();
  },
  mounted () {
    const that = this
    window.onresize = () => {
        return (() => {
            window.screenWidth = document.body.clientWidth
            that.screenWidth = window.screenWidth
        })()
    }
  },
  watch: {
      screenWidth (val) {
          this.screenWidth = val
      }
  }
}
</script>
<style scoped>
.login{
  position: fixed;
  top:20px;
  right: 10px;
  font-weight: 300;
  font-size: 18px;
  color: #fff;
  z-index: 100000;
}
.swiper{
  position: relative;
  height: 30%;
}
.swiper img{
  width: 100%;
  height: 100%;
}
.swiper .title{
  padding: 10px 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 14px;
  color: #fff;
  background: rgba(0,0,0,.5);
}
.nav{
  padding: 18px 0 23px;
  box-sizing: border-box;
  height: 200px;
  background-image: url(../imgs/bt_bg.png);
  background-size: 100% 200px;
}
.container{
  display: flex;
  justify-content: space-around;
}
.container:nth-of-type(2){
  margin-top: 30px;
}
.item{
  width: 125px;
  text-align: center;
}
.item img{
  margin-bottom: 10px;
  width: 43px;
  height: 43px;
}
.pic img{
  width: 100%;    
}
.nav2{
  position: relative;
}
.nav2 img{
  width: 100%;  
}
.top-left{
  position: absolute;
  left: 33.3%;
  top: 0;
  width: 33.3%;
  height: 50%;
}
.top-right{
  position: absolute;
  left: 66.7%;
  top:0;
  width: 33.3%;
  height: 50%;
}
.bottom-left{
  position: absolute;
  left: 33.3%;
  top:50%;
  width: 33.3%;
  height: 50%;
}
.bottom-right{
  position: absolute;
  left: 66.7%;
  top:50%;
  width: 33.3%;
  height: 50%;
}
</style>
