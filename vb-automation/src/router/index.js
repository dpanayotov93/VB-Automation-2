import Vue from 'vue'
import VueImg from 'v-img'
import Router from 'vue-router'
import Home from '../components/Home'
import Products from '../components/Products'
import Product from '../components/Product'
import Profile from '../components/Profile'

// var $ = window.jQuery = require('jquery')

Vue.use(Router)
Vue.use(VueImg)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/products/',
      name: 'products',
      component: Products
    },
    {
      path: '/product/:id',
      name: 'product',
      component: Product
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})
