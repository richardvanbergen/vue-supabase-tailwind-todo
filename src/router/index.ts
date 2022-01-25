import { createRouter, createWebHistory } from 'vue-router'
import TodoList from '../views/TodoList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'todo-list',
      component: TodoList,
    },
    {
      path: '/todo/:id',
      name: 'todo-item',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TodoEdit.vue'),
    },
  ],
})

export default router
