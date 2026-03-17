<script setup>
import { useAuthStore } from '@/stores/authStore';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const handleLogout = () => {
  authStore.logout(); 
  router.push('/');   
};
</script>

<template>
  <div class="flex h-screen bg-gray-100 font-sans">
    <aside class="w-64 bg-indigo-900 text-white flex flex-col hidden md:flex">
      <div class="p-6 text-2xl font-bold border-b border-indigo-800">
        EduMigrate
      </div>
      
      <nav class="flex-1 p-4 space-y-2">
        <router-link to="/dashboard" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-800">
          Tableau de bord
        </router-link>
        <router-link to="/programs" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-800">
          Programmes
        </router-link>
        <router-link to="/applications" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-800">
          Mes Candidatures
        </router-link>
      </nav>

      <div class="p-4 border-t border-indigo-800">
        <button 
          @click="handleLogout" 
          class="w-full text-left py-2 px-4 hover:text-red-400 transition-colors"
        >
          Déconnexion
        </button>
      </div>
    </aside>

    <div class="flex-1 flex flex-col overflow-hidden">
      <header class="bg-white shadow-sm h-16 flex items-center justify-between px-8">
        <h2 class="text-xl font-semibold text-gray-800">
          Bienvenue, {{ authStore.user?.firstName || 'Utilisateur' }}
        </h2>
        
        <div class="flex items-center space-x-4">
          <span class="text-sm text-gray-400 uppercase font-bold px-2 py-1 bg-gray-100 rounded">
            {{ authStore.user?.role || 'Rôle non défini' }}
          </span>
          <div class="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
            {{ authStore.user?.firstName?.charAt(0) }}{{ authStore.user?.lastName?.charAt(0) }}
          </div>
        </div>
      </header>

      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-8">
        <slot></slot> 
      </main>
    </div>
  </div>
</template>