import { defineStore } from "pinia";
import { useNuxtApp } from "#app";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";

export const useShoppingListStore = defineStore("shoppingList", {
  state: () => ({
    items: [] as Array<{
      id: string;
      title: string;
      discountedPrice: number;
      image: string;
    }>,
  }),
  actions: {
    async fetchItems() {
      const { $firebaseDb } = useNuxtApp(); // Firebase'in sağladığı db örneğini alın
      const querySnapshot = await getDocs(collection($firebaseDb, "shoppingList"));
      this.items = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    },
    async addItem(item: { title: string; discountedPrice: number; image: string }) {
      const { $firebaseDb } = useNuxtApp();
      const docRef = await addDoc(collection($firebaseDb, "shoppingList"), item);
      this.items.push({ id: docRef.id, ...item });
    },
    async removeItem(id: string) {
      const { $firebaseDb } = useNuxtApp();
      await deleteDoc(doc($firebaseDb, "shoppingList", id));
      this.items = this.items.filter((item) => item.id !== id);
    },
  },
});
