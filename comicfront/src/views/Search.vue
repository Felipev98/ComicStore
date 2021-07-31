<template>
  <div>
      <div v-if="products.length !== 0">
      <div class="container"  >
          <div class="titulo">
                <h2>Resultado de busqueda para: "{{query}}"</h2>
            </div>
          <div class="col-4 mx-auto mb-5">
<Productss v-for="product in products" :key="product.id" :product="product"/>
          </div>
          </div>
          </div>
          <div v-else>
              <div class="container">
                  <div class="error-busqueda">
                    <h2>Lo sentimos, en este momentos no tenemos <span>{{query}}</span></h2>
                  </div>
              </div>
          </div>
          <Footer/>
      </div>

</template>

<script>
import axios from 'axios'
import Productss from '../components/Productss.vue'
import Footer from '../components/Footer.vue'
export default {
    name: 'Search',
    components: {
        Productss,Footer
    },
    data() {
        return {
            products: [],
            query: '',
        }
    },
    mounted() {
        document.title = 'Buscar | ComicStore '
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
                    this.errores = true

                })
            this.$store.commit('setIsLoading', false)

        }
    },
}
</script>
<style>
.error-busqueda{
    text-align: center;
    color: white;
    margin-top: 5rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
}
.error-busqueda span{
    color: #FFC107;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
}
</style>