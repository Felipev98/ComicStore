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
      <div class="col-12">
    <Product v-for="product in latestProducts" :key="product.id" :product="product"/>
      
      </div>
      <div class="seccion-mas">
       <div class="comics-titulo text-center">
      <h2>Más comics</h2>
      </div>
   <div class="col-12">
    <Product v-for="product in ProductList" :key="product.id" :product="product"/>
      </div>

      </div>

 <div class="titulo-ubicacion text-center">
   <h2>Ubicación</h2>
 </div>
 <Mapa/>
</div>
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
    getLatestProducts(){
      axios
      .get('/api/v1/latest-products/')
      .then(response =>{
        this.latestProducts = response.data
        console.log(response)
      }).catch(error =>{
        console.log(error)
      })
    },
    getProductList(){
      axios
      .get('/api/v1/product-list/')
      .then(response =>{
        this.ProductList = response.data
        console.log(response)
      }).catch(error =>{
        console.log(error)
      })
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
  font-weight: 600;
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
</style>
