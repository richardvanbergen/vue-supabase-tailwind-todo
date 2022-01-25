<script setup lang="ts">
defineProps<{
  heading: string
}>()
</script>

<template>
  <h1 class="text-5xl font-black">
    {{ heading }}
  </h1>
</template>
