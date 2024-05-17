<script setup> 
import DarkIcon from '../icons/DarkIcon.vue';
import {useTheme} from '../../stores/theme.js'
import { storeToRefs } from 'pinia';

const themeStore = useTheme()
const {currentTheme} = storeToRefs(themeStore)

</script>

<template>
  <header class="flex justify-between items-center px-5 shadow-md" :style="{'color': currentTheme.font, 'background-color': currentTheme.bg}">
    <h1 class="text-xl font-bold"> Where in the world? </h1>


    <div class="flex justify-center gap-2 items-center cursor-pointer" @click="themeStore.toggleTheme">
      <dark-icon />
      <span class="text-lg font-medium"> Dark mode </span>
    </div>
  </header>
</template>