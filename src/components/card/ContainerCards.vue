<script setup>
import {storeToRefs} from 'pinia';

import { useCountries } from "../../stores/countries";
import Card from './Card.vue';
import Skeleton from '../skeleton/Skeleton.vue'

const store = useCountries()
const {countries, loading} = storeToRefs(store)
</script>

<template>
  <section class="w-full grid justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" v-if="countries && loading === false">
    <Card v-for="country of countries" :key="country.name + country.area" :name="country.name" :population="country.population" :region="country.region" :capital="country.capital" :image="country.flags.svg" />
  </section>
  <Skeleton v-else />
</template>
