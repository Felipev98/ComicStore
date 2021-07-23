<template>

  <div>
      
        <tr>
            <td scope="row" class="image"><img class="card-img-top imagen-1" :src="item.product.get_thumbnail" alt="Card image cap"></td>
            <td>
             <router-link :to="item.product.get_absolute_url">{{item.product.name}}</router-link>
            </td>
            <td>{{item.product.price}}</td>
            <td>
    <p>{{item.quantity}}</p>
    <a  @click="decrementQuantity(item)">-</a>
    <a  @click="incrementQuantity(item)">+</a>
        </td>
        <td><span>${{getItemTotal(item).toFixed(2)}}</span>
    </td>
    <td><button class="btn btn-danger" @click="removeFromCar(item)">Eliminar item</button>
    </td>
        </tr>

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
.image{
    width: 100px;
}
</style>