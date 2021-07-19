<template>
  <div>
<Product v-for="product in products" :key="product.id" :product="product"/>
      <h2>Resultado de busqueda para: "{{query}}"</h2>
  </div>
</template>

<script>
import axios from 'axios'
import Product from '../components/Product.vue'
export default {
    name: 'Search',
    components: {
        Product
    },
    data() {
        return {
            products: [],
            query: ''
        }
    },
    mounted() {
        document.title = 'Search | Djackets'
        let uri = window.location.search.substring(1)
        let params = new URLSearchParams(uri)
        if (params.get('query')) {
            this.query = params.get('query')
            this.performSearch()
        }
    },
    methods: {
        async performSearch() {
            this.$store.commit('setIsLoading', true)
            await axios
                .post('/api/v1/products/search/', {'query': this.query})
                .then(response => {
                    this.products = response.data
                })
                .catch(error => {
                    console.log(error)
                })
            this.$store.commit('setIsLoading', false)
        }
    }
}
</script>
<style>

</style>