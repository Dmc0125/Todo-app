import uuidv4 from 'uuid/v4';

import { todosTypes } from '../types';

const todosModule = {
  state: {
    todos: [],
  },
  getters: {
    getTodos: state => state.todos,
  },
  mutations: {
    [todosTypes.CREATE_TODO](state, todo) {
      const newTodo = {
        ...todo,
        isDone: false,
        id: uuidv4(),
      };

      state.todos.push(newTodo);
    },
  },
  actions: {
    createTodo({ commit }, todo) {
      commit(todosTypes.CREATE_TODO, todo);
    },
  },
};

export default todosModule;
