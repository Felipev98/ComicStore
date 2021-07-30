<template>
<div class="category-section">
<div class="comics-categorias text-center">
    <h2>Categorías</h2>
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="categorias">
                    <router-link to="/terror" ><span >Terror</span></router-link>
                </div>
                 <div class="categorias">
                    <router-link to="/aventura" ><span>Aventura</span></router-link>
                </div>
                 <div class="categorias">
                    <router-link to="/Psicologico" ><span>Psicológico</span></router-link>
                </div>
                 <div class="categorias">
                    <router-link to="humoristico" ><span>Humorístico</span></router-link>
                </div>
            </div>
                <div class="col-xl-12">
                <div class="categorias">
                    <router-link to="/policial"><span>Policial</span></router-link>
                </div>
                 <div class="categorias">
                    <router-link to="/Romantico" ><span>Romántico</span></router-link>
                </div>
                 <div class="categorias">
                    <router-link to="/misterio" ><span>Misterio</span></router-link>
                </div>
                 <div class="categorias">
                    <router-link to="/Belico" ><span>Bélico</span></router-link>
                </div>
                
            </div>
        </div>
    </div>
</div>
</div>

</template>

<script>
export default {
name:'Category'
}
</script>

<style>

.category-section{
    height: 15rem;
}
.comics-categorias{
    margin-top: 4rem;
    color: white;
}
.comics-categorias h2{
        font-family: 'Poppins', sans-serif;
    font-weight: 600;
}
.col-xl-12{
    display: flex;
    justify-content: space-evenly;
    margin-top: 2rem !important;
}
.categorias{
    padding: 1rem;
    background-color: #5A6970;
    width: 15%;
    border-radius: 2rem;
    transition: all 0.4s ease-in-out;
}
.categorias:hover{
    background-color: #A6C2CF;
}
.categorias a{
    text-decoration: none;
    color: white;
    
}
.categorias a:hover{
    color: #525658 !important;
}
</style>