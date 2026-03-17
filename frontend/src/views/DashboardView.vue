<script setup>
import DashboardLayout from '@/components/DashboardLayout.vue';
</script>

<template>
  <DashboardLayout>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
        <h3 class="text-gray-500 text-sm font-medium">Candidatures envoyées</h3>
        <p class="text-2xl font-bold">12</p>
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
      <h3 class="text-lg font-semibold mb-4">Activités récentes</h3>
      <p class="text-gray-600">Aucune activité récente à afficher.</p>
    </div>
  </DashboardLayout>
</template>

