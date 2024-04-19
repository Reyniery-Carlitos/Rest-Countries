<script setup>
import { storeToRefs } from "pinia";
import { useCountries } from "../../stores/countries.js";

import Back from "../buttons/Back.vue";

const store = useCountries();
const { country } = storeToRefs(store);

function handleClick(code) {
  store.filterCountryByCode(code)
}
</script>

<template>
  <section class="w-5/6 flex flex-col gap-10 mt-10" v-if="country">
    <Back />

    <div class="w-full grid justify-items-start lg:grid-cols-2 lg:gap-20 lg:place-items-center">
      <img :src="country.flags.svg" class="w-full" alt="Flag Country image" />

      <div class="w-full">
        <header class="my-5 lg:my-1">
          <h3 class="font-bold text-2xl"> {{ country.name }} </h3>
        </header>

        <main class="grid gap-5 md:grid-cols-2">
          <div class="">
            <p class="font-semibold my-2">
              Native name: <span class="font-normal"> {{ country.nativeName }} </span>
            </p>
            <p class="font-semibold my-2">
              Population: <span class="font-normal"> {{ country.population }} </span>
            </p>
            <p class="font-semibold my-2">
              Region: <span class="font-normal"> {{ country.region }} </span>
            </p>
            <p class="font-semibold my-2">
              Sub Region: <span class="font-normal"> {{ country.subregion }} </span>
            </p>
            <p class="font-semibold my-2">
              Capital: <span class="font-normal"> {{ country.capital }} </span>
            </p>
          </div>

          <div>
            <p class="font-semibold my-2">
              Top Level Domain: <span class="font-normal"> {{ country.topLevelDomain[0] }} </span>
            </p>
            <p class="font-semibold my-2">
              Currencies: <span class="font-normal" v-for="currency of country.currencies"> {{ currency.name }} </span>
            </p>
            <p class="font-semibold my-2">
              Languajes:

              <span class="font-normal" v-for="language of country.languages" :key="language.name + language.nativeName"> {{ language.name }} </span>
            </p>
          </div>
        </main>

        <footer
          class="mt-10 flex flex-col gap-2 mb-5 md:flex-row md:items-center"
        >
          <p class="text-xl font-medium">Border countries:</p>
          <ul class="flex gap-2 flex-wrap">
            <li class="bg-white shadow-md w-32 text-center py-1 cursor-pointer" v-for="bc of country.borders" :key="bc" @click="handleClick(bc)"> {{ bc }} </li>
          </ul>
        </footer>
      </div>
    </div>
  </section>
</template>
