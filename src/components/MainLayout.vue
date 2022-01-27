<script setup lang="ts">
import MainHeader from '@/components/MainHeader.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <MainHeader>
    <template #logo>
      <RouterLink :to="{ name: 'home' }" class="heading-lg"
        >My Super App</RouterLink
      >
    </template>

    <template #links>
      <RouterLink :to="{ name: 'todo-list' }" class="link"
        >All todos</RouterLink
      >
    </template>
  </MainHeader>

  <section class="grid grid-cols-1 gap-4 px-8 py-12 place-content-center">
    <slot></slot>
  </section>
</template>
