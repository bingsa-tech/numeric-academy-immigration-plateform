<template>
  <aside class="w-full flex flex-col gap-4 overflow-y-auto max-h-[85vh] pr-2 custom-scrollbar">
    <div class="bg-indigo-900 text-white p-5 rounded-3xl shadow-lg">
      <h3 class="text-lg font-bold flex items-center gap-2">
        <span class="text-indigo-400">🗞️</span>
        Guide & IRCC
      </h3>
      <p class="text-indigo-200 text-[10px] uppercase tracking-widest mt-1">Réformes 2026</p>
    </div>

    <div class="space-y-3">
      <div v-for="alert in alerts" :key="alert.title" 
           :class="alert.bg" class="p-4 rounded-2xl border-l-4 shadow-sm transition-transform hover:scale-[1.02]">
        <span :class="alert.text" class="text-[9px] font-black uppercase tracking-widest">{{ alert.tag }}</span>
        <h4 class="font-bold text-slate-900 text-xs mt-1">{{ alert.title }}</h4>
      </div>
    </div>

    <div class="bg-white border border-slate-100 p-5 rounded-3xl shadow-sm">
      <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Parcours Type</h4>
      <div class="space-y-4">
        <div v-for="(step, index) in timeline" :key="index" class="relative pl-6 border-l border-indigo-100 last:border-0 pb-4">
          <div class="absolute -left-[4.5px] top-0 w-2 h-2 rounded-full bg-indigo-600"></div>
          <h5 class="text-xs font-bold text-slate-800 leading-none">{{ step.title }}</h5>
          <p class="text-[10px] text-slate-500 mt-1 leading-tight">{{ step.desc }}</p>
        </div>
      </div>
    </div>

    <button class="w-full py-3 bg-indigo-50 text-indigo-700 rounded-2xl text-xs font-bold hover:bg-indigo-600 hover:text-white transition-all border border-indigo-100 shadow-sm">
      Journal Officiel IRCC
    </button>
  </aside>
</template>

<script setup>
defineProps(['timeline', 'alerts']);
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar { width: 4px; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
</style>