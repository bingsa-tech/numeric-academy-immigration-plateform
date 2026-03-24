<template>
  <div class="min-h-screen bg-gray-50 font-sans scroll-smooth text-gray-900">
    <header class="relative bg-indigo-950 py-32 px-4 overflow-hidden">
      
      <div class="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=80" 
          alt="Campus Canada" 
          class="w-full h-full object-cover opacity-30 scale-105"
        >
        <div class="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-indigo-900/40 to-indigo-950/90"></div>
      </div>
      
      <div class="relative max-w-6xl mx-auto text-center text-white">
        <span class="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide uppercase bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
          Nous pouvons ensemble
        </span>
        <h1 class="text-5xl md:text-7xl font-blue mb-8 leading-[1.1] tracking-tight">
          Réalisez votre projet d'études au <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">Canada</span>
        </h1>
        <p class="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
          De l'admission universitaire jusqu'à votre intégration locale. Un pont humain et transparent entre vos ambitions et la réalité canadienne.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-5">
          <router-link to="/register" class="bg-green-500 hover:bg-green-400 text-indigo-950 px-10 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-green-900/20 transition-all hover:-translate-y-1 active:scale-95">
            Évaluer mon dossier gratuitement
          </router-link>
          <a href="#services" class="bg-white/5 hover:bg-white/10 backdrop-blur-xl text-white border border-white/20 px-10 py-4 rounded-2xl font-bold text-lg transition-all hover:border-white/40">
            Découvrir nos services
          </a>
        </div>
      </div>
    </header>

    <section class="py-24 max-w-7xl mx-auto px-6">
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

    <section id="services" class="py-24 bg-gray-100 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20">
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

    <section id="seminaires" class="py-24 bg-white border-y border-gray-100">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div class="max-w-2xl">
            <h2 class="text-4xl font-extrabold text-gray-900 mb-4">Séminaires & Masterclass</h2>
            <p class="text-lg text-gray-500">Préparez votre profil professionnel avant même votre départ.</p>
          </div>
          <div class="hidden md:block h-px flex-grow bg-gray-100 mx-8"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="seminar in upcomingSeminars" :key="seminar.id" class="bg-gray-50 rounded-[2rem] border border-gray-100 p-8 hover:bg-white hover:shadow-xl transition-all duration-300">
            <div class="flex items-center justify-between mb-6">
              <span class="px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wider">
                {{ formatDate(seminar.date) }}
              </span>
              <span class="text-xs font-semibold text-orange-600 px-3 py-1 bg-orange-50 rounded-full">
                🔥 {{ seminar.placesLeft }} places
              </span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">{{ seminar.title }}</h3>
            <p class="text-gray-600 mb-8 line-clamp-3 text-sm leading-relaxed">{{ seminar.description }}</p>
            <button @click="registerForSeminar(seminar.id)" class="w-full py-4 bg-white border border-indigo-100 text-indigo-600 font-bold rounded-xl hover:bg-indigo-600 hover:text-white transition-colors shadow-sm">
              Réserver ma place
            </button>
          </div>
        </div>
      </div>
    </section>

    <section id="infos" class="py-24 bg-slate-50 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20">
          <h2 class="text-4xl font-extrabold text-gray-900 mb-4">Guide & Actualités</h2>
          <p class="text-gray-500">Restez informé des réformes IRCC 2026 en temps réel.</p>
        </div>

        <div class="grid lg:grid-cols-3 gap-16">
          <div class="lg:col-span-2 space-y-12">
            <h3 class="text-2xl font-bold flex items-center gap-3">
              <span class="p-2 bg-indigo-600 text-white rounded-lg text-sm italic font-serif">STEP</span>
              Le parcours type du candidat
            </h3>
            
            <div class="space-y-4">
              <div v-for="(step, index) in timeline" :key="index" class="relative pl-12 pb-10 border-l-2 border-indigo-100 last:border-0">
                <div class="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-white border-4 border-indigo-600"></div>
                <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <h4 class="font-bold text-lg text-gray-800 mb-1">{{ step.title }}</h4>
                  <p class="text-gray-600 text-sm">{{ step.desc }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-gray-900 flex items-center gap-2 mb-8">
              <span class="text-red-500">●</span> Alertes Légales
            </h3>
            
            <div v-for="alert in alerts" :key="alert.title" :class="alert.bg" class="p-6 rounded-2xl border-l-4 shadow-sm">
              <span :class="alert.text" class="text-[10px] font-black uppercase tracking-widest">{{ alert.tag }}</span>
              <h4 class="font-bold text-gray-900 mt-2 text-sm">{{ alert.title }}</h4>
              <p class="text-xs text-gray-600 mt-2 leading-relaxed">{{ alert.desc }}</p>
            </div>

            <button class="w-full py-4 bg-indigo-50 text-indigo-700 rounded-xl text-sm font-bold hover:bg-indigo-100 transition border border-indigo-100">
              Journal Officiel IRCC 2026
            </button>
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
              <input v-model="contact.name" type="text" placeholder="Jean Dupont" class="w-full p-4 bg-white border border-gray-200 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all" required />
            </div>
            <div class="space-y-3">
              <label class="text-sm font-bold text-gray-700 ml-1">Email professionnel</label>
              <input v-model="contact.email" type="email" placeholder="jean@exemple.com" class="w-full p-4 bg-white border border-gray-200 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all" required />
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