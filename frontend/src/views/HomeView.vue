<template>
  <div class="min-h-screen bg-gray-50 font-sans scroll-smooth">
 

    <header class="relative bg-indigo-900 py-24 px-4 overflow-hidden">
      <div class="absolute inset-0 opacity-20">
        <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=80" alt="Campus Canada" class="w-full h-full object-cover">
      </div>
      <div class="relative max-w-5xl mx-auto text-center text-white">
        <h1 class="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Réalisez votre projet d'études au <span class="text-green-400">Canada</span>
        </h1>
        <p class="text-xl md:text-2xl mb-10 text-gray-200">
          De l'admission à l'université jusqu'à votre accueil sur place. 
          Un accompagnement local, humain et transparent.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <router-link to="/register" class="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition">
            Évaluer mon dossier gratuitement
          </router-link>
          <a href="#services" class="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition">
            Découvrir nos services
          </a>
        </div>
      </div>
    </header>

    <section class="py-20 max-w-7xl mx-auto px-4">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-bold text-gray-800 mb-6">Pourquoi choisir Immigration Académique ?</h2>
          <p class="text-gray-600 text-lg mb-6 leading-relaxed">
            Contrairement aux agences traditionnelles, nous sommes basés <strong>directement au Canada</strong>. 
          </p>
          <ul class="space-y-4 text-gray-700">
            <li class="flex items-start gap-3"><span class="text-green-500 text-xl">✔</span> Expertise Locale directe.</li>
            <li class="flex items-start gap-3"><span class="text-green-500 text-xl">✔</span> Réactivité sur le fuseau horaire canadien.</li>
            <li class="flex items-start gap-3"><span class="text-green-500 text-xl">✔</span> Aide au logement à l'arrivée.</li>
          </ul>
        </div>
        <div class="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-center">
          <p class="text-gray-600 italic text-lg">"Nous servons de pont entre vos rêves et la réalité canadienne."</p>
          <div class="font-bold text-gray-800 mt-4">Votre intermédiaire au Canada</div>
        </div>
      </div>
    </section>

    <section id="services" class="py-20 bg-gray-100 px-4">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-16">Nos services d'accompagnement</h2>
        <div class="grid md:grid-cols-3 gap-8 text-left">
          <div class="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <span class="text-3xl">🎓</span>
            <h3 class="text-xl font-bold my-4">Admission</h3>
            <p class="text-gray-600">Sélection et dépôt de candidatures stratégiques.</p>
          </div>
          <div class="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <span class="text-3xl">📄</span>
            <h3 class="text-xl font-bold my-4">Immigration</h3>
            <p class="text-gray-600">Orientation complète CAQ et Permis d'Études.</p>
          </div>
          <div class="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <span class="text-3xl">🏠</span>
            <h3 class="text-xl font-bold my-4">Installation</h3>
            <p class="text-gray-600">Recherche de logement et intégration locale.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="py-20 bg-white px-4">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800">Soumettez votre projet</h2>
          <p class="text-gray-600 mt-2">Réponse sous 48h par nos conseillers sur place.</p>
        </div>

        <div class="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
          <form @submit.prevent="submitContact" class="grid md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="text-sm font-semibold text-gray-700">Nom complet</label>
              <input v-model="contact.name" type="text" placeholder="Jean Dupont" class="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500" required />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-semibold text-gray-700">Email</label>
              <input v-model="contact.email" type="email" placeholder="jean@exemple.com" class="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500" required />
            </div>
            <div class="md:col-span-2 space-y-2">
              <label class="text-sm font-semibold text-gray-700">Lien CV / Projet (Drive, Dropbox...)</label>
              <input v-model="contact.link" type="url" placeholder="https://..." class="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div class="md:col-span-2 space-y-2">
              <label class="text-sm font-semibold text-gray-700">Message</label>
              <textarea v-model="contact.message" rows="4" placeholder="Votre projet..." class="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500" required></textarea>
            </div>
            <div class="md:col-span-2">
              <button type="submit" :disabled="isSending" class="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg disabled:bg-gray-400">
                {{ isSending ? 'Envoi en cours...' : 'Envoyer mon dossier' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <footer class="bg-gray-900 text-white py-8 text-center text-sm">
      <p>&copy; 2024 Immigration Académique - Basé au Canada 🇨🇦</p>
    </footer>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const isSending = ref(false);

const contact = reactive({
  name: '',
  email: '',
  link: '',
  message: ''
});

const submitContact = async () => {
  isSending.value = true;
  try {
    // Simulation d'envoi vers ton futur backend
    console.log("Données à envoyer :", contact);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert("Message reçu ! Nous reviendrons vers vous très bientôt.");
    
    // Reset du formulaire
    contact.name = '';
    contact.email = '';
    contact.link = '';
    contact.message = '';
  } catch (err) {
    alert("Erreur lors de l'envoi.");
  } finally {
    isSending.value = false;
  }
};
</script>