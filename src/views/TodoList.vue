<script setup lang="ts">
import TodoItemPreview from '@/components/todos/TodoItemPreview.vue'
import TodoList from '@/components/todos/TodoList.vue'
import { Todo, useTodosStore } from '@/stores/todo'
// @ts-expect-error missing types for this lib
import PacmanLoader from 'vue-spinner/src/PacmanLoader.vue'
import { onBeforeUnmount, ref } from 'vue'

const loading = ref(false)
const todos = ref<Todo[]>([])
const todosStore = useTodosStore()

const fetchList = async () => {
  loading.value = true
  await todosStore.subscribeToActiveTodos()
  todos.value = todosStore.todos
  loading.value = false
}

fetchList()

onBeforeUnmount(() => {
  todosStore.unsubscribeFromActiveTodos()
})
</script>

<template>
  <TodoList>
    <PacmanLoader v-if="loading" />

    <TodoItemPreview :key="index" v-for="(item, index) in todos">
      <template #title>
        {{ item.title }}
      </template>

      <template #description>
        {{ item.description }}
      </template>
    </TodoItemPreview>
  </TodoList>
</template>
