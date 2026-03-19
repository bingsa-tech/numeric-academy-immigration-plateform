<script setup lang="ts">
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import SeminarSection from '@/components/SeminarSection.vue';
</script>


<template>
  <div class="min-h-screen w-full flex flex-col bg-gray-50">
    
    <Header />
    
    <main class="flex-1 w-full max-w-screen-2xl mx-auto p-4 md:p-8">
      
      <router-view />
    </main>
    
    <Footer />
  </div>
</template>