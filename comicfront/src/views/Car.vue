  <template>

  <div>
      <div class="container">
          <div class="row">
      <table class="table table table-hover" v-if="carTotalLength">
<thead>
    <tr>
      <th scope="col">Producto</th>
      <th scope="col">Nombre</th>
      <th scope="col">Precio</th>
      <th scope="col">Cantidad</th>
        <th scope="col"></th>

    </tr>
  </thead>
  <tbody>
<CarItem v-for="item in car.items" :key="item.product.id" :initialItem="item" v-on:removeFromCar="removeFromCar" />
  </tbody>
</table>
    <p v-else>No hay productos</p>
    <div>
        <strong>{{carTotalPrice.toFixed(2)}}, {{carTotalLength}} productos</strong>
        <hr>
        <router-link to="/car/checkout" class="btn btn-danger" >checkout</router-link>
    </div>
       
</div>

</div>
</div>
</template>

<script>
import CarItem from '../components/CarItem.vue'
export default {
    name:"Car",
    components:{
        CarItem
    },
    data() {
        return {
            car:{
                items:[]
            }
        }
    },
    mounted() {
        this.car = this.$store.state.car
        
    },
    methods: {
      removeFromCar(item){
        this.car.items = this.car.items.filter(i => i.product.id !== item.product.id)
          }  
    },
    computed:{
        carTotalLength() {
            return this.car.items.reduce((acc, curVal) => {
                return acc += curVal.quantity
            }, 0)
        },
        carTotalPrice(){
        return this.car.items.reduce((acc, curVal) => {
        return acc += curVal.product.price * curVal.quantity
        }, 0)
}
    }
}
</script>

<style>
</style>