<template>
<div class="navbar-section">

  <b-navbar toggleable="lg" type="dark"  class="navbar">
    <router-link to="/" ><b-navbar-brand class="ml-50">Comic <span>Store</span></b-navbar-brand></router-link>
<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="mx-auto prueba">
       <b-nav-item :to="{name: 'Acerca'}" >Acerca</b-nav-item>
        <b-nav-item :to="{name: 'Nosotros'}" href="#">Nosotros</b-nav-item>
        <b-nav-item id="ubicacion" >Ubicación</b-nav-item>
      </b-navbar-nav>
        <b-navbar-nav class="mr">
          <b-nav-form class="iconos">
          <i v-b-modal.modal-1 class="fa fa-search" aria-hidden="true"></i>
          
          <router-link to="/car" ><i class="fa fa-shopping-cart" aria-hidden="true"></i></router-link>
        </b-nav-form>
        <div class="cantidad">
                  <p id="car-total">{{carTotalLength}}</p>

        </div>
        <b-nav-form>
          <template v-if="$store.state.isAuthenticated">
    <button @click="logout()" class="boton-desconectar">Desconectar</button>
          </template>
            <template v-else>
              <b-nav-item>
              <router-link to="/log-in" class="btn-login">Iniciar sesión</router-link>

              </b-nav-item>
          </template>
<div>
  <b-modal id="modal-1" title="Buscar Comics">
     <form method="get" action="/search" >
          <input type="text" placeholder="Escriba el nombre del comic" name="query" class="input-buscar">
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
  },
  methods: {
        logout() {
            axios.defaults.headers.common["Authorization"] = ""
            localStorage.removeItem("token")
            localStorage.removeItem("username")
            localStorage.removeItem("userid")
            this.$store.commit('removeToken')
            this.$router.push('/')
        },
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
.navbar{
padding-top: 2rem !important;
padding-bottom: 2rem !important;
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
 i{
  color: white ;
}
a.router-link-active{
  text-decoration: none ;
}
.boton-desconectar{
  margin-right: 1rem;
  padding: 1rem;
    background: #FB224E;
    color: white;
    outline: none;
    border: none;
    border-radius: 1rem;
    transition: all 0.3s ease-in-out;
}
.boton-desconectar:hover{
  background-color: #FF6D8A;
}
.btn.btn-secondary{
display: none;
}
.btn.btn-primary{
display: none;
}
.close{
border: none;
color: white;
background-color: #086E9E;
}
.input-buscar{
  outline: none;
  border: none;
  width:50%
}
@media screen and (max-width:539px){
li.form-inline.iconos{
transform: translateX(0);
}
.navbar-nav{
margin-left: 3.1rem;
}
i.fa.fa-search{
  display: block;
  margin-bottom: 1rem;
}
i.fa.fa-shopping-cart{
  margin-left: 0;
}
#car-total{
  position: relative;
  top: -2rem;
  transform: translateX(20px);
}
.prueba{
  width: 50%;
}
.navbar-nav.mx-auto.prueba{
  margin-left: 0 !important;
}

}

</style>
