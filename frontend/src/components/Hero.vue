<template>
  <header class="w-full relative bg-white py-24 md:py-32 px-4 overflow-hidden border-b border-slate-100">
    
    <div class="absolute inset-0 z-0 opacity-70">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-emerald-50 rounded-full blur-[100px]"></div>
      <div class="absolute top-20 -left-20 w-60 h-60 bg-sky-50 rounded-full blur-[80px]"></div>
      
      <svg class="absolute inset-0 h-full w-full stroke-slate-100 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
        <defs>
          <pattern id="dot-pattern" width="20" height="20" patternUnits="userSpaceOnUse" x="50%" y="-1">
            <circle cx="1.5" cy="1.5" r="1.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" stroke-width="0" fill="url(#dot-pattern)" />
      </svg>
    </div>
    
    <div class="relative z-10 max-w-7xl mx-auto text-center">
      
      <div class="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-sm font-semibold bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100 shadow-inner shadow-emerald-100/50">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        Accompagnement certifié pour le Canada
      </div>
      
      <h1 class="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.05] tracking-tighter text-slate-950">
        Réalisez votre projet d'études au 
        <span class="relative inline-block ml-2">
          <span class="absolute -inset-1 -skew-y-3 bg-emerald-100/70 rounded-lg"></span>
          <span class="relative text-emerald-600">Canada</span>
        </span>
      </h1>
      
      <p class="text-xl md:text-2xl mb-14 text-slate-700 max-w-3xl mx-auto leading-relaxed font-normal">
        Un pont humain, transparent et technologique entre vos ambitions académiques et la réalité canadienne. De l'admission à l'intégration locale.
      </p>
      
      <div class="flex flex-col sm:flex-row justify-center gap-6 items-center">
        <router-link to="/register" class="group w-full sm:w-auto flex items-center justify-center bg-slate-950 hover:bg-emerald-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-lg shadow-slate-950/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-emerald-500/20 active:scale-95">
          Évaluer mon dossier gratuitement
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </router-link>
        
        <a href="#services" class="group w-full sm:w-auto flex items-center justify-center bg-white hover:bg-slate-50 text-slate-950 border border-slate-200 px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-sm hover:border-slate-300">
          Découvrir nos services
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
// Script setup propre
</script>