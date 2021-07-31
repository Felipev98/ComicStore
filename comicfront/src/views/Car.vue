  <template>

  <div>
      <div class="container" v-if="carTotalLength">
          <div class="row headerr mt-5">
<thead >
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
        <span class="d-flex  align-items-center">${{carTotalPrice.toFixed(2)}}, {{carTotalLength}} productos</span>
        <hr>
        <button class="comprar" @click="compra">Comprar</button>
        
    </div>
       
</div>

</div>
<div v-else>
    <div class="container">
        <div class="error-busqueda">
    <h2>Aún no has agregado un producto a tu carrito</h2>

        </div>
    </div>
</div>
    <Footer/>

</div>
</template>

<script>
import CarItem from '../components/CarItem.vue'
import Footer from '../components/Footer.vue'
export default {
    name:"Car",
    components:{
        CarItem,Footer
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
          },
        compra(){
            this.$swal({
                toast:true,
                position:'top-end',
                showConfirmButton: false,
                icon: 'success',
                timer:3000,
                text:"Compra realizada con éxito!"
            })
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
    transition: all 0.3s ease-in-out;
}
.headerr:hover{
box-shadow: 0px 13px 42px -1px #464646;
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
.comprar {
    width: 12%;
    padding: 0.8rem;
    background: #FFC107;
    text-align: center;
    margin-bottom: 1rem;
    border-radius: 1rem;
    color:#455A64;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    border: none;
}
.comprar:hover{
    background-color: #FFDE7A;
}
</style>
