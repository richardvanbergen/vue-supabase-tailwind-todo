<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainLayout from './components/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <RouterView />
  </MainLayout>
</template>

<style>
@import '@/assets/base.css';

body {
  @apply font-sans font-normal leading-normal text-gray-800 text-base md:text-lg md:leading-relaxed;
}

.link {
  @apply text-blue-400 hover:text-blue-700 visited:text-blue-900 underline underline-offset-2;
}

@layer components {
  .heading-lg {
    @apply leading-tight text-4xl font-black;
  }

  .heading-md {
    @apply leading-tight text-2xl font-bold;
  }

  .heading-sm {
    @apply leading-tight text-xl font-bold;
  }
}
</style>
