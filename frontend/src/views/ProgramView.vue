<script setup>
import { ref, onMounted } from "vue";
import * as programService from "../services/programService";
import ProgramCard from "../components/ProgramCard.vue";
import DashboardLayout from '@/components/DashboardLayout.vue';


const programs = ref([]);

onMounted(async () => {
  programs.value = await programService.getPrograms();
});
</script>

<template>
  <DashboardLayout>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Programmes</h1>
    <div class="grid grid-cols-3 gap-4">
      <ProgramCard v-for="program in programs" :key="program.id" :program="program" />
    </div>
  </div>
  </DashboardLayout>
</template>

