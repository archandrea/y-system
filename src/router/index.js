import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { name: 'home', path: '/', component: () => import('@/views/HomePage/HomePage.vue'), children: [] }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router