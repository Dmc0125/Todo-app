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
    [todosTypes.DELETE_NON_EXISTING_LABEL_IDS](state, filtered) {
      state.todos = state.todos.map(todo => ({
        ...todo,
        labels: todo.labels.filter(label => filtered.includes(label)),
      }));
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
    deleteNonExistingLabelIds({ commit, state }, labels) {
      const unique = [
        ...new Set(state.todos.reduce((ids, todo) => [...ids, ...todo.labels], [])),
      ];

      const filtered = unique
        .filter(id => labels.findIndex(label => label.id === id) > -1);

      commit(todosTypes.DELETE_NON_EXISTING_LABEL_IDS, filtered);
    },
  },
};

export default todosModule;
