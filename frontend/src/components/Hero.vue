<template>
  <header class="relative w-full min-h-[85vh] flex items-center justify-center bg-[#fdfdfd] overflow-hidden border-b border-slate-100/60">
    
    <div class="absolute inset-0 z-0">
      <div class="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-emerald-100/40 rounded-full blur-[120px] animate-pulse"></div>
      <div class="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-[100px]"></div>
      
      <div class="absolute inset-0 opacity-[0.03] [mask-image:linear-gradient(to_bottom,white,transparent,white)]" 
           style="background-image: radial-gradient(#000 0.5px, transparent 0.5px); background-size: 24px 24px;">
      </div>
    </div>

    <div class="relative z-10 w-full max-w-[1400px] mx-auto px-6 py-20">
      <div class="flex flex-col items-center text-center">
        
        <div class="group cursor-default inline-flex items-center gap-3 px-5 py-2 mb-10 text-sm font-bold bg-white border border-slate-200/60 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
          <span class="flex h-2.5 w-2.5">
            <span class="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span class="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
            Partenaire Officiel de votre Réussite au Canada
          </span>
        </div>

        <h1 class="text-6xl md:text-8xl font-[900] text-slate-950 leading-[0.95] tracking-[-0.04em] mb-10">
          L'excellence académique <br/>
          <span class="text-emerald-600 italic font-serif tracking-normal">à portée de main.</span>
        </h1>

        <p class="max-w-2xl text-lg md:text-xl text-slate-600 leading-relaxed mb-14 font-medium">
          Une plateforme intelligente et un accompagnement humain basé à <span class="text-slate-950 font-bold border-b-2 border-emerald-400">Sherbrooke</span>. Simplifiez votre admission, sécurisez votre visa, et commencez votre nouvelle vie.
        </p>

        <div class="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
          <router-link to="/register" 
            class="px-10 py-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-emerald-200 transition-all duration-300 hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2">
            Évaluer mon dossier
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </router-link>
          
          <a href="#services" 
            class="px-10 py-5 bg-white border border-slate-200 text-slate-950 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all duration-300 shadow-sm flex items-center justify-center">
            Explorer les bourses
          </a>
        </div>

        <div class="mt-20 pt-10 border-t border-slate-100 w-full flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
           <div class="flex flex-col">
             <span class="text-2xl font-black text-slate-950">+1200</span>
             <span class="text-xs font-bold uppercase tracking-widest text-slate-500">Étudiants Admis</span>
           </div>
           <div class="flex flex-col">
             <span class="text-2xl font-black text-slate-950">98%</span>
             <span class="text-xs font-bold uppercase tracking-widest text-slate-500">Taux de Visa</span>
           </div>
           <div class="flex flex-col">
             <span class="text-2xl font-black text-slate-950">48h</span>
             <span class="text-xs font-bold uppercase tracking-widest text-slate-500">Temps de Réponse</span>
           </div>
        </div>

      </div>
    </div>
  </header>
</template>