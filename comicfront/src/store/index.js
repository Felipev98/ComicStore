import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    car:{
      items: []
    },
    IsAuthenticated:false,
    token: '',
    isLoading: false
  },
  mutations: {
    initializeStore(state){
      if(localStorage.getItem('car')){
        state.car = JSON.parse(localStorage.getItem('car'))
      }else{
        localStorage.setItem('car',JSON.stringify(state.car))
      }
    },
    addToCar(state,item){
      const exists = state.car.items.filter(i => i.product.id === i.product.id)

      if (exists.length){
        exists[0].quantity = parseInt(exists[0].quantity) + parseInt(item.quantity)
      }else{
        state.car.items.push(item)
      }
      localStorage.setItem('car',JSON.stringify(state.car))

    },
    setIsLoading(state,status){
      state.isLoading = status
    }
  },
  actions: {
  },
  modules: {
  }
})
