<script setup>
defineProps({
  color: String
})
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path :fill="color" d="m12 15l-5-5h10z"/></svg>
</template>