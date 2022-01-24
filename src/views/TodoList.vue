<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import ContentWrapper from '@/components/ContentWrapper.vue'
import TodoListItem from '@/components/todos/TodoListItem.vue'
import TodoList from '@/components/todos/TodoList.vue'
import { useTodosStore } from '@/stores/todo'
import ErrorNotification from '@/components/ErrorNotification.vue'
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
  <Hero heading="You did it!" />

  <ContentWrapper>
    <TodoList>
      <ErrorNotification v-if="error">
        {{ error }}
        <button
          class="bg-red-700 text-white py-1 px-4 rounded-sm"
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
  </ContentWrapper>
</template>
