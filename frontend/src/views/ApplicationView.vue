<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-4">My Applications</h1>

    <!-- Formulaire de soumission -->
    <div class="mb-6 p-4 border rounded shadow">
      <h2 class="text-xl font-semibold mb-2">Submit a new application</h2>
      <select v-model="selectedProgram" class="border p-2 rounded w-full mb-2">
        <option disabled value="">Select a program</option>
        <option v-for="program in programs" :key="program.id" :value="program.id">
          {{ program.name }} - {{ program.university }}
        </option>
      </select>
      <button @click="submit" class="bg-blue-600 text-white px-4 py-2 rounded">
        Submit Application
      </button>
    </div>

    <!-- Liste des candidatures -->
    <div class="grid gap-4">
      <div v-for="app in applications" :key="app.id" class="p-4 border rounded shadow">
        <h3 class="font-semibold text-lg">{{ app.program_name }} - {{ app.university_name }}</h3>
        <p>Status: <span :class="statusClass(app.status)">{{ app.status }}</span></p>
        <p v-if="app.admission_score !== null">Admission Score: {{ app.admission_score }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAuthStore } from "../stores/authStore";
import * as applicationService from "../services/applicationService";
import * as programService from "../services/programService";

const authStore = useAuthStore();
const token = authStore.token;

const programs = ref([]);
const selectedProgram = ref("");
const applications = ref([]);

// Charger les programmes pour le select
const loadPrograms = async () => {
  programs.value = await programService.getPrograms();
};

// Charger les candidatures de l’étudiant
const loadApplications = async () => {
  applications.value = await applicationService.getApplications(token);
};

// Soumettre une nouvelle candidature
const submit = async () => {
  if (!selectedProgram.value) {
    alert("Please select a program");
    return;
  }
  try {
    await applicationService.submitApplication(selectedProgram.value, token);
    alert("Application submitted!");
    selectedProgram.value = "";
    await loadApplications();
  } catch (err) {
    console.error("Error submitting application:", err);
    alert("Failed to submit application");
  }
};

// Retourne une classe CSS en fonction du statut
const statusClass = (status) => {
  switch (status) {
    case "submitted": return "text-yellow-600";
    case "accepted": return "text-green-600";
    case "rejected": return "text-red-600";
    default: return "";
  }
};

onMounted(async () => {
  await loadPrograms();
  await loadApplications();
});
</script>