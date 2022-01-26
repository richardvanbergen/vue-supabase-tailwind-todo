<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import FloatingContentBox from '@/components/FloatingContentBox.vue'
import TodoItemPreview from '@/components/todos/TodoItemPreview.vue'
import TodoList from '@/components/todos/TodoList.vue'
import { Todo, useTodosStore } from '@/stores/todo'
import ButtonPrimary from '@/components/ButtonPrimary.vue'
// @ts-expect-error missing types for this lib
import PacmanLoader from 'vue-spinner/src/PacmanLoader.vue'
import { onBeforeUnmount, ref } from 'vue'
import { supabase } from '@/data/supabase'

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
  <article class="flex flex-col w-[100%] md:w-[80%] max-w-4xl gap-8 m-auto">
    <div class="flex items-center justify-between">
      <Hero heading="🚀 Todos" />

      <ButtonPrimary to="/todo">Add New</ButtonPrimary>
    </div>

    <FloatingContentBox>
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
    </FloatingContentBox>
  </article>
</template>
