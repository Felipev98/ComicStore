  <template>

  <div>
      <div class="container">
          <div class="row headerr mt-5">
<thead>
    <tr class="header">
      <th scope="col">Producto</th>
      <th scope="col">Nombre</th>
      <th scope="col">Precio</th>
      <th scope="col">Cantidad</th>
        <th scope="col" class="total" style="
    transform: translateX(21px)">Total</th>
        <th scope="col">Acción</th>

    </tr>
  </thead>
  <tbody>
<CarItem v-for="item in car.items" :key="item.product.id" :initialItem="item" v-on:removeFromCar="removeFromCar" />
  </tbody>

    <div class="tabla-footer">
        <span>{{carTotalPrice.toFixed(2)}}, {{carTotalLength}} productos</span>
        <hr>
        <router-link to="#" class="btn btn-danger" >Comprar</router-link>
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
.header{
    width:100%;
    display: flex;
    justify-content: space-between;
    padding-top: 1rem;

}
.header th{
    color: white;
            font-family: 'Poppins', sans-serif;

}

.headerr{
    background: #11242D;
    margin-top: 2rem;
    margin-bottom: 2rem;
        box-shadow: 0px 9px 32px -1px black;
}
.tabla-footer{
    display: flex;
    justify-content: flex-end;
    color: white;
                font-family: 'Poppins', sans-serif;
}
.tabla-footer span{
font-weight: 700;
margin-right: 1rem;
}
</style>
