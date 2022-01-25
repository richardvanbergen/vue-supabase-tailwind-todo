<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import FloatingContentBox from '@/components/FloatingContentBox.vue'
import TodoListItem from '@/components/todos/TodoListItem.vue'
import TodoList from '@/components/todos/TodoList.vue'
import { useTodosStore } from '@/stores/todo'
import ErrorNotification from '@/components/ErrorNotification.vue'
import ButtonPrimary from '@/components/ButtonPrimary.vue'
</script>

<script lang="ts">
export default {
  data() {
    return {
      loading: false,
      error: '',
      items: [] as { title: string; description: string }[],
    }
  },
  async created() {
    await this.fetchList()
  },
  methods: {
    async fetchList() {
      this.loading = true
      const todosStore = useTodosStore()
      try {
        const response = await todosStore.fetchActiveTodos()
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
      <Hero heading="🚀 Todos" />

      <ButtonPrimary>Add New</ButtonPrimary>
    </div>

    <FloatingContentBox>
      <TodoList>
        <ErrorNotification v-if="error">
          {{ error }}
          <button
            class="px-4 py-1 text-white bg-red-700 rounded-sm"
            v-on:click.prevent="fetchList"
          >
            Retry
          </button>
        </ErrorNotification>

        <TodoListItem :key="index" v-for="(item, index) in items">
          <template #title>
            {{ item.title }}
          </template>

          <template #description>
            {{ item.description }}
          </template>
        </TodoListItem>
      </TodoList>
    </FloatingContentBox>
  </article>
</template>
