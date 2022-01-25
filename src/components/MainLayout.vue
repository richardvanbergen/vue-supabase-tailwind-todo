<script setup lang="ts">
import MainHeader from '@/components/MainHeader.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <MainHeader>
    <template #logo>
      <span class="heading-lg">My Super App</span>
    </template>

    <template #links>
      <RouterLink to="/">All todos</RouterLink>
    </template>
  </MainHeader>

  <section class="grid min-h-screen grid-cols-1 gap-4 p-8 place-content-center">
    <slot></slot>
  </section>
</template>

<style scoped>
article:empty {
  display: none;
}
</style>
