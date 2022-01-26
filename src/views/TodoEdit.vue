<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import FloatingContentBox from '@/components/FloatingContentBox.vue'
import TodoItemEditForm from '@/components/todos/TodoItemEditForm.vue'
import { Todo, useTodosStore } from '@/stores/todo'
// @ts-expect-error missing types
import PacmanLoader from 'vue-spinner/src/PacmanLoader.vue'
// @ts-expect-error missing types
import { notify } from 'notiwind'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const loading = ref(false)
const error = ref('')
const router = useRouter()

async function createNewTodoItem(data: Todo) {
  loading.value = true
  const todosStore = useTodosStore()
  const response = await todosStore.createTodo(data.title, data.description)

  if (response.error) {
    error.value = `${response.error.code}: ${response.error.message}`
  }

  loading.value = false

  notify({
    group: 'success',
    title: 'Created',
    text: 'New todo item created',
  })

  router.push({
    name: 'todo-list',
  })
}
</script>

<template>
  <article class="flex flex-col w-[100%] md:w-[80%] max-w-4xl gap-8 m-auto">
    <div class="flex items-center justify-between">
      <Hero heading="🚀 Create New" />
    </div>

    <FloatingContentBox>
      <PacmanLoader v-if="loading" />
      <TodoItemEditForm v-else :submit-handler="createNewTodoItem" />
    </FloatingContentBox>
  </article>
</template>
