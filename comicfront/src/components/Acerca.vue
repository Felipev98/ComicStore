<template>
  <div>
       <div class="titulo-nosotros">
                  <h2>Acerca</h2>
              </div>
      <div class="container">
          <div class="row">
             
              <div class="col-xl-6 col-lg-6 col-md-6">
                  <div class="texto-acerca">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo aspernatur tenetur expedita adipisci nobis optio quae est nulla similique. Voluptatibus distinctio at deleniti saepe reprehenderit nemo aliquid architecto quos atque.</p>
                  </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6">
                  <div class="imagen-acerca">
                      <img src="../assets/Acerca.jpeg" alt="acerca">
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'Acerca'
}
</script>

<style>
.texto-acerca{
    margin-top: 13rem;
    color: white;
}
.texto-acerca p{
    font-size: 1.2rem;
    font-family: 'Poppins', sans-serif;
}
.imagen-acerca img{
width:40rem;
margin-top: 4rem;
box-shadow: 0px 9px 32px -1px black;
}
@media screen and (max-width:539px) {
    .imagen-acerca{
        text-align: center;
        margin-bottom:2rem;
    }    
    .imagen-acerca img{
        width: 20rem;
    }
    .texto-acerca{
        margin-top: 2rem;
        text-align: justify;
    }
    .texto-acerca p{
        font-size: 1rem;
    }
}
</style>