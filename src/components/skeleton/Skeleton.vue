<script setup>
import Image from '../icons/Image.vue'
</script>

<template>
  <section class="w-full grid justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <div class="animate-pulse bg-white rounded-md shadow-md w-5/6 md:w-/6" v-for="i in 8" :key="i">
      <div class="flex items-center justify-center w-full bg-gray-200 h-48">
        <Image />
      </div>
      <div class="px-7 pb-10">
        <div class="my-4 w-full bg-gray-200 h-7 rounded-md"> </div>
        <div class="my-2 w-full bg-gray-200 h-4 rounded-md"> </div>
        <div class="my-2 w-full bg-gray-200 h-4 rounded-md"> </div>
        <div class="my-2 w-full bg-gray-200 h-4 rounded-md"> </div>
      </div>
    </div>
  </section>
</template>

<style>

</style>