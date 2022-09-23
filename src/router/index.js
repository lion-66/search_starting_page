import { createRouter, createWebHistory } from 'vue-router'
// import store from '@/store'
// import Login from '@/views/Login'
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
