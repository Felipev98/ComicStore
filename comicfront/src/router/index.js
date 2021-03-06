import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Category from '../views/Category.vue'
import Search from '../views/Search.vue'
import Car from '../views/Car.vue'
import SignUp from '../views/SignUp.vue'
import LogIn from '../views/LogIn.vue'
import Acerca from '../views/Acerca.vue'
import Nosotros from '../views/Nosotros.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home

  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/log-in',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/car',
    name: 'Car',
    component: Car,
    meta: {
      requireLogin: true
  }

  },
  {
    path: '/acerca',
    name: 'Acerca',
    component: Acerca,

  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: Nosotros
  },

  {
    path: '/:category_slug/:product_slug',
    name: 'Product',
    component: Product,
    meta: {
      requireLogin: true
  }
  },
  {
    path: '/:category_slug',
    name: 'Category',
    component: Category
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
    next({ name: 'LogIn', query: { to: to.path } });
  } else {
    next()
  }
})


export default router
