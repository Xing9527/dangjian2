<template>
  <div class="talk">
      <p class="content" v-html="content">
          
      </p>
      <div class="choose">
          <select v-model="party">
              <option value="1">信息工程学院教职工第一党支部</option>
              <option value="2">信息工程学院教职工第二党支部</option>
              <option value="3">信息工程学院学生党支部</option>
              <option value="4">信息工程学院学生流动党支部（北京）</option>
          </select>
          <button @click="go">下一步</button>
      </div>
  </div>
</template>
<script>
import { MessageBox } from 'mint-ui';
export default {
  data() {
      return {
          content:"",
          party:0
      }
  },
  methods:{
      getPingyi() {
          this.$axios.get('pingyiOpenOne').then(res => {
              if(!res.data) {
                    MessageBox('提示', '没有开启的评议');                   
              }else{
                  this.content = res.data.content;
              }
          })
      },
      go() {
          this.$router.push({path:'/dangyuan',query:{party:this.party}})
      }
  },
  created() {
      this.getPingyi()
  }
}
</script>
<style scoped>
.talk{
    padding: 43px 0 0 0;
}
.content{
    padding: 30px 30px 0;
    font-size: 14px;
    line-height: 25px;
    color: #333;
}
.choose{
    margin-top: 20px;
    text-align: center;
}
select{
    padding: 0 15px;   
    width: 200px;
    height: 40px;
    background: #c50206;
    color:#fff;
    border-radius: 5px;
    outline-style: none;            
}
button{
    margin-left: 15px;
    background:#c50206 ;
    width: 70px;
    height: 40px;
    border-radius: 5px;
    color:#fff;    
}
</style>
