<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import api from '@/services/api';

// 1. Get the ID from the URL (/universities/:id)
const route = useRoute();
const router = useRouter();
const universityId = route.params.id;

const university = ref<any>(null);
const loading = ref(true);
const error = ref(false);

const fetchDetails = async () => {
  try {
    const response = await api.get(`/universities/${universityId}`);
    university.value = response.data;
  } catch (err) {
    console.error("Error fetching university details:", err);
    error.value = true;
  } finally {
    loading.value = false;
  }
};

onMounted(fetchDetails);
</script>

<template>
  <div class="container">
    <button @click="router.back()" class="back-btn">← Back to Catalogue</button>

    <div v-if="loading" class="status">Loading university details...</div>

    <div v-else-if="error" class="status error">
      University not found or server error.
    </div>

    <div v-else-if="university" class="detail-card">
      <header>
        <div class="ranking" v-if="university.ranking">
          World Rank: #{{ university.ranking }}
        </div>
        <h1>{{ university.name }}</h1>
        <p class="location">📍 {{ university.city }}, {{ university.country }}</p>
      </header>

      <section class="content">
        <h3>About the University</h3>
        <p>{{ university.description || 'No description available for this institution.' }}</p>
      </section>

      <footer class="links">
        <a :href="university.website" target="_blank" class="web-link" v-if="university.website">
          Visit Official Website
        </a>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.back-btn {
  background: none;
  border: none;
  color: #3498db;
  cursor: pointer;
  margin-bottom: 1rem;
  font-weight: bold;
}

.detail-card {
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

h1 { margin: 0.5rem 0; color: #2c3e50; }

.location { color: #7f8c8d; font-size: 1.1rem; }

.ranking {
  display: inline-block;
  background: #f1c40f;
  color: #000;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-weight: bold;
  font-size: 0.9rem;
}

.content { margin: 2rem 0; line-height: 1.6; }

.web-link {
  display: inline-block;
  background: #2c3e50;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
}

.web-link:hover { background: #34495e; }

.status { text-align: center; margin-top: 3rem; font-size: 1.2rem; }
</style>