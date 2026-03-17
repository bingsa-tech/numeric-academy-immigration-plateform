<template>
  <div class="program-card">
    <div class="card-header">
      <h3>{{ program.title }}</h3>
      <span class="university-name">{{ program.university?.name }}</span>
    </div>
    
    <div class="card-body">
      <p class="description">{{ program.description }}</p>
      <div class="details">
        <span><strong>Domaine :</strong> {{ program.field }}</span>
        <span><strong>Niveau :</strong> {{ program.level }}</span>
        <span><strong>Durée :</strong> {{ program.duration }}</span>
      </div>
    </div>
    
    <div class="card-footer">
      <button class="btn-secondary">Voir Détails</button>
      <button class="btn-primary">Postuler</button>
    </div>
  </div>
</template>

<script setup>
// On définit les "props" que ce composant s'attend à recevoir.
// C'est comme ça que ProgramsView.vue lui passera les données.
const props = defineProps({
  program: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.program-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 15px;
  background-color: #fff;
  transition: box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.program-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-header h3 {
  margin: 0 0 5px 0;
  color: #333;
}

.university-name {
  color: #666;
  font-size: 0.9em;
}

.card-body .description {
  color: #555;
  margin: 15px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Limite à 3 lignes */
  -webkit-box-orient: vertical;
}

.card-body .details {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  font-size: 0.9em;
}

.card-footer {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

button {
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: bold;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-secondary {
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  color: #333;
}
</style>