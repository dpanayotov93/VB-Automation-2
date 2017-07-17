import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Products from '../components/Products'
import Product from '../components/Product'
import Profile from '../components/Profile'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Products/',
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
