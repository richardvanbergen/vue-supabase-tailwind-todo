<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import ContentWrapper from '@/components/ContentWrapper.vue'
import TodoListItem from '@/components/todos/TodoListItem.vue'
import TodoList from '@/components/todos/TodoList.vue'
</script>

<script lang="ts">
export default {
  data() {
    return {
      items: [
        { title: 'one', description: 'Lorem Ipsum' },
        { title: 'two', description: 'Lorem Ipsum' },
        { title: 'three', description: 'Lorem Ipsum' },
      ],
    }
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
