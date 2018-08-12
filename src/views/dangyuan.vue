<template>
  <div class="dangyuan">
      <ul>
          <li class="clear" v-for="item in userList" :key="item._id" @click="summary(item._id)">
              <img :src="item.headerImg" alt="">
              <h3>{{item.name}}</h3>
              <p>{{item.party}}</p>
          </li>
      </ul>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
  data() {
      return {
          userList:[],
          pingyiID:""
      }
  },
  methods:{
      getUsers() {
          this.$axios.get('getMember',{party:this.$route.query.party}).then(res => {
              for(var i=0;i<res.data.length;i++) {
                  if(res.data[i].party==1){
                      res.data[i].party = "信息工程学院教职工第一党支部"
                  }else if(res.data[i].party==2){
                      res.data[i].party = "信息工程学院教职工第二党支部"                      
                  }else if(res.data[i].party==3) {
                      res.data[i].party = "信息工程学院学生党支部"                                            
                  }else{
                      res.data[i].party = "信息工程学院学生流动党支部（北京）"                                            
                  }
              }
              this.userList = res.data
          })
      },
      getPingyi() {
          this.$axios.get('pingyiOpenOne').then(res => {
              this.pingyiID = res.data._id
          })
      },
      summary(userID) {
          this.$axios.get('getOneSummary',{pingyiID:this.pingyiID,userID}).then(res => {
              if(res.code==201) {
                  Toast({
                        message: '该用户还未上传个人总结',
                        duration: 2000
                  }); 
              }else if(res.code==202) {
                  Toast({
                        message: '您已经评论过了',
                        duration: 2000
                  }); 
              }else if(res.code==200){
                  this.$router.push({path:'/pinglun',query:{id:res.data._id}})
              }
          })
      }
  },
  created() {
      this.getUsers();
      this.getPingyi()
  }
}
</script>
<style scoped>
.dangyuan{
    padding: 43px 0 0 0;
}
li{
    padding:10px 15px;
    border-bottom: 1px solid #ccc;
    line-height: 35px;
}
img{
    float: left;
    width: 30px;
    height: 30px;
    border-radius: 50%;
}
h3{
    float: left;
    margin-left: 10px;
    font-size: 16px;
    color: #333;

}
p{
    float: right;
    color: #333;
    
}
</style>
