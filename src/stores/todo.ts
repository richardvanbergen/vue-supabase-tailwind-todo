import { supabase } from '@/data/supabase'
import { PostgrestResponse, RealtimeSubscription } from '@supabase/supabase-js'
import { defineStore } from 'pinia'

export type Todo = {
  id: number
  title: string
  description: string
  created_at: string
}

let realtimeSubscription: RealtimeSubscription | null = null

export const useTodosStore = defineStore('todos', {
  state: () => ({
    todos: [] as Todo[],
  }),
  actions: {
    async subscribeToActiveTodos(): Promise<PostgrestResponse<Todo>> {
      const response = await supabase
        .from('todos')
        .select()
        .order('created_at', { ascending: false })

      if (response.data) {
        this.todos = response.data
      }

      realtimeSubscription = supabase
        .from('todos')
        .on('*', (message) => {
          if (message.eventType === 'INSERT' && message.new) {
            this.$patch((state) => {
              state.todos.unshift(message.new)
            })
          }
        })
        .subscribe()

      return response
    },
    unsubscribeFromActiveTodos() {
      if (realtimeSubscription) {
        supabase.removeSubscription(realtimeSubscription)
      }
    },
    async createTodo(
      title: string,
      description: string
    ): Promise<PostgrestResponse<Todo>> {
      return await supabase.from<Todo>('todos').insert({
        title,
        description,
      })
    },
  },
})
