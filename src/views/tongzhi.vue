<template>
  <div class="box">
      <ul>
          <li v-for="item in newsList" :key="item._id" class="clear">
              <router-link :to="'/news/detail?id='+item._id">
                  <div class="icon">
                      <i class="iconfont icon-laba001hover"></i>
                  </div>
                  <div class="text">
                      <h3>{{item.title}}</h3>
                      <p>{{item.createTime}}</p>
                  </div>
              </router-link>
          </li>
      </ul>
      <div class="nothing">
        没有更多数据了...
      </div>
      <myFooter></myFooter>
  </div>
</template>
<script>
import transTime from '../../util/timeTrans'
import myFooter from "../components/myFooter"
export default {
    data() {
        return {
            newsList:[]
        }
    },
    components:{
        myFooter
    },
    methods:{
        getData() {
            this.$axios.get('getInform').then(res => {
                for(var i=0;i<res.data.length;i++) {
                    res.data[i].createTime = transTime(res.data[i].createTime)
                }
                this.newsList = res.data
            })
        }
    },
    created() {
        this.getData()
    }
}
</script>
<style scoped>
.icon-laba001hover{
    padding: 8px;
    font-size: 22px;
    border-radius: 50%;
    color: #fff;
    background: #c50206;

}
li{
    padding: 10px 10px 20px;
    border-bottom: 1px solid #eee;
}
.icon{
    float: left;
    margin: 22px 0 0 20px;
}
.text{
    float: right;
    width: 274px;
}
h3{
    margin-bottom: 10px;
    color: #000;
    font-size: 14px;
    line-height: 23px;
}
.nothing{
    margin-top: 15px;
    text-align: center;
    font-size: 14px;
}
</style>
