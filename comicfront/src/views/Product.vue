<template>
  <div>
      <div class="container">
          <div class="row">
              <div class="col-md-6 col-lg-6 col-xl-6">

                  <div class="imagen-fondo" :style="imageStyleObject">
                      <div class="imagen-comic">
                      <img :src="product.get_thumbnail" alt="comic">
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-6 col-xl-6">
                  <div class="comic-nombre">
                        <span>{{product.name}}</span>
                        <p>{{product.description}}</p>
                          <div>
          <input class="input-quantity" type="number" min="1" v-model="quantity">
      </div>
      <div>
          <div class="boton-añadir">
            <a @click="addToCar">Añadir al carrito</a>
          </div>
      </div>
                  </div>
              </div>
          </div>
      <h2>
      </h2>    
      
      </div>

      <div class="text-center">
  <b-spinner variant="success" label="Spinning"  v-if="$store.state.isLoading"></b-spinner>
</div>
<Footer/>
 </div>
</template>
<script>
import axios from 'axios'
import Footer from '../components/Footer.vue'
export default {
    name: 'Product',
        components:{
        Footer
    },
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
        async getProduct(){
            this.$store.commit('setIsLoading',true)
            const category_slug = this.$route.params.category_slug
            const product_slug = this.$route.params.product_slug

        await axios
            .get(`/api/v1/products/${category_slug}/${product_slug}`)
            .then(response =>{
                this.product = response.data
            document.title = this.product.name +  ' | ComicStore'
            }).catch(error =>{
                console.log(error)
            })
        this.$store.commit('setIsLoading',false)
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
    computed: { 
  imageStyleObject() {
    return {
        backgroundImage: `url(${this.product.get_thumbnail})`,
    }
  }
}
}
</script>

<style>
.imagen-comic img{
    width: 20rem;
    margin-top: 2rem;
    box-shadow: 0px 9px 32px -1px #236482;
}
.imagen-comic{
    padding-bottom: 1rem;
    text-align: center;
}
.comic-nombre{
    margin-top: 2rem;
}
.comic-nombre span{
    text-align: center;
    font-size: 2rem;
    color: white;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
}
.comic-nombre p{
    text-align: justify;
    color: white;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}
.boton-añadir{
padding: 0.8rem;
    background-color: #FFC107;
    width: 33%;
    margin-top: 0.5rem;
    color: #455A64;
    font-family: 'Poppins', sans-serif;
    font-size: 0.7rem;
    text-align: center;
    border-radius: 0.7rem;
}
.boton-añadir a{
    cursor: pointer;
}
.input-quantity{
    border: none;
    outline: none;
    padding: 0.2rem;
}
.imagen-fondo{
        background-size: cover;
        background-position: center;
        margin-bottom: 1rem;
        padding-bottom: 1rem;
        margin-top: 1rem;
}
@media screen and (max-width: 539px){
    .imagen-comic img{
        width: 15rem;
    }
    .comic-nombre{
        text-align: center;
    }
    .boton-añadir{
        margin: auto;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
    }
}
</style>