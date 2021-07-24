<template>
<div class="footer">
    <div class="container">
        <div class="texto-footer text-center">
            <span>Todos los derechos reservados</span>
            <p>Realizado por Vargas Felipe</p>
        </div>
        <Carousel/>
    </div>
</div>
</template>

<script>
import Carousel from '../components/Carousel.vue'
export default {
    name:'Footer',
    components:{
        Carousel
    }
}
</script>

<style>
.footer{
    height: 8rem;
    background-color: #010A0F;
    padding-top: 3.4rem;
        color: white;
        font-size: 0.7rem;
        font-family: 'Poppins', sans-serif;

}

</style>