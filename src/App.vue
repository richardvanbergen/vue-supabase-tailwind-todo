<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Hero from './components/Hero.vue'
import MainLayout from './components/MainLayout.vue'
import ContentWrapper from './components/ContentWrapper.vue'
</script>

<template>
  <MainLayout>
    <header>
      <Hero heading="You did it!" />

      <nav>
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
      </nav>
    </header>

    <ContentWrapper>
      <RouterView />
    </ContentWrapper>
  </MainLayout>
</template>

<style>
@import '@/assets/base.css';
</style>
