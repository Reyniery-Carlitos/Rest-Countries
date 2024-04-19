<script setup>
import BackIcon from '../icons/BackIcon.vue';
import { useCountries } from '../../stores/countries';

const store = useCountries()

function handleClick () {
  store.notCountry()
}

</script>

<template>
  <div class="shadow-md flex justify-center text-xl gap-2 px-5 py-2 items-center cursor-pointer bg-white w-32" @click="handleClick">
    <back-icon />
    <span> Back </span>
  </div>
</template>