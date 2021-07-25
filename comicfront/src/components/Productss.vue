<template>
<div>
    <div class="container">
<div class="row">
    <div class="col-md-4 col-xl-12 mt-5">
      <div class="card card-inverse  text-center">
        <img class="card-img-top imagen-1" :src="product.get_thumbnail" alt="Card image cap">
                            <span class="precio"> ${{product.price}}</span>

        <div class="card-block">
          <h4 class="card-title">{{product.name}}</h4>
        <p class="card-subtext">{{product.description}}</p>
                        <div class="boton-vermas mb-3">
                    <router-link :to="product.get_absolute_url">Ver más</router-link>
                    </div>
        </div>
      </div>

</div>
</div>
</div>
    </div>
    

</template>

<script>
export default {
    props:{
        product:Object
    }
}
</script>

<style >
.card.card-inverse img{
width: 8rem;
margin: auto;
padding-top: 1rem;
position: relative;
}
.card.card-inverse{
        box-shadow: 0px 9px 32px -1px black;
        background-color: #00293D;
}
.card-title {
font-family: 'Poppins', sans-serif;
font-size: 1.3rem;
font-weight: 600;
padding-top: 0.3rem;
color: white;
}
.card-subtext{
font-family: 'Poppins', sans-serif;
font-weight: 400;
}
.precio {
    font-weight: 700;
    font-size: 1.1rem;
    position: absolute;
    left: 13rem;
    top: 10rem;
    width: 4rem;
    background: #064A68;
    border-radius: 100;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    color: white;
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
.card-subtext {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    padding: 0.5rem;
    text-align: justify;
    color: white;
}
.col-12{
    display: flex;
}
</style>