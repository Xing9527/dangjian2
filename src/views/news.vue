<template>
  <div class="news">
    <h2 class="header">
        {{routeName}}
    </h2>
    <ul
    v-infinite-scroll="loadMore"
    :infinite-scroll-disabled="loading"
    :infinite-scroll-distance="10"
    infinite-scroll-listen-for-event>
        <li v-for="item in newsList" :key="item._id" class="clear" @click="goDetail(item._id)">
            <img :src="item.img" alt="">
            <div class="item">
                <h3>{{item.title}}</h3>
                <p class="time">{{item.createTime}} <span><i class="iconfont icon-eyes"></i>{{item.view}}</span></p>
            </div>
        </li>
    </ul>
    <p class="no-more" v-if="over==true">没有更多数据了...</p>      
  </div>
</template>
<script>
import { Indicator } from 'mint-ui';
import { Toast } from 'mint-ui';
import timeTrans from '../../util/timeTrans'
import { setTimeout } from 'timers';
export default {
  data() {
      return {
          newsList:[],
          routeName:"",
          api:"",
          loading:"",
          pn: 1,
          isLoading: true,
          over:false
      }
  },
  methods:{
      getNews() {
          var type = this.$route.query.type;
          if(type==1){
              this.routeName = "信工新闻眼";
              this.api = "getNewsEyes"
          }else if(type==2){
              this.routeName = "政治学习";
              this.api = "getPoliticaLearn"
          } else if(type==3) {
              this.routeName = "党建一点通";
              this.api = "getMadeEasy"
          }else if(type==4) {
              this.routeName = "党员亮身份";
              this.api = "getShowID"
          }else if(type==5) {
              this.routeName = "随时随地学";
              this.api = "getStydy"
          }else if(type==6) {
              this.routeName = "随时随地拍";
              this.api = "getPic"
          }else if(type==7) {
              this.routeName = "制度建设";
              this.api = "getSystem"
          }else if(type==8) {
              this.routeName = "特色活动";
              this.api = "getSpecialActivity"
          }else{
              this.routeName = "通知早知道";
              this.api = "getInform"
          }
          this.$axios.get(this.api,{pn:this.$route.query.pn}).then(res => {
              for(var i=0;i<res.data.length;i++){
                  res.data[i].createTime = timeTrans(res.data[i].createTime)
              }
              this.newsList = res.data;
              this.$nextTick(() => {
                this.isLoading = false;
              })
          })
      },
      goDetail(id) {
          this.$router.push({path:'/news/detail',query:{id}})
      },
      loadMore() {
        if(!this.isLoading) {
            this.loading = true;
            this.pn++;
            this.$axios.get('getNewsEyes',{pn: this.pn}).then(res => {
                if(!res.data[0]){
                    this.over = true;
                    console.log(11111111)
                }else{
                    Indicator.open();
                    setTimeout(() => {
                        for(var j=0;j<res.data.length;j++) {
                            res.data[j].createTime = timeTrans(res.data[j].createTime);
                            Indicator.close();                                          
                            this.newsList.push(res.data[j])
                        }
                    },2500)
                    this.loading = false;
                }
            })
        }
      }

  },
  created() {
      this.getNews()
  }
}
</script>
<style scoped>
.news{
    padding: 43px 0 0 0;
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
li{
    padding: 10px;
    position: relative;  
    border-bottom: 1px solid #ccc;  
}
.item{
    float: left;
}
img{
    margin-right: 10px;
    float: left;
    width: 80px;
    height: 80px;

}
h3{
    font-size: 16px;
    color:#333;
    line-height: 24px;
    width: 250px;
}
.time{
    position: absolute;
    bottom: 15px;
    right: 10px;
    left: 100px;
    color: #888;
}
span{
    float: right;
}
i{
    margin-right: 10px;
    font-size: 12px;
}
.no-more{
    margin-top: 20px;
    text-align: center;
    font-size: 14px;
}
</style>
