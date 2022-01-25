<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import FloatingContentBox from '@/components/FloatingContentBox.vue'
import ErrorNotification from '@/components/ErrorNotification.vue'
import TodoItemEditForm from '@/components/todos/TodoItemEditForm.vue'
import { useTodosStore } from '@/stores/todo'
</script>

<script lang="ts">
export default {
  data() {
    return {
      loading: false,
      error: '',
    }
  },
  methods: {
    async createNewTodoItem(data: FormData) {
      this.loading = true
      const todosStore = useTodosStore()
      try {
        const response = await todosStore.createTodo(
          data.get('title'),
          data.get('description')
        )
        if (response.status === 200 || response.status === 201) {
          this.items = todosStore.todos
        } else {
          this.error = `${response.status}: ${response.statusText}`
        }
      } catch (error) {
        if (typeof error === 'string') {
          this.error = error
        }
      }
      this.loading = false
    },
  },
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

      <TodoItemEditForm submit-handler="" />
    </FloatingContentBox>
  </article>
</template>
