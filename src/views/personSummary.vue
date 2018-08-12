<template>
  <div class="summary">
      <div class="upload">
          <img v-if="img" :src="img" alt="">
          <uploadImg @getImg="getImg"></uploadImg>
      </div>
      <div class="btn">
          <button @click="upload" v-if="$route.name=='个人总结'">提交审核</button>
          <button @click="upSiXiang" v-if="$route.name=='思想汇报'">提交审核</button>
          <button @click="upXinDe" v-if="$route.name=='心得总结'">提交审核</button>
      </div>
  </div>
</template>
<script>
import uploadImg from "../components/uploadImg";
import { MessageBox } from 'mint-ui';
export default {
    data() {
        return {
            img:"",
            pingyiID:""
        }
    },
    components:{
        uploadImg
    },
    methods:{
        getImg(url) {
            this.img = url;
        },
        upload() {
            this.$axios.post('addSummary',{img:this.img,pingyiID:this.pingyiID}).then(res => {
                if(res.ret) {
                    MessageBox('提示', '提交成功，请等待审核');                                       
                    this.$router.push('/twobtn')
                }else{
                    MessageBox('提示', '不能重复上传');                                       
                }
            })
        },
        upSiXiang(){
            this.$axios.post('uploadSi',{img:this.img}).then(res => {
                if(res.ret) {
                    MessageBox('提示', '提交成功，请等待审核');                                       
                }
            })
        },
        upXinDe(){
            this.$axios.post('uploadXin',{img:this.img}).then(res => {
                if(res.ret) {
                    MessageBox('提示', '提交成功，请等待审核');                                       
                }
            })
        },
        getPingyi() {
            this.$axios.get('pingyiOpenOne').then(res => {
                if(!res.data) {
                    MessageBox('提示', '当前没有开启的民主评议');                                       
                    setTimeout(() => {
                        this.$router.push('/')
                    })
                }else{
                    this.pingyiID = res.data._id;                   
                }
            })
        }
    },
    created() {
        if(this.$route.name=="个人总结"){
            this.getPingyi()            
        }
    }
}
</script>
<style scoped>
.summary{
    padding: 43px 0 0 0;
}
.upload{
    margin: 10px;
}
img{
    margin-right: 10px;
    float: left;
    width: 105px;
    height: 105px;
}
.btn button {
    width: 100%;
    padding: 15px 0;
    font-size: 16px;
    color: #fff;
    background: rgb(239, 71, 58);
    border-radius: 5px;
    outline-style: none;        
}
.btn{
    margin-top: 330px;
}
</style>
