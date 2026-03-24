<template>
  <section class="py-24 bg-slate-50 text-slate-900 overflow-hidden relative">
    
    <div class="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-50 rounded-full blur-[100px]"></div>
    <div class="absolute bottom-0 left-0 w-1/4 h-1/4 bg-sky-50 rounded-full blur-[100px]"></div>

    <div class="max-w-6xl mx-auto px-4 relative z-10">
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase bg-emerald-100 text-emerald-700 rounded-full">
          Agenda Professionnel 
        </span>
        <h2 class="text-4xl md:text-5xl font-extrabold mb-5 tracking-tight text-slate-950">
          Explorez les opportunités au <span class="text-emerald-600">Canada</span>
        </h2>
        
      </div>

      <div v-if="loading" class="flex flex-col items-center justify-center py-20 text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mb-4"></div>
        <p class="text-slate-500">Analyse des opportunités en cours...</p>
      </div>

      <div v-else-if="error" class="text-center py-20 bg-red-50 border border-red-100 rounded-3xl">
        <p class="text-red-600 font-medium">Impossible de charger les événements pour le moment.</p>
        <button @click="loadEvents" class="mt-4 text-sm text-emerald-600 underline hover:text-emerald-800">Réessayer</button>
      </div>

      <div v-else-if="events.length > 0" class="grid md:grid-cols-3 gap-8">
        <div 
          v-for="event in slicedEvents" 
          :key="event.id"
          class="group bg-white border border-slate-100 p-7 rounded-3xl shadow-sm hover:shadow-xl hover:border-emerald-100 transition-all duration-300 flex flex-col"
        >
          <div class="flex-grow">
            <span class="text-[10px] font-bold uppercase tracking-widest bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full">
              {{ event.category }}
            </span>

            <h3 class="text-xl font-bold mb-3 mt-5 text-slate-950 group-hover:text-emerald-600 transition-colors leading-snug">
              {{ event.name }}
            </h3>

            <p class="text-sm text-slate-600 mb-6 line-clamp-3 leading-relaxed">
              {{ event.description }}
            </p>

            <div class="space-y-2.5 text-sm text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div class="flex items-center">
                <span class="mr-3 opacity-70">📍</span> {{ event.location }}
              </div>
              <div class="flex items-center">
                <span class="mr-3 opacity-70">📅</span> {{ event.date }}
              </div>
            </div>

            <div class="flex flex-wrap gap-2 mt-6">
              <span 
                v-for="tag in event.sectors" 
                :key="tag"
                class="text-[10px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded font-medium"
              >
                #{{ tag }}
              </span>
            </div>
          </div>

          <a 
            :href="event.official_link"
            target="_blank"
            class="mt-10 block text-center bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            Détails et Inscription →
          </a>
        </div>
      </div>

      <div v-else class="text-center py-24 bg-white rounded-3xl border border-slate-100 shadow-sm">
        <p class="text-xl text-slate-500 font-medium">Aucun événement disponible pour le moment.</p>
        <p class="text-slate-400 mt-2">Revenez bientôt pour découvrir de nouvelles opportunités.</p>
      </div>
    </div>
  </section>
</template>

<script>
import { getEvents } from "@/services/eventsService";

export default {
  name: 'EventsSection',
  data() {
    return {
      events: [],
      loading: true,
      error: false
    };
  },
  computed: {
    slicedEvents() {
      return this.events.slice(0, 6);
    }
  },
  mounted() {
    this.loadEvents();
  },
  methods: {
    async loadEvents() {
      this.loading = true;
      this.error = false;
      try {
        const result = await getEvents();
        console.log("Données brutes reçues :", result);
        // On s'assure que 'result' est bien le tableau directement
        this.events = Array.isArray(result) ? result : [];
      } catch (err) {
        console.error("Erreur API :", err);
        this.error = true;
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>