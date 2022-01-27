<script setup lang="ts">
import FloatingContentBox from '@/components/FloatingContentBox.vue'
import { Todo, useTodosStore } from '@/stores/todo'
import { RouterView } from 'vue-router'
import { onBeforeUnmount, ref, Transition } from 'vue'

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
    <div class="flex items-center justify-between empty:hidden">
      <RouterView name="todoNavigation" />
    </div>

    <FloatingContentBox>
      <RouterView v-slot="{ Component }">
        <Transition type="transition" name="slide-fade" mode="out-in">
          <component :is="Component"></component>
        </Transition>
      </RouterView>
    </FloatingContentBox>
  </article>
</template>

<style scoped>
/* .slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
} */
</style>
