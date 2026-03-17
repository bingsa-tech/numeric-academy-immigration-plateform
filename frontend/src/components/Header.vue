<template>
  <nav class="bg-white shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      
      <div class="text-2xl font-bold text-indigo-700 flex items-center gap-2">
        <router-link to="/" class="flex items-center gap-2">
          <span>🇨🇦</span> PNIMMACA
        </router-link>
      </div>

      <div class="flex items-center space-x-4">
        <router-link to="/" class="text-indigo-600 font-medium px-2">Accueil</router-link>
        <a href="#services" class="hidden md:block text-gray-600 hover:text-indigo-600 font-medium">Services</a>
        <a href="#contact" class="hidden md:block text-gray-600 hover:text-indigo-600 font-medium">Contact</a>
        
        <router-link to="/login" class="text-indigo-600 font-medium px-2">Connexion</router-link>
        <router-link to="/register" class="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
          S'inscrire
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
// Pas de logique nécessaire pour le moment
</script>