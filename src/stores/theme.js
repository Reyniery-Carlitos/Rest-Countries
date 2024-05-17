import { ref } from "vue";
import { defineStore } from "pinia";
import themes from '../consts/themes.json'

export const useTheme = defineStore('theme', () => {
  const currentTheme = ref(themes.light);

  function toggleTheme () {
    currentTheme.value = currentTheme.value.name === 'light' ? themes.dark : themes.light
  }

  return {currentTheme, toggleTheme}
})