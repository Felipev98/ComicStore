<template>
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
          <i class="fa fa-search" aria-hidden="true"></i>
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
        </b-nav-form>
                  <p id="car-total">{{carTotalLength}}</p>

        <b-nav-form>
          <button class="boton">Iniciar sesión</button>
        </b-nav-form>

              </b-navbar-nav>
          </b-collapse>
  <router-view></router-view>

  </b-navbar>
</template>
<script>
export default {
  data() {
    return {
      car:{
        items:[]
      }
    }
  },
  beforeCreate() {
    this.$store.commit('initializeStore')
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
.navbar-brand {
  margin-right: 0!important;
  margin-left: 0.5rem !important;
}
.nav-link{
  color: white !important;
}
.prueba{
  transform: translateX(22px);
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
</style>
