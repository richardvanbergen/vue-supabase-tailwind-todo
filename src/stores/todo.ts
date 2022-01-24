import { supabase } from '@/data/supabase'
import { defineStore } from 'pinia'

type Todo = {
  title: string
  description: string
}

export const useTodosStore = defineStore('todos', {
  state: () => ({
    todos: [] as Todo[],
  }),
  actions: {
    async fetchActiveTodos() {
      try {
        const response = await supabase.from('todos').select()
        if (response.data) {
          this.todos = response.data
        }
      } catch (error) {
        return error
      }
    },
  },
})
