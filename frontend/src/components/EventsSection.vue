<template>
  <section class="py-24 bg-slate-50 text-slate-900 overflow-hidden relative">
    <div class="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-50 rounded-full blur-[100px]"></div>
    <div class="absolute bottom-0 left-0 w-1/4 h-1/4 bg-sky-50 rounded-full blur-[100px]"></div>

    <div class="max-w-7xl mx-auto px-4 relative z-10">
      
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div class="max-w-2xl">
          <span class="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase bg-emerald-100 text-emerald-700 rounded-full">
            Agenda Professionnel 
          </span>
          <h2 class="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-slate-950">
            Opportunités au <span class="text-emerald-600">Canada</span>
          </h2>
          <p class="text-lg text-slate-600 leading-relaxed">
            Faites défiler les événements majeurs pour propulser votre carrière.
          </p>
        </div>

        <div class="flex gap-3" v-if="events.length > 0 && !loading && !error">
          <button @click="scrollPrev" class="p-4 rounded-full border border-slate-200 bg-white shadow-sm hover:bg-emerald-50 hover:border-emerald-200 transition-all text-emerald-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button @click="scrollNext" class="p-4 rounded-full border border-slate-200 bg-white shadow-sm hover:bg-emerald-50 hover:border-emerald-200 transition-all text-emerald-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      <div v-if="loading" class="flex flex-col items-center justify-center py-20 text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mb-4"></div>
        <p class="text-slate-500 font-medium">Analyse des opportunités...</p>
      </div>

      <div v-else-if="error" class="text-center py-20 bg-red-50 border border-red-100 rounded-3xl">
        <p class="text-red-600 font-medium">Impossible de charger les événements.</p>
        <button @click="loadEvents" class="mt-4 text-sm text-emerald-600 underline">Réessayer</button>
      </div>

      <div 
        v-else-if="events.length > 0" 
        ref="carousel"
        class="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pb-8 px-2"
      >
        <div 
          v-for="event in events" 
          :key="event.id"
          class="flex-none w-[320px] md:w-[400px] snap-start"
        >
          <div class="group h-full bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-emerald-100 transition-all duration-500 flex flex-col justify-between">
            <div>
              <div class="flex justify-between items-start">
                <span class="text-[10px] font-bold uppercase tracking-widest bg-slate-50 text-slate-500 px-3 py-1.5 rounded-lg border border-slate-100">
                  {{ event.category }}
                </span>
                <span class="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded">2026</span>
              </div>

              <h3 class="text-2xl font-bold mb-4 mt-6 text-slate-950 group-hover:text-emerald-600 transition-colors leading-tight">
                {{ event.name }}
              </h3>

              <p class="text-slate-600 mb-8 line-clamp-3 leading-relaxed text-sm">
                {{ event.description }}
              </p>

              <div class="grid grid-cols-1 gap-3 mb-8">
                <div class="flex items-center text-sm text-slate-600 bg-slate-50 p-3 rounded-2xl border border-slate-50">
                  <span class="mr-3 text-lg">📍</span> {{ event.location }}
                </div>
                <div class="flex items-center text-sm text-slate-600 bg-slate-50 p-3 rounded-2xl border border-slate-50">
                  <span class="mr-3 text-lg">📅</span> {{ event.date }}
                </div>
              </div>
            </div>

            <a 
              :href="event.official_link"
              target="_blank"
              class="w-full inline-flex items-center justify-center bg-slate-900 text-white hover:bg-emerald-600 px-6 py-4 rounded-2xl font-bold text-sm transition-all duration-300 group-hover:shadow-lg group-hover:shadow-emerald-200"
            >
              Détails de l'événement
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-24 bg-white rounded-[3rem] border border-slate-100 shadow-sm">
        <p class="text-xl text-slate-500 font-medium">Aucun événement disponible.</p>
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
  mounted() {
    this.loadEvents();
  },
  methods: {
    async loadEvents() {
      this.loading = true;
      this.error = false;
      try {
        const result = await getEvents();
        this.events = Array.isArray(result) ? result : [];
      } catch (err) {
        console.error("Erreur API :", err);
        this.error = true;
      } finally {
        this.loading = false;
      }
    },
    scrollNext() {
      this.$refs.carousel.scrollBy({ left: 400, behavior: 'smooth' });
    },
    scrollPrev() {
      this.$refs.carousel.scrollBy({ left: -400, behavior: 'smooth' });
    }
  }
};
</script>

<style scoped>
/* Masquer la barre de défilement pour un look plus propre */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>