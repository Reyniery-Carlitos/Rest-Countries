<script setup>
import {useCountries} from './stores/countries.js';
import {storeToRefs} from 'pinia';

import Header from './components/header/Header.vue';
import Filter from './components/filter/Filter.vue';
import ContainerCards from './components/card/ContainerCards.vue';
import CountryInfo from './components/info/CountryInfo.vue';
import { useTheme } from './stores/theme.js';
import { watchEffect } from 'vue';

const store = useCountries()
const storeTheme = useTheme()

const {country} = storeToRefs(store)
const {currentTheme} = storeToRefs(storeTheme)

watchEffect(() => {
  document.body.className = currentTheme.value.name
})
</script>

<template>
  <Header />
  <main class="grid gap-5 justify-items-center">
    <template v-if="!country">
      <Filter />
      <container-cards />
    </template>

    <country-info v-else/>
  </main>
</template>

<style>
body.light {
  background-color: hsl(0, 0%, 98%);
  color: #000;  
}

body.dark {
  background-color:  hsl(207, 26%, 17%);
}

#app {
  display: grid;
  grid-template-rows: 80px 1fr;
  padding-bottom: 30px;
}

</style>