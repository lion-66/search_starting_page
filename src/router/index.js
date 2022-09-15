import { createRouter, createWebHistory } from 'vue-router'
// import store from '@/store'
const routes = [
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
