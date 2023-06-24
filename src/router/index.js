import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'home',
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('@/views/HomePage'),
    children: [
      {
        name: 'process',
        path: '/process',
        component: () => import('@/views/ProcessPage'),
      },
      {
        name: 'project',
        path: '/project',
        component: () => import('@/views/ProjectPage'),
      },
      {
        name: 'message',
        path: '/message',
        component: () => import('@/views/HomePage'),
      },
      {
        name: 'database',
        path: '/database',
        component: () => import('@/views/DatabasePage'),
      },
    ]
  },
  {
    path: '*',
    redirect: 'home'
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router