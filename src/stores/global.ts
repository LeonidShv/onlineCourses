// Pinia Store
import { defineStore } from "pinia";
// TODO: add all requests via pinia, add caching

export const useGlobalStore = defineStore("global", {
  state: () => ({
    isDarkTheme: false,
  }),
  getters: {},
  actions: {
    toggleDarkTheme() {
      this.isDarkTheme = !this.isDarkTheme;
    },
  },
});
