import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store ({
  state: {
    car: {
        items: [],
    },
    isAuthenticated: false,
    token: '',
    isLoading: false,
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('car')) {
        state.car = JSON.parse(localStorage.getItem('car'))
      } else {
        localStorage.setItem('car', JSON.stringify(state.car))
      }

      if (localStorage.getItem('token')) {
          state.token = localStorage.getItem('token')
          state.isAuthenticated = true
      } else {
          state.token = ''
          state.isAuthenticated = false
      } 
    },
    addToCar(state, item) {
      const exists = state.car.items.filter(i => i.product.id === item.product.id)
      if (exists.length) {
        exists[0].quantity = parseInt(exists[0].quantity) + parseInt(item.quantity)
      } else {
        state.car.items.push(item)
      }

      localStorage.setItem('car', JSON.stringify(state.car))
    },
    setIsLoading(state, status) {
      state.isLoading = status
    },
    
    setToken(state, token) {
        state.token = token
        state.isAuthenticated = true
    },  
    removeToken(state) {
        state.token = ''
        state.isAuthenticated = false
    },
  },
  actions: {
  },
  modules: {
  }
})