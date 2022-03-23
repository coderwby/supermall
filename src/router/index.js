import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import('../views/home/home')
const category = () => import('../views/category/category')
const shopCart = () => import('../views/shopCart/shopCart')
const profile = () => import('../views/profile/profile')
const detail = () => import('../views/detail/Detail')
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    meta: {
      show: true
    },
    component: home
  },
  {
    path: '/category',
    meta: {
      show: true
    },
    component: category
  },
  {
    path: '/shopCart',
    meta: {
      show: true
    },
    component: shopCart
  },
  {
    path: '/profile',
    meta: {
      show: true
    },
    component: profile
  },
  {
    path: '/detail',
    meta: {
      show: false
    },
    component: detail
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
