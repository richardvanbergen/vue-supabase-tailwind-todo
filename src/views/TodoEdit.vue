<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import FloatingContentBox from '@/components/FloatingContentBox.vue'
import ErrorNotification from '@/components/ErrorNotification.vue'
import TodoItemEditForm from '@/components/todos/TodoItemEditForm.vue'
</script>

<script lang="ts">
export default {
  data() {
    return {
      loading: false,
      error: '',
    }
  },
  methods: {},
}
</script>

<template>
  <article class="flex flex-col w-screen max-w-4xl gap-8 m-auto">
    <div class="flex items-center justify-between">
      <Hero heading="🚀 Create New" />
    </div>

    <FloatingContentBox>
      <ErrorNotification v-if="error">
        {{ error }}
      </ErrorNotification>

      <PulseLoader v-if="loading" />

      <TodoItemEditForm />
    </FloatingContentBox>
  </article>
</template>
