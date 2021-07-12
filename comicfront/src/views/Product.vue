<template>
  <div>
      <h2>
          {{product.name}}
      </h2>
      <div>
          <input type="number" min="1" v-model="quantity">
      </div>
      <div>
          <a href="#" @click="addToCar">Añadir al carrito</a>
      </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'Product',
    data() {
        return {
            product:{},
            quantity:1
        }
    },
    mounted() {
        this.getProduct()
    },
    methods: {
        getProduct(){
            const category_slug = this.$route.params.category_slug
            const product_slug = this.$route.params.product_slug

        axios
            .get(`/api/v1/products/${category_slug}/${product_slug}`)
            .then(response =>{
                this.product = response.data
                console.log(response)

            }).catch(error =>{
                console.log(error)
            })                
        },
        addToCar(){
            if(isNaN(this.quantity) || this.quantity <1 ){
                this.quantity =1
            }
            const item ={
                product : this.product,
                quantity : this.quantity
            }
            this.$store.commit('addToCar',item)
        }
    },
}
</script>

<style>

</style>