import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/HomeView/index.vue')
    },
    {
      path: '/components',
      name: 'components',
      component: () => import('@/pages/ComponentsView/index.vue')
    }
  ]
})

export default router
