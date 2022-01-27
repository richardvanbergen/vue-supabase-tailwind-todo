import { createRouter, createWebHistory } from 'vue-router'
import AppRoot from '../views/AppRoot.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppRoot,
    },
    {
      path: '/todo',
      component: () => import('../views/TodoPage.vue'),
      children: [
        {
          path: '',
          name: 'todo-list',
          component: () => import('../views/TodoList.vue'),
        },
        {
          path: 'create',
          name: 'todo-item-create',
          component: () => import('../views/TodoEdit.vue'),
        },
        {
          path: ':id',
          name: 'todo-item-edit',
          component: () => import('../views/TodoEdit.vue'),
        },
      ],
    },
  ],
})

export default router
