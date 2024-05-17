<script setup>
import BackIcon from "../icons/BackIcon.vue";
import { useCountries } from "../../stores/countries";
import { useTheme } from "../../stores/theme";
import { storeToRefs } from "pinia";

const store = useCountries();
const themeStore = useTheme();

const { currentTheme } = storeToRefs(themeStore);

function handleClick() {
  store.notCountry();
}
</script>

<template>
  <div
    class="shadow-md flex justify-center text-xl gap-2 px-5 py-2 items-center cursor-pointer w-32"
    :style="{'background-color': currentTheme.bg, 'color': currentTheme.font}"
    @click="handleClick"
  >
    <back-icon :color="currentTheme.font" />
    <span> Back </span>
  </div>
</template>
