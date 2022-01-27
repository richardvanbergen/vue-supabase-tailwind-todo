<script setup lang="ts">
import TodoItemEditForm from '@/components/todos/TodoItemEditForm.vue'
import { Todo, useTodosStore } from '@/stores/todo'
// @ts-expect-error missing types
import PacmanLoader from 'vue-spinner/src/PacmanLoader.vue'
// @ts-expect-error missing types
import { notify } from 'notiwind'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const loading = ref(false)
const router = useRouter()

async function createNewTodoItem(data: Todo) {
  loading.value = true
  const todosStore = useTodosStore()
  const response = await todosStore.createTodo(data.title, data.description)
  loading.value = false

  if (response.error) {
    notify({
      group: 'error',
      title: 'Error creating new TODO.',
      text: `${response.error.code}: ${response.error.message}`,
    })
  } else {
    notify({
      group: 'success',
      title: 'Created',
      text: 'New todo item created',
    })

    router.push({
      name: 'todo-list',
    })
  }
}
</script>

<template>
  <PacmanLoader v-if="loading" />
  <TodoItemEditForm v-else :submit-handler="createNewTodoItem" />
</template>
