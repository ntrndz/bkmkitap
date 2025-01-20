import { defineStore } from "pinia";
import { useNuxtApp } from "#app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as null | { uid: string; email: string },
  }),
  actions: {
    async login(email: string, password: string) {
      const { $firebaseAuth } = useNuxtApp();
      const userCredential = await signInWithEmailAndPassword($firebaseAuth, email, password);
      this.user = {
        uid: userCredential.user.uid,
        email: userCredential.user.email ?? "",
      };
    },
    async register(email: string, password: string) {
      const { $firebaseAuth } = useNuxtApp();
      const userCredential = await createUserWithEmailAndPassword($firebaseAuth, email, password);
      this.user = {
        uid: userCredential.user.uid,
        email: userCredential.user.email ?? "",
      };
    },
    async logout() {
      const { $firebaseAuth } = useNuxtApp();
      await signOut($firebaseAuth);
      this.user = null;
    },
    checkAuth() {
      const { $firebaseAuth } = useNuxtApp();
      onAuthStateChanged($firebaseAuth, (user) => {
        if (user) {
          this.user = {
            uid: user.uid,
            email: user.email ?? "",
          };
        } else {
          this.user = null;
        }
      });
    },
  },
});
