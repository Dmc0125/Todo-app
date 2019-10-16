import Vue from 'vue';
import Router from 'vue-router';
import Todos from './views/Todos.vue';

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Todos,
    },
    {
      path: '/create-todo',
      name: 'createTodo',
      component: () => import('./views/CreateTodo.vue'),
    },
    {
      path: '/create-labels',
      name: 'createLabels',
      component: () => import('./views/CreateLabels.vue'),
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
