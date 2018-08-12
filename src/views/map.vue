<template>
  <div class="map">
       <div id="container">

       </div>
  </div>
</template>
<script>
export default {
  data() {
      return {
          
      }
  },
  methods:{
      createMap() {
        var map = new BMap.Map("container");
        map.enableScrollWheelZoom(true);    
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 5);   
        map.addControl(new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_RIGHT}));    
        map.addControl(new BMap.ScaleControl());    
        map.addControl(new BMap.GeolocationControl());  
        
        var point = new BMap.Point(116.404,39.915);
        var marker = new BMap.Marker(point);        // 创建标注  
        var label = new BMap.Label("天安门",{offset:new BMap.Size(15,-10)});
        marker.setLabel(label);
        map.addOverlay(marker);                     // 将标注添加到地图中 
        
      }
  },
  created() {
      this.$nextTick(() => {
        this.createMap()          
      })
  }
}
</script>
<style scoped>
.map{
    position: fixed;
    top: 43px;
    left: 0;
    right: 0;
    bottom: 0;
}
#container{
    width: 100%;
    height: 100%;
}
</style>
