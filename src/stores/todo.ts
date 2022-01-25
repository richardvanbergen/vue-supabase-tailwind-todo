import { supabase } from '@/data/supabase'
import { PostgrestResponse } from '@supabase/supabase-js'
import { defineStore } from 'pinia'

export type Todo = {
  title: string | null
  description: string | null
}

export const useTodosStore = defineStore('todos', {
  state: () => ({
    todos: [] as Todo[],
  }),
  actions: {
    async fetchActiveTodos(): Promise<PostgrestResponse<Todo>> {
      const response = await supabase.from('todos').select().order('created_at')
      if (response.data) {
        this.todos = response.data
      }

      return response
    },
    async createTodo(
      title: string,
      description: string
    ): Promise<PostgrestResponse<Todo>> {
      const response = await supabase.from('todos').insert([
        {
          title,
          description,
        },
      ])

      if (response.status === 201) {
        this.todos = [{ title, description }, ...this.todos]
      }

      return response
    },
  },
})
