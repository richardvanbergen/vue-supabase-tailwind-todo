<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { RouterLinkProps } from 'vue-router'
defineProps<{
  to: RouterLinkProps['to']
}>()
</script>

<template>
  <RouterLink :to="to" custom v-slot="{ href, navigate }">
    <a
      v-bind="$attrs"
      :href="href"
      @click="navigate"
      class="inline-flex items-center justify-center p-0.5 overflow-hidden font-medium text-gray-900 rounded-lg bg-gradient-to-br from-green-400 to-blue-600 group group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800"
    >
      <span
        class="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
      >
        <slot />
      </span>
    </a>
  </RouterLink>
</template>
