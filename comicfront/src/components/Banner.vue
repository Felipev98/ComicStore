<template>
  <splide :options="options">
    <splide-slide id="card-slider">
      <img src="../assets/Marvel1.jpg">
      <div class="texto">
 <h4>Descubre los nuevos comics de Marvel</h4>
      </div>
     
    </splide-slide>
    <splide-slide>
      <img src="../assets/Dc2.jpg">
      <div class="texto">
 <h4>Los mejores comics de Dc</h4>
      </div>
    </splide-slide>
    <splide-slide>
      <img src="../assets/Dm.jpg">
      <div class="texto">
 <h4>Lo mejor de ambos en un solo lugar</h4>
      </div>
    </splide-slide>
  </splide>

</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
export default {
	      data() {
      return {
        options: {
          rewind : true,
          width  : 1400,
          gap    : '1rem',
          autoplay: true,
          perpage:1,

        },
      };
    },        components:{
                Splide,
    SplideSlide,
        }
  }
</script>

<style>
.texto h4{
    position: absolute;
    top: 23rem;
    width: 100%;
    padding: 1rem;
    text-align: center;
    color: white;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    background: rgba(0, 0, 0, 0.5);

}

</style>
  

