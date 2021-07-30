<template>

  <div>
      <table class="table">
        <tr>
            <td scope="row" class="image"><img class="card-img-top imagen-1" :src="item.product.get_thumbnail" alt="Card image cap"></td>
            <td class="nombre-producto text-center">
             <router-link  :to="item.product.get_absolute_url">{{item.product.name}}</router-link>
            </td>
            <td>{{item.product.price}}</td>
            <td class="text-center">
                    <span class="signos" style="cursor:pointer" @click="decrementQuantity(item)">-</span>

    <span class="total">{{item.quantity}}</span>
        <span class="signos" style="cursor:pointer" @click="incrementQuantity(item)">+</span>
        </td>
        <td class="text-center total"><span>${{getItemTotal(item).toFixed(2)}}</span>
    </td>
    <td class="text-center"><i @click="removeFromCar(item)" class="fas fa-trash-alt "></i></td>
        </tr>
</table>
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
.nombre-producto{
    width: 32% ;
}
.nombre-producto a{
    text-decoration: none;
    color: white;
     font-family: 'Poppins', sans-serif;

}
.table td{
    color: white;
}
.total{
font-family: 'Poppins', sans-serif;

}
span .signos{
    cursor: pointer !important;
}
</style>