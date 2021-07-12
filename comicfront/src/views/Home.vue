<template>
<div>
 <p>Hola</p>
  <div v-for="product in latestProducts" :key="product.id">
    <h2>{{product.name}}</h2>
    <p>{{product.price}}</p>
    <p>{{product.description}}</p>
    <router-link :to="product.get_absolute_url">Ver más</router-link>
    <!-- <img :src="product.get_thumbnail" alt=""> -->
  </div>
</div>

</template>

<script>
import axios from 'axios'
export default {
   data() {
    return {
      latestProducts:[]
    }
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
