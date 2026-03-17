<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700">
    
    <div class="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
      
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-2">
        Bienvenue 👋
      </h2>
      <p class="text-center text-gray-500 mb-6">
        Connectez-vous à votre compte
      </p>

      <form @submit.prevent="handleLogin" class="space-y-4">
        
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          required
        />

        <input
          v-model="password"
          type="password"
          placeholder="Mot de passe"
          class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          required
        />

        <select
          v-model="role"
          class="w-full p-3 border rounded-lg bg-white focus:ring-2 focus:ring-indigo-500"
        >
          <option value="student">🎓 Étudiant</option>
          <option value="admin">🛠 Administrateur</option>
        </select>

        <button
          type="submit"
          class="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200"
        >
          Se connecter
        </button>

      </form>

      <p class="mt-6 text-sm text-center text-gray-600">
        Pas encore de compte ?
        <router-link to="/register" class="text-indigo-600 font-semibold hover:underline">
          Inscription
        </router-link>
      </p>

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/authStore";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const role = ref("student");

const authStore = useAuthStore();
const router = useRouter();

const handleLogin = async () => {
  try {
    const credentials = {
      email: email.value,
      password: password.value,
      role: role.value
    };

    const success = await authStore.login(credentials);

    if (success) {
      router.push("/dashboard");
    } else {
      alert("Identifiants incorrects");
    }
  } catch (err) {
    console.error(err);
    alert("Erreur de connexion");
  }
};
</script>