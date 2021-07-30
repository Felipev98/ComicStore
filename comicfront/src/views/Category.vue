<template>
  <div>
      <div class="container">
          <div class="titulo">
              <span> Categoria de: {{category.name}}</span>
          </div>
      <div class="col-4 mx-auto mb-5">
<Productss v-for="product in category.products" :key="product.id" :product="product"/>
  </div>
  </div>
  </div>
</template>
 
<script>
import axios from 'axios'
import Productss from '../components/Productss.vue'
export default {
    name: 'Category',
    components: {
        Productss
    },
    data() {
        return {
            category: {
                products: []
            }
        }
    },
    mounted() {
        this.getCategory()
    },
    watch: {
        $route(to, from) {
            if (to.name === 'Category') {
                this.getCategory()
            }
        }
    },
    methods: {
        async getCategory() {
            const categorySlug = this.$route.params.category_slug
            this.$store.commit('setIsLoading', true)
            axios
                .get(`/api/v1/products/${categorySlug}/`)
                .then(response => {
                    this.category = response.data
                    document.title = this.category.name + ' | ComicStore'
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
.titulo{
    text-align: center;
    margin-top: 2rem;
    color: white;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 2rem;
}
</style>