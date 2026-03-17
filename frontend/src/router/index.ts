import { createRouter, createWebHistory } from 'vue-router'
import UniversityListView from '../views/UniversityListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/universities',
      name: 'universities',
      component: UniversityListView
    },
    {
      path: '/universities/:id',
      name: 'university-detail',
      // Lazy load this for performance
      component: () => import('../views/UniversityDetailView.vue')
    }
  ]
})

export default router