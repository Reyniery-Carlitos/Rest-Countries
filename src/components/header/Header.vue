<script setup> 
import DarkIcon from '../icons/DarkIcon.vue';
</script>

<template>
  <header class="flex justify-between items-center px-5 shadow-md bg-white">
    <h1 class="text-xl font-bold"> Where in the world? </h1>


    <div class="flex justify-center gap-2 items-center">
      <dark-icon />
      <span class="text-lg font-medium"> Dark mode </span>
    </div>
  </header>
</template>