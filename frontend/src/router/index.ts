import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/authStore';

// Utilise le lazy loading pour les vues lourdes (Dashboard, Admin)
const HomeView = () => import('@/views/HomeView.vue');
const RegisterView = () => import('@/views/RegisterView.vue');
const LoginView = () => import('@/views/LoginView.vue');
const DashboardView = () => import('@/views/DashboardView.vue');
const ProgramView = () => import('@/views/ProgramView.vue');
const ApplicationView = () => import('@/views/ApplicationView.vue');

// Composant technique
import EventsSection from '@/components/EventsSection.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/login', name: 'Login', component: LoginView },
  { path: '/register', name: 'Register', component: RegisterView },
  { 
    path: '/dashboard', 
    name: 'Dashboard', 
    component: DashboardView, 
    meta: { requiresAuth: true } 
  },
  { 
    path: '/programs', 
    name: 'Programs', // Ajouté pour la cohérence
    component: ProgramView, 
    meta: { requiresAuth: true } 
  },
  { 
    path: '/applications', 
    name: 'Applications', // Ajouté pour la cohérence
    component: ApplicationView, 
    meta: { requiresAuth: true } 
  },
  { 
    path: '/events', // Minuscule recommandée pour les URLs
    name: 'Events',
    component: EventsSection 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Navigation Guard
router.beforeEach(async (to) => {
  const authStore = useAuthStore();

  // 1. Vérifie si la route nécessite une authentification
  if (to.meta.requiresAuth && !authStore.token) {
    // Optionnel : sauvegarder la page demandée pour y revenir après login
    return { name: 'Login', query: { redirect: to.fullPath } };
  }
  
  // 2. Empêche un utilisateur DEJÀ connecté d'aller sur Login ou Register
  if (authStore.token && (to.name === 'Login' || to.name === 'Register')) {
    return { name: 'Dashboard' };
  }
});

export default router;