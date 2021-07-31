<template>
<div>
  <div class="section">
        <Banner/>

  <div class="container">
      <Category/>

    <div class="row">
      <div class="comics-titulo text-center mt-3">
      <h2>Últimos comics</h2>

      </div>
    <div class="text-center">
  <b-spinner variant="success" label="Spinning"  v-if="$store.state.isLoading"></b-spinner>
</div>
  <b-carousel d="carousel-1"
      :interval="4000"
      controls
      indicators>
    <Product v-for="product in latestProducts" :key="product.id" :product="product"/>
     </b-carousel>
      </div>
      <div class="seccion-mas">
       <div class="comics-titulo text-center">
      <h2>Más comics</h2>
      </div>
      <div class="text-center">
  <b-spinner variant="success" label="Spinning"  v-if="$store.state.isLoading"></b-spinner>
</div>
       <b-carousel d="carousel-1"
      :interval="4000"
      controls
      indicators>
    <Product v-for="product in ProductList" :key="product.id" :product="product"/>
               </b-carousel>

      </div>

 <div class="titulo-ubicacion text-center">
   <h2>Ubicación</h2>
 </div>
 <Mapa/>
</div>
  </div>
   <Footer/>
</div>
 
</template>

<script>
import axios from 'axios'
import Category from '../components/Category.vue'
import Product from '../components/Product.vue'
import Mapa from '../components/Mapa.vue'
import Footer from '../components/Footer.vue'
import Banner from '../components/Banner.vue'


export default {
   data() {
    return {
      latestProducts:[],
      ProductList:[]
    }
   },
   components:{
     Product,Category,
      Mapa,Banner,Footer
   },
   mounted() {
    this.getLatestProducts()
    this.getProductList()
  },
  methods: {
    async getLatestProducts(){
      this.$store.commit('setIsLoading',true)
      await axios
      .get('/api/v1/latest-products/')
      .then(response =>{
        this.latestProducts = response.data

      }).catch(error =>{
        console.log(error)
      })
      this.$store.commit('setIsLoading',false)
    },
    
    async getProductList(){
    this.$store.commit('setIsLoading',true)
      await axios
      .get('/api/v1/product-list/')
      .then(response =>{
        this.ProductList = response.data
      }).catch(error =>{
        console.log(error)
      })
            this.$store.commit('setIsLoading',false)

    }
  },
}
</script>
<style>
.section{
  width: 100%;
}
.seccion-mas{
  margin-top: 4rem;
}
.comics-titulo{
  color: white;
  font-family: 'Poppins', sans-serif;
}
.comics-titulo h2{
  font-weight: 700;
  font-size: 2rem;
  color:white;
    font-family: 'Poppins', sans-serif;

}
.titulo-ubicacion.text-center{
  margin-top: 10rem;
  margin-bottom: 4rem;
  font-family: 'Poppins', sans-serif;
  color: white;
}
.titulo-ubicacion.text-center h2{
font-weight: 600;
}
/* Media Queries */
@media screen and (max-width:539px){
  .card-group{
    width: 100%;
  }
  .comics-titulo{
    margin-bottom: 2rem;
  }
  .comics-titulo h2{
    font-size:1.5rem;
  }
  .card-body h2{
    font-size: 1.3rem;
  }
    .card-body span{
    font-size: 0.9rem;
  }
  .card-body {
    height: 38rem;
  }
.titulo-ubicacion.text-center{
  margin-bottom: 1rem;
  margin-top: 3rem;
}
}
</style>
