<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import FloatingContentBox from '@/components/FloatingContentBox.vue'
import ErrorNotification from '@/components/ErrorNotification.vue'
import TodoItemEditForm from '@/components/todos/TodoItemEditForm.vue'
import { Todo, useTodosStore } from '@/stores/todo'
// @ts-expect-error missing types
import PacmanLoader from 'vue-spinner/src/PacmanLoader.vue'
import router from '@/router'
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
    async createNewTodoItem(data: Todo) {
      this.loading = true
      const todosStore = useTodosStore()
      const response = await todosStore.createTodo(data.title, data.description)

      if (response.error) {
        this.error = `${response.error.code}: ${response.error.message}`
      }

      this.loading = false
      router.push('/')
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

      <PacmanLoader v-if="loading" />
      <TodoItemEditForm v-else :submit-handler="createNewTodoItem" />
    </FloatingContentBox>
  </article>
</template>
