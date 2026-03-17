<script setup lang="ts">
import { ref, onMounted } from 'vue'
import api from '@/services/api'

const universities = ref([])
const searchCountry = ref('')

const loadUniversities = async () => {
  try {
    const response = await api.get('/universities', {
      params: { country: searchCountry.value }
    })
    universities.value = response.data
  } catch (err) {
    console.error("Error loading universities", err)
  }
}

onMounted(loadUniversities)
</script>

<template>
  <main class="p-4">
    <h1>University Catalogue</h1>
    
    <div class="search-box">
      <input 
        v-model="searchCountry" 
        @input="loadUniversities" 
        placeholder="Filter by country..." 
      />
    </div>

    <div class="uni-grid">
      <div v-for="uni in universities" :key="uni.id" class="card">
        <h3>{{ uni.name }}</h3>
        <p>{{ uni.city }}, {{ uni.country }}</p>
        <router-link :to="'/universities/' + uni.id" class="btn">View Details</router-link>
      </div>
    </div>
  </main>
</template>

<style scoped>
.uni-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.card { border: 1px solid #ccc; padding: 15px; border-radius: 8px; }
.search-box { margin-bottom: 20px; }
.btn { color: blue; text-decoration: underline; }
</style>