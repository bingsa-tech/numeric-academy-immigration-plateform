import { defineStore } from 'pinia';
import authService from '@/services/authService';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: localStorage.getItem('user') 
      ? JSON.parse(localStorage.getItem('user')) 
      : null,
    token: localStorage.getItem('token') || null,
  }),

  actions: {
    async login(credentials) {
      try {
        const data = await authService.login(credentials);
        console.log("Data brute du service:", data);

        if (!data || !data.token) {
          console.error("Le backend n'a pas renvoyé de token !");
          return false;
        }

        this.token = data.token;
        this.user = data.user || { role: credentials.role };

        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(this.user));

        return true;
      } catch (error) {
        console.error("Erreur store login:", error);
        return false;
      }
    },

    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }
  }
});