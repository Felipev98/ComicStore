<template>
<div class="category-section">
<div class="comics-categorias text-center">
    <h2>Categorías</h2>
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="categorias">
                    <span>Terror</span>
                </div>
                 <div class="categorias">
                    <span>Aventura</span>
                </div>
                 <div class="categorias">
                    <span>Psicológico</span>
                </div>
                 <div class="categorias">
                    <span>Humorístico</span>
                </div>
            </div>
                <div class="col-xl-12">
                <div class="categorias">
                    <span>Policial</span>
                </div>
                 <div class="categorias">
                    <span>Romántico</span>
                </div>
                 <div class="categorias">
                    <span>Misterio</span>
                </div>
                 <div class="categorias">
                    <span>Bélico</span>
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
}
</style>