<template>
  <div class="btn">
      <div class="two">
          <router-link to="/personSummary">个人总结</router-link>
          <router-link to="/talk">民主评议</router-link>
      </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.btn{
    padding: 43px 0 0 0;
}
.two{
    margin-top: 200px;
}
a{
    margin: 20px auto;
    display: block;
    width: 200px;
    height: 50px;
    color: #fff;
    background: rgb(239,71,58);
    text-align: center;
    line-height: 50px;
    border-radius: 5px;
    font-size: 16px;
}
</style>
