<template>
  <div>
<Product v-for="product in products" :key="product.id" :product="product"/>
      <h2>Resultado de busqueda para: "{{query}}"</h2>
  </div>
</template>

<script>
import Product from '../components/Product.vue'
import axios from 'axios'
export default {
name:'Search',
components:{
    Product
},
data() {
    return {
        products:[],
        query: ''
    }
},
mounted() {
    document.title = 'Buscar | ComicStore' 
    let url = window.location.search.substring(1)
    let params = new URLSearchParams(url)
    
    if (params.get('query')){
        this.query = params.get('query')
        this.performSearch()
    }
},
methods: {
    async performSearch(){
        await axios
            .post('/api/v1/products/search/',{'query':this.query})
            .then(response =>{
                this.products = response.data
                console.log(response)
            })
            .catch(error =>{
                console.log(error)
            })
    }
},
}
</script>

<style>

</style>