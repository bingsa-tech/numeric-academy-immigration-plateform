<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 p-4">
    <div class="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-2">
        Créer un compte
      </h2>
      <p class="text-center text-gray-500 mb-6">
        Rejoignez Immigration Académique
      </p>

      <form @submit.prevent="handleRegister" class="space-y-4">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
          required
        />

        <input
          v-model="password"
          type="password"
          placeholder="Mot de passe"
          class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
          required
        />

        <input
          v-model="confirmPassword"
          type="password"
          placeholder="Confirmer le mot de passe"
          class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
          required
        />

        <select
          v-model="role"
          class="w-full p-3 border rounded-lg bg-white focus:ring-2 focus:ring-indigo-500 outline-none transition"
          required
        >
          <option value="" disabled>Choisir un rôle</option>
          <option value="student">🎓 Étudiant</option>
          <option value="admin">🛠 Administrateur</option>
        </select>

        <button
          type="submit"
          :disabled="isLoading"
          :class="[
            'w-full py-3 rounded-lg font-semibold transition duration-200 text-white shadow-md',
            isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
          ]"
        >
          <span v-if="isLoading">Inscription en cours...</span>
          <span v-else>S'inscrire</span>
        </button>
      </form>

      <p class="mt-6 text-sm text-center text-gray-600">
        Déjà un compte ?
        <router-link to="/login" class="text-indigo-600 font-semibold hover:underline">
          Connexion
        </router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import authService from "../services/authService"; // Import corrigé sans * as

const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const role = ref("student");
const isLoading = ref(false);

const router = useRouter();

const handleRegister = async () => {
  try {
    if (password.value !== confirmPassword.value) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }

    const userData = {
      email: email.value,
      password: password.value,
      role: role.value
    };

    const res = await authService.register(userData);

    console.log("SUCCESS REGISTER:", res);

    alert("Compte créé avec succès !");
    router.push("/login");

  } catch (err) {
    console.error("REGISTER ERROR:", err.response?.data || err.message);
    alert(err.response?.data?.error || "Erreur lors de l'inscription");
  }
};


</script>