import { supabase } from '@/data/supabase'
import { PostgrestResponse } from '@supabase/supabase-js'
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
    async fetchActiveTodos(): Promise<PostgrestResponse<Todo>> {
      const response = await supabase.from('todos').select()
      if (response.data) {
        this.todos = response.data
      }

      return response
    },
  },
})
