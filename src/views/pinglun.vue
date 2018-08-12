<template>
  <div class="pinglun">
      <h3>个人总结</h3>
      <img :src="img" alt="">
      <div class="choose">
          <label>
              <input type="radio" v-model="evaluate" name="radio" value="1">
              <div class="item"><span></span></div>优
          </label>
          <label>
              <input type="radio" v-model="evaluate" name="radio" value="2">
              <div class="item"><span></span></div>良
          </label>
          <label>
              <input type="radio" v-model="evaluate" name="radio" value="3">
              <div class="item"><span></span></div>中
          </label>
          <label>
              <input type="radio" v-model="evaluate" name="radio" value="4">
              <div class="item"><span></span></div>差
          </label>
          <button @click="submit">提交</button>
      </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
  data() {
      return {
        evaluate:0,
        img:""      
      }
  },
  methods:{
      getSummary() {
          this.$axios.get('getSummary',{id:this.$route.query.id}).then(res => {
              this.img = res.data[0].img
          })
      },
      submit() {
          this.$axios.post('evaluateSummary',{evaluate:this.evaluate,id:this.$route.query.id}).then(res => {
              if(res.ret) {
                  Toast({
                        message: '评论成功！',
                        duration: 2000
                  });  
                  this.$router.go(-1)
              }
          })
      }
  },
  created() {
      this.getSummary()
  }
}
</script>
<style scoped>
.pinglun{
    padding: 63px 10px 0 10px;
}
h3{
    margin-bottom: 20px;
    font-size: 14px;
    color: #333;
    text-align: center;
}
img{
    width: 100%;
}
.choose{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px;
    background: #eee;
    font-size: 14px;
    color: #333;
}
input{
    display: none;
}
.item{
    display: inline-block;
    margin: 0 10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
}
label{
    line-height: 20px;
}
span{
    display: inline-block;
    width: 13px;
    height: 8px;
    border-left: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transform: rotateZ(-45deg) translateX(4px);
}
label input:checked + .item{
    background: #ef473a;
}
button{
    margin-left: 10px;
    width: 50px;
    height: 25px;
    border-radius: 5px;
    background: #ef473a;
    color: #fff;
}
</style>
