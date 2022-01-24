<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MainLayout from './components/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <header>
      <nav>
        <RouterLink to="/">All todos</RouterLink>
      </nav>
    </header>

    <RouterView />
  </MainLayout>
</template>

<style>
@import '@/assets/base.css';
</style>
