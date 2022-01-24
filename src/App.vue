<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Hero from './components/Hero.vue'
</script>

<template>
  <header>
    <Hero heading="You did it!" />

    <nav>
      <!-- <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink> -->
    </nav>
  </header>

  <RouterView />
</template>

<style>
@import '@/assets/base.css';
</style>
