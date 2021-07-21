<template>
<div class="navbar-section">

  <b-navbar toggleable="lg" type="dark"  class="navbar">
    <b-navbar-brand href="#" class="ml-50">Comic <span>Store</span></b-navbar-brand>
<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="mx-auto prueba">
        <b-nav-item href="#">Acerca</b-nav-item>
        <b-nav-item href="#">Nosotros</b-nav-item>
        <b-nav-item href="#">Ubicación</b-nav-item>
      </b-navbar-nav>

        <b-navbar-nav class="mr">
          <b-nav-form class="iconos">
          <i v-b-modal.modal-1 class="fa fa-search" aria-hidden="true"></i>
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
        </b-nav-form>
                  <p id="car-total">{{carTotalLength}}</p>
        <b-nav-form>
          <template v-if="$store.state.isAuthenticated">
            <router-link to="/my-account" class="btn btn-success">Mi perfil</router-link>
          </template>
            <template v-else>
            <router-link to="/log-in" class="btn-login">Iniciar sesión</router-link>
          </template>
<div>
  <b-modal id="modal-1" title="Buscar Comics">
     <form method="get" action="/search" >
          <input type="text" placeholder="k kiere bucal?" name="query">
          </form>
  </b-modal>
</div>
        </b-nav-form>
         
              </b-navbar-nav>
          </b-collapse>


  </b-navbar>
    <router-view>
  </router-view>
  </div>

</template>
<script>
import axios from 'axios'
import Product from './components/Product.vue'
export default {
  components: { Product },
  data() {
    return {
      car:{
        items:[]
      }
    }
  },
  beforeCreate() {
    this.$store.commit('initializeStore')
    const token = this.$store.state.token
    if (token) {
        axios.defaults.headers.common['Authorization'] = "Token " + token
    } else {
        axios.defaults.headers.common['Authorization'] = ""
    }
  },
  mounted() {
    this.car = this.$store.state.car
  },
  computed:{
    carTotalLength(){
      let totalLength = 0
      for (let i = 0; i < this.car.items.length; i++) {
        totalLength += this.car.items[i].quantity        
      }
      return totalLength
    }
  }
}
</script>
<style >
body{
  background-color: #1D3541 !important ;
}
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;0,700;1,600&display=swap');
.navbar-brand {
  margin-right: 0!important;
  margin-left: 0.5rem !important;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
}
.nav-link{
  color: white !important;
}
.nav-link:hover{
  color: #00293D !important;
}
.prueba{
  transform: translateX(52px);
      font-family: 'Poppins', sans-serif;

}
.boton{
  padding: 0.5rem;
  width: 10rem;
  border: none;
  outline: none;
  background-color: #FFC107;
  color: #455A64;
  border-radius: 1.2rem;
  margin-right: 0.5rem;
  
}
.navbar{
  height: 7rem;
  background-color: #455A64
}
.iconos{
  color: white;
  display: flex;
  align-content: center;
  cursor: pointer;
}
.iconos i:last-child{
margin-left: 1rem;
}
li.form-inline.iconos{
  display: flex;
  align-items: center;
  transform: translateX(-60px);
}
#car-total{
	text-align: center;
	color:#455A64;
	background-color: #FFC107;
	width: 20px;
	height: 22px;
	border-radius: 50%;
	font-size: 14px;
  transform: translateX(-56px);
}
.btn-login{
  padding: 1rem;
  	color:#455A64;
    background: #FFC107;
    margin-right: 1rem;
    border-radius: 1.4rem;
    text-decoration: none;
}

</style>
