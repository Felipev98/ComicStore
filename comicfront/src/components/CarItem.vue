<template>
  <div>
<router-link :to="item.product.get_absolute_url">{{item.product.name}}</router-link>
<p>{{item.product.price}}</p>
<p>{{item.quantity}}</p>
<a  @click="decrementQuantity(item)">-</a>
<a  @click="incrementQuantity(item)">+</a>
<span>${{getItemTotal(item).toFixed(2)}}</span>
<button class="btn btn-danger" @click="removeFromCar(item)">Eliminar item</button>
  </div>
</template>

<script>
export default {
    name:'CarItem',
    props:{
        initialItem:Object 
    },
    data() {
        return {
            item: this.initialItem
        }
    },
    methods: {
        getItemTotal(item){
            return item.quantity * item.product.price
        },
        decrementQuantity(item){
        item.quantity -=1
        if(item.quantity === 0){
            this.$emit('removeFromCar',item)
        }
        this.updateCar()
        },
        incrementQuantity(item){
            item.quantity +=1
            this.updateCar()
        },
        updateCar(){
            localStorage.setItem('car',JSON.stringify(this.$store.state.car))
        },
        removeFromCar(item){
            this.$emit('removeFromCar',item)
            this.updateCar()
        }        
    },
}
</script>

<style>
</style>