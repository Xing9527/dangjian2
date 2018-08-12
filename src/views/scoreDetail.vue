<template>
  <div class="box">
      <ul>
          <li v-for="item in scoreList" :key="item.time">
              <div class="container">
                  <h3>{{item.msg}}</h3>
                  <span>+{{item.add}}</span>
              </div>
              <p>{{item.time}}</p>
          </li>
      </ul>
  </div>
</template>
<script>
import timeTrans from "../../util/timeTrans";
export default {
  data() {
      return {
          scoreList:[]
      }
  },
  methods:{
      getDetail() {
          this.$axios.get('getScoreDetail').then(res => {
              for(var i=0;i<res.data.length;i++){
                  res.data[i].time = timeTrans(res.data[i].time)
              }
              this.scoreList = res.data
          })
      }
  },
  created() {
    this.getDetail()      
  }
}
</script>
<style scoped>
li{
    padding: 24px 20px;
    height: 79px;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
}
.container{
    display:flex;
    justify-content: space-between;
}
h3{
    font-size: 18px;
    color: #333;
}
span{
    font-size: 14px;
    color: #c50206;
}
p{
    margin-top: 20px;
    font-size: 14px;
}
</style>
