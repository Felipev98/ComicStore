<template>
<div>
  <b-carousel-slide>
    <template v-slot:img>
      <b-card-group>
        <b-card>
          <img  id="imagen" :src="product.get_thumbnail" alt="">
          <h2 class="titulo">{{product.name}}</h2>
          <span class="texto">{{product.description}}</span>
          
          <span class="precios"> ${{product.price}}</span>
          <span>{{product.price}}</span>
           <div class="boton-vermas mb-3">
                    <router-link :to="product.get_absolute_url">Ver más</router-link>
                    </div>
       </b-card>
      </b-card-group>
    </template>
  </b-carousel-slide>
    </div>
    

</template>

<script>
export default {
    name:'Product',
    props:{
        product:Object
    }
}
</script>

<style >
 #imagen{
  width: 50%;
} 
.card-body{
  text-align: center ;
  height: 42rem;
  border: none;
  box-shadow: 0px 9px 32px -1px black;
}
.card{
    background-color:  #00293D !important;

}
.card-group{
  width: 35%;
  margin: auto;
}
.boton-vermas{
    width: 50%;
    padding: 1rem;
    margin: auto;
    background: #FFC107;
    border-radius: 1.2rem;
    color: #455A64;
}
.boton-vermas a{
    color: #455A64;
    text-decoration: none;
font-family: 'Poppins', sans-serif;
}
.titulo{
  font-family: 'Poppins', sans-serif;
font-size: 1.3rem;
font-weight: 600;
padding-top: 0.3rem;
color: white;
}
.texto{
font-family: 'Poppins', sans-serif;
font-weight: 400;
padding-top: 0.3rem;
color: white;
}
.precios {
    font-weight: 700;
    font-size: 1.1rem;
    position: absolute;
    left: 15rem;
    top:14rem;
    width: 4rem;
    background: #106E9B;
    border-radius: 100;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    color: white;
}
/* Media Queries */
@media screen and (max-width:539px) {
  .boton-vermas{
    margin-top: 1rem;
  }
  
}
</style>