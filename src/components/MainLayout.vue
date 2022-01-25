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
      <RouterLink to="/" class="link">All todos</RouterLink>
    </template>
  </MainHeader>

  <section class="grid grid-cols-1 gap-4 px-8 py-12 place-content-center">
    <slot></slot>
  </section>
</template>
