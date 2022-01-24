<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import ContentWrapper from '@/components/ContentWrapper.vue'
import TodoListItem from '@/components/todos/TodoListItem.vue'
import TodoList from '@/components/todos/TodoList.vue'
import { useTodosStore } from '@/stores/todo'
</script>

<script lang="ts">
export default {
  data() {
    return {
      items: [] as { title: string; description: string }[],
    }
  },
  async created() {
    const todosStore = useTodosStore()
    const result = await todosStore.fetchActiveTodos()
    console.log(result)
    this.items = todosStore.todos
  },
}
</script>

<template>
  <Hero heading="You did it!" />

  <ContentWrapper>
    <TodoList>
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
