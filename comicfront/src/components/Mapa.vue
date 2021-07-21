<template>
<div class="container">
<div class="row">
  <div class="col-xl-6">
    <div class="texto">
      <h2>También contamos con una tienda fisica ubicada en bla bla bla</h2>
    </div>
  </div>
  <div class="col-xl-6">
<div style="height: 80vh;width: 39rem;margin: auto;margin-bottom: 4rem;">
    <LMap :zoom="zoom" :center="center">
      <LTileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
></LTileLayer>
      <LMarker :lat-lng="[13.1333682,77.5651881]"></LMarker>
    </LMap>
  </div>
  </div>
</div>
</div>
  
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import "leaflet/dist/leaflet.css"
export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data() {
    return {
      zoom: 16,
       center: {
        lat: 37.15117,
        lng: -88.732,
      },
      bounds: null
    };
  }
};
</script>
<style scoped>
.col-xl-6{
display: flex;
align-items: center;
}
.texto{
  color: white;
}
.texto h2{
    font-size: 1.3rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}
</style>