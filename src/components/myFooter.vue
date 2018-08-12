<template>
    <div class="footer">
      <router-link to="/" :class="{active:$route.name == 'homepage'}" >
        <i class="iconfont icon-shouye"></i>
        <p>首页</p>
      </router-link>
      <router-link to="/tongzhi" :class="{active:$route.name == '通知早知道'}">
        <i class="iconfont icon-news"></i>
        <p>通知早知道</p>
      </router-link>
      <router-link to="/myparty" :class="{active:$route.name == '我的党建'}">
        <i class="iconfont icon-person-fill"></i>
        <p>我的党建</p>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "myFooter"
    }
</script>

<style scoped>
.footer{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 45px;
  background: #fff;
  display: flex;
  justify-content: space-around;
  z-index: 1000;
}
a{
  padding: 10px 0;
  width: 125px;
  color: #aaa;
  font-size: 12px;
  text-align: center;
  box-sizing: border-box;
  border-top: 3px solid #fff;
}
i{
  font-size: 22px;
}
p{
  margin-top: 8px;
}
.active{
  color:#c50206;
  border-top: 3px solid #c50206;
}
</style>
