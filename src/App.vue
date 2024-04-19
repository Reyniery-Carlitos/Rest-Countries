<script setup>
import {useCountries} from './stores/countries.js';
import {storeToRefs} from 'pinia';

import Header from './components/header/Header.vue';
import Filter from './components/filter/Filter.vue';
import ContainerCards from './components/card/ContainerCards.vue';
import CountryInfo from './components/info/CountryInfo.vue';

const store = useCountries()
const {country} = storeToRefs(store)
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
body {
  background-color: hsl(0, 0%, 98%);  
}

#app {
  display: grid;
  grid-template-rows: 80px 1fr;
}

</style>