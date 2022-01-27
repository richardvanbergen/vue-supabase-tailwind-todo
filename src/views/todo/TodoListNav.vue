<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import ButtonPrimary from '@/components/ButtonPrimary.vue'
</script>

<template>
  <Hero heading="🚀 Todos" />
  <ButtonPrimary :to="{ name: 'todo-item-create' }">Add New</ButtonPrimary>
</template>
