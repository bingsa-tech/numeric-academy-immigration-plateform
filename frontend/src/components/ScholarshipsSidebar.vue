<template>
  <aside class="w-full lg:w-80 flex flex-col gap-6">
    <div class="bg-slate-900 text-white p-6 rounded-3xl shadow-xl shadow-slate-200">
      <h3 class="text-xl font-bold flex items-center gap-3">
        <span class="text-emerald-400">🎓</span>
        Guide des Bourses
      </h3>
      <p class="text-slate-400 text-xs mt-2 leading-relaxed">
        Accès direct aux financements officiels pour 2026-2027.
      </p>
    </div>

    <div class="bg-white border border-slate-100 p-5 rounded-3xl shadow-sm">
      <h4 class="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center">
        <span class="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
        Gouvernementales
      </h4>
      <ul class="space-y-3">
        <li v-for="link in govtLinks" :key="link.name">
          <a :href="link.url" target="_blank" class="flex flex-col group">
            <span class="text-sm font-semibold text-slate-700 group-hover:text-emerald-600 transition-colors">
              {{ link.name }}
            </span>
            <span class="text-[11px] text-slate-400">{{ link.desc }}</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="bg-emerald-50/50 border border-emerald-100 p-5 rounded-3xl">
      <h4 class="text-sm font-bold text-emerald-800 uppercase tracking-wider mb-4">
        Par Filière
      </h4>
      <div class="flex flex-wrap gap-2">
        <a v-for="tag in fields" :key="tag.name" :href="tag.url" 
           class="px-3 py-1.5 bg-white border border-emerald-100 rounded-xl text-xs font-medium text-emerald-700 hover:bg-emerald-600 hover:text-white transition-all shadow-sm">
          {{ tag.name }}
        </a>
      </div>
    </div>

    <div class="bg-white border border-slate-100 p-5 rounded-3xl shadow-sm">
      <h4 class="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
        Portails Universités
      </h4>
      <div class="space-y-4">
        <a v-for="uni in universityLinks" :key="uni.name" :href="uni.url" target="_blank" 
           class="flex items-center justify-between group p-2 hover:bg-slate-50 rounded-xl transition-colors">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-lg">
              {{ uni.icon }}
            </div>
            <span class="text-sm font-medium text-slate-600 group-hover:text-slate-900">{{ uni.name }}</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-300 group-hover:text-emerald-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
        </a>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
const govtLinks = [
  { name: "Vanier (Doctorat)", url: "https://vanier.gc.ca/", desc: "50k$/an - Excellence mondiale" },
  { name: "PBEEE Québec", url: "http://www.frqnt.gouv.qc.ca/", desc: "Excellence pour étrangers au Québec" },
  { name: "Bourses ÉduCanada", url: "https://www.educanada.ca/", desc: "Programmes d'échanges officiels" }
];

const fields = [
  { name: "Génie & Tech", url: "#" },
  { name: "Santé", url: "#" },
  { name: "Gestion/MBA", url: "#" },
  { name: "Sciences Sociales", url: "#" }
];

const universityLinks = [
  { name: "U. Sherbrooke", url: "https://www.usherbrooke.ca/etudiants/finances/bourses", icon: "🦊" },
  { name: "U. de Montréal", url: "https://admission.umontreal.ca/bourses", icon: "🏔️" },
  { name: "U. Laval", url: "https://www.bbaf.ulaval.ca/", icon: "🏰" },
  { name: "McGill University", url: "https://www.mcgill.ca/studentaid/scholarships-aid", icon: "🏛️" }
];
</script>