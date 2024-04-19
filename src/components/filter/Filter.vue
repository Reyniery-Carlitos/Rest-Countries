<script setup>
import { ref } from "vue";
import DownArrow from "../icons/DownArrow.vue";
import regions from '../../consts/regions.json'
import { useCountries } from "../../stores/countries";

const toggleFilterRegion = ref(false);
const inputValue = ref('')

function toggleRegion() {
  toggleFilterRegion.value = !toggleFilterRegion.value;
}

const store = useCountries()

function handleChange () {
  store.findByName(inputValue.value)
}

function handleClick(region) {
  toggleFilterRegion.value = false
  store.filterByRegion(region)
}

</script>

<template>
  <section class="flex flex-col gap-10 items-start w-full mt-10 px-10 md:flex-row md:justify-center">
    <input
      type="text"
      class="bg-white shadow-md shadow-gray-200 h-16 w-full px-2 rounded-md outline-none md:w-4/6 lg:5/6"
      placeholder="Search for a country"
      v-model="inputValue"
      @change="handleChange"
    />

    <div class="flex flex-col gap-1 bg-white relative">
      <span
        class="flex justify-between px-8 text-lg py-5 shadow-md"
        @click="toggleRegion"
      >
        Filter by region
        <DownArrow />
      </span>
      <ul
        class="self-start bg-white w-full shadow-md rounded-md pl-8 py-5 top-20 absolute"
        v-if="toggleFilterRegion && regions"
      >
        <li class="h-8 content-center cursor-pointer" v-for="region of regions" :key="region.id" @click="handleClick(region.name)"> {{ region.name }} </li>
      </ul>
    </div>
  </section>
</template>
