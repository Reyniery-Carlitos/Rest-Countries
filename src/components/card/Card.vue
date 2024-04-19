<script setup>
import { defineProps } from 'vue';
import { useCountries } from "../../stores/countries";

const props = defineProps({
  image: String,
  name: String,
  population: Number,
  region: String,
  capital: String
})

const store = useCountries()

function handleClick (name) {
  store.selectCountry(name)
}

</script>

<template>
  <div class="bg-white rounded-md shadow-md w-4/6 md:w-5/6 cursor-pointer" @click="handleClick(name)">
    <img :src="image" class="min-h-50 max-h-50 w-full rounded-md" alt="Flag picture">
    <div class="px-7 pb-10">
      <h2 class="text-xl font-bold my-4"> {{ name }} </h2>
      <p class="font-semibold my-1"> Population: <span class="font-normal"> {{ population }} </span> </p>
      <p class="font-semibold my-1"> Region: <span class="font-normal"> {{ region }} </span> </p>
      <p class="font-semibold my-1"> capital: <span class="font-normal"> {{ capital }} </span> </p>
    </div>
  </div>
</template>