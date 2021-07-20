<template>
<div>
  <div class="section">
  <div class="container">
    <div class="row">
      <div class="comics-titulo text-center mt-3">
      <h2>Últimos comics</h2>

      </div>
      <div class="col-12">
    <Product v-for="product in latestProducts" :key="product.id" :product="product"/>
      </div>
</div>
  </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import Product from '../components/Product.vue'
export default {
   data() {
    return {
      latestProducts:[]
    }
   },
   components:{
     Product,
   },
   mounted() {
    this.getLatestProducts()
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
    }
  },
}
</script>
<style>
.section{
  width: 100%;
}
.comics-titulo{
  color: white;
  font-family: 'Poppins', sans-serif;
}
.comics-titulo h2{
  font-weight: 600;
  font-size: 2rem;
}
</style>
