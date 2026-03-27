<script setup>
import { ref, onMounted } from 'vue'; // Ajout de onMounted
import DashboardLayout from '@/components/DashboardLayout.vue';
import applicationService from '@/services/applicationService';

const applications = ref([]); // Liste vide au départ
const isCalculating = ref(null);

// 1. Charger les données au montage du composant
onMounted(async () => {
  try {
    const data = await applicationService.getApplications();
    // On adapte les clés car ton SQL renvoie "application_id", "program_name", etc.
    applications.value = data.map(app => ({
      id: app.application_id,
      university: app.university_name,
      program: app.program_name,
      score: app.admission_score ? (app.admission_score * 100).toFixed(0) : null,
      recommendation: null // On l'aura après le calcul
    }));
  } catch (err) {
    console.error("Erreur chargement:", err);
  }
});

// 2. Calculer et afficher dans la même vue
const handleGetScore = async (id) => {
  isCalculating.value = id;
  try {
    const data = await applicationService.calculateScore(id);
    
    const app = applications.value.find(a => a.id === id);
    if (app) {
      // Conversion de 0.85 (Python) en 85 (Affichage %)
      app.score = (data.admission_probability * 100).toFixed(0); 
      app.recommendation = data.recommendation; // "High chance", etc.
    }
  } catch (err) {
    alert("Erreur lors du calcul via le script Python.");
  } finally {
    isCalculating.value = null;
  }
};
</script>

<template>
  <DashboardLayout>
    <div class="mt-8 bg-white rounded-lg shadow-sm p-6">
      <h3 class="text-lg font-semibold mb-4">Mes chances d'admission</h3>
      <div class="overflow-x-auto">
        <table class="w-full text-left">
          <thead>
            <tr class="text-gray-400 text-sm uppercase">
              <th class="pb-3 px-2">ID</th>
              <th class="pb-3 px-2">Université / Programme</th>
              <th class="pb-3 px-2 text-center">Score & Verdict</th>
              <th class="pb-3 px-2 text-right">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr v-for="app in applications" :key="app.id" class="hover:bg-gray-50 transition">
              <td class="py-4 px-2 text-gray-500 text-sm">#{{ app.id }}</td>
              <td class="py-4 px-2">
                <div class="font-medium text-gray-800">{{ app.university }}</div>
                <div class="text-xs text-gray-400">{{ app.program }}</div>
              </td>
              
              <td class="py-4 px-2 text-center">
                <div v-if="app.score" class="flex flex-col items-center gap-1">
                  <span :class="app.score >= 70 ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'"
                        class="px-3 py-1 rounded-full text-sm font-bold">
                    {{ app.score }}%
                  </span>
                  <span class="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    {{ app.recommendation }}
                  </span>
                </div>
                <span v-else class="text-gray-300 text-sm">Non calculé</span>
              </td>

              <td class="py-4 px-2 text-right">
                <button @click="handleGetScore(app.id)" :disabled="isCalculating === app.id"
                        class="text-sm bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-600 hover:text-white transition-all disabled:opacity-50">
                  {{ isCalculating === app.id ? 'Analyse Python...' : 'Recalculer' }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </DashboardLayout>
</template>