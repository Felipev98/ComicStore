<template>
<div id="ubicacion">
<div class="container">
<div class="row">
  <div class="col-xl-6">
    <div class="texto">
      <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, quam ea quibusdam commodi officia ex distinctio, beatae possimus quos maxime corporis aut! Voluptates, ducimus fuga quisquam molestias assumenda quis repellat!</h2>
    </div>
  </div>
  <div class="col-xl-6">
<div class="mapa">
    <LMap :zoom="zoom" :center="center">
      <LTileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
></LTileLayer>
      <LMarker :lat-lng="[37.15117,-88.732]"></LMarker>
    </LMap>
  </div>
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
.mapa{
  height: 70vh;
  width: 39rem;
  margin: auto;
  margin-bottom: 4rem;
}
/* Media Querie */
@media screen and (max-width:539px){
  .mapa{
    height: 60vh;
  }
.texto{
margin-top: 1rem;
margin-bottom: 1rem;
  }
.texto h2{
font-size: 0.9rem;
  }
}


</style>