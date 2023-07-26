import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'coursesList',
      component: () => import('@/pages/CoursesListView/index.vue')
    },
    {
      path: '/course/:id',
      name: 'course',
      component: () => import('@/pages/CourseView/index.vue')
    },
    {
      path: '/components',
      name: 'components',
      component: () => import('@/pages/ComponentsView/index.vue')
    },
    {
      path: '/spacex',
      name: 'spaceX',
      component: () => import('@/pages/SpaceX/index.vue'),
    },
    {
      path: '/dragon/:id',
      name: 'dragon',
      component: () => import('@/pages/SpaceXDragon/index.vue'),
    },
  ]
})

export default router
