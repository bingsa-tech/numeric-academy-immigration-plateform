<template>
  <div class="min-h-screen bg-gray-50 font-sans scroll-smooth text-gray-900">
    <Hero />

    <div class="hidden 2xl:block fixed left-8 top-1/2 -translate-y-1/2 z-50 w-[300px]">
      <div class="relative group">
        <div class="absolute -right-12 top-10 bg-indigo-600 text-white px-4 py-2 rounded-t-xl rotate-90 origin-bottom-right font-bold text-xs tracking-widest shadow-lg">
          INFO IRCC
        </div>
        <div class="bg-white/90 backdrop-blur-md border border-slate-200 rounded-[2.5rem] shadow-2xl p-2 transition-all duration-500 hover:scale-[1.02]">
          <GuideSidebar :timeline="timeline" :alerts="alerts" />
        </div>
      </div>
    </div>

    <div class="hidden xl:block fixed right-8 top-1/2 -translate-y-1/2 z-50 w-[320px]">
      <div class="relative group">
        <div class="absolute -left-12 top-10 bg-emerald-600 text-white px-4 py-2 rounded-t-xl rotate-90 origin-bottom-left font-bold text-xs tracking-widest shadow-lg">
          BOURSES 2026
        </div>
        <div class="bg-white/80 backdrop-blur-xl border border-slate-200 rounded-[2.5rem] shadow-2xl p-2 transition-all duration-500 hover:scale-[1.02]">
          <ScholarshipsSidebar />
        </div>
      </div>
    </div>

    <section class="py-16 max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div class="space-y-8">
          <h2 class="text-4xl font-extrabold text-gray-900 tracking-tight">
            Pourquoi choisir <span class="text-indigo-600">Immigration Académique ?</span>
          </h2>
          <p class="text-gray-600 text-xl leading-relaxed">
            Contrairement aux agences traditionnelles, nous opérons <strong>directement depuis le Canada</strong>. Cette proximité change tout dans la qualité de votre accueil.
          </p>
          <ul class="grid gap-4">
            <li v-for="item in features" :key="item" class="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
              <span class="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-green-100 text-green-600 rounded-full">✓</span>
              <span class="font-medium text-gray-700">{{ item }}</span>
            </li>
          </ul>
        </div>
        <div class="relative group">
          <div class="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-green-500 rounded-[2rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
          <div class="relative bg-white p-10 rounded-[2rem] shadow-2xl border border-gray-50 text-center space-y-6">
            <div class="text-5xl">🇨🇦</div>
            <p class="text-2xl font-serif italic text-gray-700 leading-snug">
              "Nous servons de pont entre vos rêves et la réalité canadienne."
            </p>
            <div class="h-px w-16 bg-indigo-200 mx-auto"></div>
            <div class="uppercase tracking-widest text-sm font-bold text-indigo-600">Votre intermédiaire local pour la mobilité académique</div>
          </div>
        </div>
      </div>
    </section>

    <EventsService />

    <section id="services" class="py-16 bg-gray-100 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-extrabold text-gray-900 mb-6">Services d'accompagnement permanent</h2>
          <p class="text-gray-600 text-lg max-w-2xl mx-auto font-light">
            Une expertise pointue pour chaque étape critique de votre parcours migratoire.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.title" class="group bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 flex flex-col h-full border border-transparent hover:border-indigo-100">
            <div class="text-4xl mb-6 transform group-hover:scale-110 transition-transform">{{ service.icon }}</div>
            <h3 class="text-2xl font-bold mb-4 text-gray-800">{{ service.title }}</h3>
            <p class="text-gray-600 mb-8 leading-relaxed flex-grow">{{ service.desc }}</p>
            <router-link to="/register" class="inline-flex items-center gap-2 text-indigo-600 font-bold group-hover:translate-x-2 transition-transform">
              {{ service.cta }} <span>→</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="py-24 bg-white px-6">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-extrabold text-gray-900">Soumettez votre projet</h2>
          <p class="text-gray-500 mt-4 text-lg">Réponse garantie sous 48h par nos experts à Sherbrooke.</p>
        </div>
        
        <div class="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 shadow-inner">
          <form @submit.prevent="submitContact" class="grid md:grid-cols-2 gap-8">
            <div class="space-y-3">
              <label class="text-sm font-bold text-gray-700 ml-1">Nom complet</label>
              <input v-model="contact.name" type="text" placeholder="Samuel Biloloo" class="w-full p-4 bg-white border border-gray-200 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all" required />
            </div>
            <div class="space-y-3">
              <label class="text-sm font-bold text-gray-700 ml-1">Email professionnel</label>
              <input v-model="contact.email" type="email" placeholder="samuel@exemple.com" class="w-full p-4 bg-white border border-gray-200 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all" required />
            </div>
            <div class="md:col-span-2 space-y-3">
              <label class="text-sm font-bold text-gray-700 ml-1">Lien CV / Dossier (Optionnel)</label>
              <input v-model="contact.link" type="url" placeholder="Lien Google Drive ou LinkedIn" class="w-full p-4 bg-white border border-gray-200 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all" />
            </div>
            <div class="md:col-span-2 space-y-3">
              <label class="text-sm font-bold text-gray-700 ml-1">Détails du projet</label>
              <textarea v-model="contact.message" rows="5" placeholder="Parlez-nous de vos objectifs..." class="w-full p-4 bg-white border border-gray-200 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all" required></textarea>
            </div>
            <div class="md:col-span-2 pt-4">
              <button type="submit" :disabled="isSending" class="w-full bg-indigo-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition shadow-xl shadow-indigo-200 disabled:bg-gray-400">
                {{ isSending ? 'Transmission sécurisée...' : 'Envoyer mon dossier' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import EventsService from '@/components/EventsSection.vue'
import Hero from '@/components/Hero.vue'
import ScholarshipsSidebar from '@/components/ScholarshipsSidebar.vue'
import GuideSidebar from '@/components/GuideSidebar.vue';

const isSending = ref(false);
const contact = reactive({ name: '', email: '', link: '', message: '' });

const features = [
  "Expertise locale basée à Sherbrooke, Canada",
  "Réactivité maximale (Fuseau horaire canadien)",
  "Accompagnement terrain post-arrivée"
];

const services = [
  { icon: '🎓', title: 'Admission Stratégique', desc: 'Maximisez vos chances de succès. Nous sélectionnons les programmes et établissements (DLI) alignés avec votre profil.', cta: 'Lancer mon admission' },
  { icon: '📄', title: 'Visa & Immigration', desc: 'Naviguez sans stress à travers les procédures du CAQ et du Permis d’Études grâce à notre expertise IRCC.', cta: 'Préparer mon dossier' },
  { icon: '🏠', title: 'Installation & Accueil', desc: 'Arrivez l’esprit tranquille. Aide au logement et intégration administrative dès votre descente d’avion.', cta: 'Planifier mon arrivée' },
  { icon: '🚀', title: 'Booster de Carrière', desc: 'Séminaires exclusifs pour maîtriser les codes du marché du travail canadien et l’employabilité.', cta: 'M’inscrire aux formations' },
  { icon: '💰', title: 'Bourses & Aides', desc: 'Optimisez votre budget avec notre veille constante sur les bourses d’excellence et financements.', cta: 'Chercher une bourse' },
  { icon: '📚', title: 'Expertise Conseil & Adaptabilité', desc: 'Accès à des experts pour evaluations et conseils pratiques pour chaque étape.', cta: 'Accéder aux ressources' }
];

const timeline = [
  { title: "Lettre d'Acceptation (DLI)", desc: "Admission officielle dans un établissement d'enseignement désigné canadien." },
  { title: "CAQ (Québec)", desc: "Certificat d'Acceptation du Québec, étape obligatoire avant le traitement fédéral." },
  { title: "Permis d'Études IRCC", desc: "Soumission du dossier final avec preuves de fonds et données biométriques." }
];

const alerts = [
  { tag: 'Urgent', title: 'Plafond des permis 2026', desc: 'Nouveaux quotas nationaux appliqués pour stabiliser la croissance étudiante.', bg: 'bg-red-50 border-red-500', text: 'text-red-600' },
  { tag: 'Finances', title: 'Coût de la vie', desc: 'Le montant requis est de 20 635 $ (hors frais de scolarité) pour 2026.', bg: 'bg-blue-50 border-blue-500', text: 'text-blue-600' },
  { tag: 'Légal', title: 'Travail hors campus', desc: 'Ne laissez rien au hasard. Nos conseillers vous délivrent une évaluation rigoureuse et des solutions concrètes à chaque étape de votre projet, garantissant une transition fluide et une intégration réussie dans le système académique et professionnel canadien', bg: 'bg-green-50 border-green-500', text: 'text-green-600' }
];

const upcomingSeminars = ref([
  { id: 1, title: "Leadership et Gestion d'Équipe", description: "Stratégies modernes pour diriger au Canada.", date: "2026-04-15", placesLeft: 12 },
  { id: 2, title: "Analyse de Données Stratégiques", description: "Maîtrisez les KPIs et Power BI.", date: "2026-05-02", placesLeft: 5 }
]);

const submitContact = async () => {
  isSending.value = true;
  await new Promise(r => setTimeout(r, 1500));
  alert("Dossier transmis avec succès !");
  Object.assign(contact, { name: '', email: '', link: '', message: '' });
  isSending.value = false;
};

const formatDate = (d) => new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
const registerForSeminar = (id) => console.log("Seminar ID:", id);
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>