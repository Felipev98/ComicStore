<template>
<div>
    <h2>{{product.name}}</h2>
    <p>{{product.description}}</p>
    <router-link :to="product.get_absolute_url">Ver más</router-link>
    <h2>{{product.price}}</h2>
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

<style>

</style>