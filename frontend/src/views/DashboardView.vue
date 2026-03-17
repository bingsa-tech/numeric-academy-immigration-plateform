<script setup>
import { ref } from 'vue';
import DashboardLayout from '@/components/DashboardLayout.vue';
import applicationService from '@/services/applicationService'; // Assure-toi que ce fichier existe

// 1. On crée une liste réactive pour tes candidatures
// Dans le futur, tu feras un appel API pour remplir ce tableau
const applications = ref([
  { id: 6, university: 'Université de Montréal', program: 'Informatique', score: null },
  { id: 12, university: 'Université Laval', program: 'Génie Civil', score: 85 }
]);

const isCalculating = ref(null);

// 2. La fonction pour appeler ton API de score
const handleGetScore = async (id) => {
  isCalculating.value = id;
  try {
    const data = await applicationService.calculateScore(id);
    
    // Mise à jour du score dans la liste
    const app = applications.value.find(a => a.id === id);
    if (app) {
      app.score = data.score; // Ton API doit renvoyer { score: ... }
    }
  } catch (err) {
    alert("Erreur lors du calcul du score. Vérifie que le serveur est lancé.");
  } finally {
    isCalculating.value = null;
  }
};
</script>

<template>
  <DashboardLayout>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
        <h3 class="text-gray-500 text-sm font-medium">Candidatures envoyées</h3>
        <p class="text-2xl font-bold">{{ applications.length }}</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
        <h3 class="text-gray-500 text-sm font-medium">Programmes favoris</h3>
        <p class="text-2xl font-bold">5</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-yellow-500">
        <h3 class="text-gray-500 text-sm font-medium">Alertes</h3>
        <p class="text-2xl font-bold">2</p>
      </div>
    </div>

    <div class="mt-8 bg-white rounded-lg shadow-sm p-6">
      <h3 class="text-lg font-semibold mb-4">Mes chances d'admission</h3>
      <div class="overflow-x-auto">
        <table class="w-full text-left">
          <thead>
            <tr class="text-gray-400 text-sm uppercase">
              <th class="pb-3 px-2">ID</th>
              <th class="pb-3 px-2">Université / Programme</th>
              <th class="pb-3 px-2 text-center">Score</th>
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
                <span v-if="app.score" 
                      :class="app.score >= 70 ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'"
                      class="px-3 py-1 rounded-full text-sm font-bold">
                  {{ app.score }}%
                </span>
                <span v-else class="text-gray-300 text-sm">---</span>
              </td>
              <td class="py-4 px-2 text-right">
                <button 
                  @click="handleGetScore(app.id)"
                  :disabled="isCalculating === app.id"
                  class="text-sm bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-600 hover:text-white transition-all disabled:opacity-50"
                >
                  {{ isCalculating === app.id ? 'Calcul...' : 'Calculer Score' }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="mt-8 bg-white rounded-lg shadow-sm p-6">
      <h3 class="text-lg font-semibold mb-4">Activités récentes</h3>
      <p class="text-gray-600">Aucune activité récente à afficher.</p>
    </div>
  </DashboardLayout>
</template>