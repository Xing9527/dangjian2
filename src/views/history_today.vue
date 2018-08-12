<template>
  <div class="today" v-html="data">

  </div>
</template>
<script>
export default {
  data() {
      return {
          data:""
      }
  },
  methods:{
      getData() {
          this.$axios.get('historyToday').then(res => {
              this.data = res.data
          })
      }
  },
  created() {
      this.getData()
  }
}
</script>
<style>
h2{
    font-size: 18px;
}
</style>
<style scoped>
.today{
    padding: 53px 10px 10px;
    line-height: 20px;
    color: #000;
}

</style>
