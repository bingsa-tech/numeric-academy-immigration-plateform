<template>
  <nav class="bg-white shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      
      <div class="text-2xl font-bold text-indigo-700 flex items-center gap-2">
        <router-link to="/" class="flex items-center gap-2">
           ENIMA
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
  <div class="bg-green-800 text-white text-sm py-1.5 hidden md:block">
      <div class="max-w-7xl mx-auto px-6 flex justify-end space-x-4">

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-blue-400 transition"
        >
          <i class="fab fa-twitter"></i> Twitter
        </a>

        <a
          href="[LIEN_FACEBOOK]"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-blue-600 transition"
        >
          <i class="fab fa-facebook-f"></i> Facebook
        </a>

        <a
          href="[LIEN_WHATSAPP]"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-green-400 transition"
        >
          <i class="fab fa-whatsapp"></i> WhatsApp
        </a>

        <a
          href="[LIEN_INSTAGRAM]"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-pink-500 transition"
        >
          <i class="fab fa-instagram"></i> Instagram
        </a>

      </div>
    </div>
</template>

<script setup>
// Pas de logique nécessaire pour le moment
</script>