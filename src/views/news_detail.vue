<template>
  <div class="news">
      <h2 class="header">
          {{news.type}}
      </h2>
      <h1>{{news.title}}</h1>
      <div v-html="news.content" class="content"></div>
  </div>
</template>
<script>
export default {
  data() {
      return {
          news:{
              type:"",
              title:"",
              content:""
          }
      }
  },
  methods:{
      getData() {
          this.$axios.get('getNews',{id:this.$route.query.id}).then(res => {
              this.news = res.data;
          })
      }
  },
  created() {
      this.getData()
  }
}
</script>
<style>
.content p{
    margin: 10px 0;
}
</style>
<style scoped>
.news{
    padding: 53px 10px 10px;
}
h2{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10000;
    width: 60%;
    margin: 0 auto;
    color: #fff;
    height: 43px;
    text-align: center;
    line-height: 43px;
    font-size: 18px;
    font-weight: 300;
}
h1{
    color: #333;
    font-size: 22px;
    line-height: 28px;
}
.content{
    color: #333;
    line-height: 20px;
    font-size: 14px;
}
</style>
