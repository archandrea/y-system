import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/views/HomePage/HomePage.vue'),
    children: [
      {
        name: 'process',
        path: '/process',
        component: () => import('@/views/HomePage/HomePage.vue'),
      },
      {
        name: 'project',
        path: '/project',
        component: () => import('@/views/HomePage/HomePage.vue'),
      },
      {
        name: 'message',
        path: '/message',
        component: () => import('@/views/HomePage/HomePage.vue'),
      },
      {
        name: 'database',
        path: '/database',
        component: () => import('@/views/DatabasePage/DatabasePage.vue'),
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router