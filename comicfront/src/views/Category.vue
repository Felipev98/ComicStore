<template>
  <div>
     <h2>Categoria</h2>
<Product v-for="product in category.products" :key="product.id" :product="product"/>
{{category.name}}
  </div>
</template>
 
<script>
import axios from 'axios'
import Product from '../components/Product.vue'
export default {
    name: 'Category',
    data() {
        return {
            category:{
                products:[]
            },
           
        }
    },
     components:{
            Product
            },
    mounted() {
        this.getCategory()
    },
     watch:{
         $route(to,from){
             if(to.name === 'Category'){
                 this.getCategory()
             }
         }
     },
    methods: {
        async getCategory(){
            const categorySlug = this.$route.params.category_slug
            axios
                .get(`/api/v1/products/${categorySlug}/`)
                .then(response =>{
                    this.category = response.data
                    document.title = this.category.name + ' | ComicStore'
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