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
      component: () => import('../views/todo/TodoPage.vue'),
      children: [
        {
          path: '',
          name: 'todo-list',
          components: {
            default: () => import('../views/todo/TodoList.vue'),
            todoNavigation: () => import('../views/todo/TodoListNav.vue'),
          },
        },
        {
          path: 'create',
          name: 'todo-item-create',
          components: {
            default: () => import('../views/todo/TodoEdit.vue'),
            todoNavigation: () => import('../views/todo/TodoEditNav.vue'),
          },
        },
        {
          path: ':id',
          name: 'todo-item-edit',
          component: () => import('../views/todo/TodoEdit.vue'),
        },
      ],
    },
  ],
})

export default router
