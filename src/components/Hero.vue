<script setup lang="ts">
defineProps<{
  heading: string
}>()
</script>

<template>
  <h1 class="text-4xl font-bold">
    {{ heading }}
  </h1>
</template>
