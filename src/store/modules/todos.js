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
    [todosTypes.TOGGLE_TODO_DONE](state, todoId) {
      const changedIdx = state.todos.findIndex(todo => todo.id === todoId);

      state.todos.splice(changedIdx, 1, {
        ...state.todos[changedIdx],
        isDone: !state.todos[changedIdx].isDone,
      });
    },
    [todosTypes.DELETE_TODO](state, todoId) {
      const deleted = state.todos.filter(todo => todo.id !== todoId);

      state.todos = deleted;
    },
  },
  actions: {
    createTodo({ commit }, todo) {
      commit(todosTypes.CREATE_TODO, todo);
    },
    toggleTodoDone({ commit }, todoId) {
      commit(todosTypes.TOGGLE_TODO_DONE, todoId);
    },
    deleteTodo({ commit }, todoId) {
      commit(todosTypes.DELETE_TODO, todoId);
    },
  },
};

export default todosModule;
