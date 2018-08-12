<template>
  <div class="upload">
      <label>
          <input type="file" name="file" @change="upload" style="display:none;">
          <img src="../imgs/upload.png" alt="">
      </label>
  </div>
</template>
<script>
import { Indicator } from 'mint-ui';
import axios from "axios";
export default {
    data() {
        return {
            token:""
        }
    },
    methods:{
        getToken() {
            this.$axios.qiniuGet().then(res => {
                this.token = res.data;
            })
        },
        upload($event) {
            Indicator.open();
            var file = $event.target.files[0];
            var form = new FormData();
            form.append("file",file);
            form.append("token",this.token);
            axios.post('https://upload-z1.qiniup.com',form,{headers:{"Content-Type":"multipart/form-data"},
            onUploadProgress: function (progressEvent) {
                // console.log(progressEvent)
                if(progressEvent.target.onloadend == progressEvent.target.total){
                    Indicator.close();
                }

            },}).then(res => {
                var url = "http://image.yaojunrong.com/" + res.data.key;
                this.$emit('getImg',url)
            })
            // console.log($event) 
        }
    },
    created() {
        this.getToken()
    }
}
</script>
<style scoped>
img{
    width: 105px;
    height: 105px;
}
</style>
