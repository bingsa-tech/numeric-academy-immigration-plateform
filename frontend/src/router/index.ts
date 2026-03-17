import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/authStore';

const RegisterView = ()=> import('@/views/RegisterView.vue');

import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import ProgramView from '../views/ProgramView.vue';
import ApplicationView from '../views/ApplicationView.vue';
import DashboardView from '../views/DashboardView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/login', name: 'Login', component: LoginView },
  { path: '/register', name: 'Register', component: RegisterView },
  { 
    path: '/dashboard', 
    name: 'Dashboard', 
    component: DashboardView, 
    meta: { requiresAuth: true } // Crucial : définit que cette page est protégée
  },
  { 
    path: '/programs', 
    component: ProgramView, 
    meta: { requiresAuth: true } 
  },
  { 
    path: '/applications', 
    component: ApplicationView, 
    meta: { requiresAuth: true } 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Version moderne du guard (sans le paramètre next)
router.beforeEach((to) => {
  const authStore = useAuthStore();

  // Si la route demande une auth et que le token est absent
  if (to.meta.requiresAuth && !authStore.token) {
    // Rediriger vers la racine (Login)
    return { name: 'Login' };
  }
  
  // Si tout est ok, on laisse passer (pas besoin de return)
});

export default router;