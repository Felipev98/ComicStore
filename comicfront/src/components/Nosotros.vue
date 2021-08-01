<template>
  <div>
    <div class="titulo-nosotros">
<h2>Nosotros</h2>
    </div>
    <div class="container">
<div class="row">
    <div class="col-md-4 col-xl-4 mt-5">
      <div class="card card-inverse  text-center ">
        <img class="card-img-top" src="../assets/persona1.jpg" alt="Card image cap">
        <div class="card-block">
          <h4 class="card-title">Luisa Vargas</h4>
            <span class="card-subtitle">Encargada de ventas</span>
        <p class="card-subtext">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, officia rerum. Placeat alias ullam, fuga praesentium ipsa velit doloremque at rerum accusantium aperiam. Fuga placeat possimus voluptas, expedita consectetur esse!</p>
        </div>
      </div>

</div>
 <div class="col-md-4 col-xl-4 mt-5">
      <div class="card card-inverse  text-center">
        <img class="card-img-top" src="../assets/persona2.jpg" alt="Card image cap">
        <div class="card-block">
          <h4 class="card-title">Pedro Vargas</h4>
          <span class="card-subtitle">Desarrollador Front-End</span>
        <p class="card-subtext">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, officia rerum. Placeat alias ullam, fuga praesentium ipsa velit doloremque at rerum accusantium aperiam. Fuga placeat possimus voluptas, expedita consectetur esse!</p>
        </div>
      </div>
            </div>
<div class="col-md-4 col-xl-4 mt-5">
      <div class="card card-inverse  text-center">
        <img class="card-img-top" src="../assets/persona4.jpg" alt="Card image cap">
        <div class="card-block">
          <h4 class="card-title">Raul Vargas</h4>
            <span class="card-subtitle">Manager</span>
        <p class="card-subtext">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, officia rerum. Placeat alias ullam, fuga praesentium ipsa velit doloremque at rerum accusantium aperiam. Fuga placeat possimus voluptas, expedita consectetur esse!</p>
        </div>
      </div>
            </div>

</div>
</div>
  </div>
</template>

<script>
export default {
name:'Nosotros'
}
</script>

<style>
.imagen-presentacion{
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 0.5rem;
}

.titulo-nosotros{
  margin-top: 2rem;
}
.titulo-nosotros h2{ 
  color: white;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
}
.card-subtitle{
  color: #CCCCCC;
  font-family: 'Poppins', sans-serif;
  font-style: italic;
  font-size: 0.8rem;
}

</style>