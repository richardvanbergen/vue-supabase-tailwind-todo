<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import FloatingContentBox from '@/components/FloatingContentBox.vue'
import { Todo, useTodosStore } from '@/stores/todo'
import { RouterView } from 'vue-router'
import { onBeforeUnmount, ref } from 'vue'
import ButtonPrimary from '@/components/ButtonPrimary.vue'

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

      <ButtonPrimary :to="{ name: 'todo-item-create' }">Add New</ButtonPrimary>
    </div>

    <FloatingContentBox>
      <RouterView />
    </FloatingContentBox>
  </article>
</template>
