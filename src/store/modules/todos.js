import uuidv4 from 'uuid/v4';

import { todosTypes } from '../types';
import { addItem, setItem } from '../../utils/localstorage';

const todosModule = {
  state: {
    todos: [],
  },
  getters: {
    getTodos: state => state.todos,
    getTodo: state => id => state.todos.find(todo => todo.id === id),
  },
  mutations: {
    [todosTypes.SET_TODOS](state, todos) {
      state.todos = todos;
    },
    [todosTypes.CREATE_TODO](state, todo) {
      const newTodo = {
        ...todo,
        isDone: false,
        id: uuidv4(),
      };

      state.todos.push(newTodo);
      addItem(process.env.VUE_APP_LS_TODOS_KEY, newTodo);
    },
    [todosTypes.TOGGLE_TODO_DONE](state, todoId) {
      const changedIdx = state.todos.findIndex(todo => todo.id === todoId);

      state.todos.splice(changedIdx, 1, {
        ...state.todos[changedIdx],
        isDone: !state.todos[changedIdx].isDone,
      });
      setItem(process.env.VUE_APP_LS_TODOS_KEY, state.todos);
    },
    [todosTypes.DELETE_TODO](state, todoId) {
      const deleted = state.todos.filter(todo => todo.id !== todoId);

      state.todos = deleted;
      setItem(process.env.VUE_APP_LS_TODOS_KEY, deleted);
    },
    [todosTypes.MODIFY_TODO_LABELS](state, { id, labelId }) {
      const todoIdx = state.todos.findIndex(todo => todo.id === id);

      if (state.todos[todoIdx].labels.includes(labelId)) {
        state.todos.splice(todoIdx, 1, {
          ...state.todos[todoIdx],
          labels: state.todos[todoIdx].labels.filter(label => label !== labelId),
        });
        return;
      }

      state.todos[todoIdx].labels.push(labelId);
      setItem(process.env.VUE_APP_LS_TODOS_KEY, state.todos);
    },
    [todosTypes.DELETE_NON_EXISTING_LABEL_IDS](state, filtered) {
      state.todos = state.todos.map(todo => ({
        ...todo,
        labels: todo.labels.filter(label => filtered.includes(label)),
      }));
      setItem(process.env.VUE_APP_LS_TODOS_KEY, state.todos);
    },
  },
  actions: {
    setTodos({ commit }, todos) {
      if (todos) {
        commit(todosTypes.SET_TODOS, todos);
      }
    },
    createTodo({ commit }, todo) {
      commit(todosTypes.CREATE_TODO, todo);
    },
    toggleTodoDone({ commit }, todoId) {
      commit(todosTypes.TOGGLE_TODO_DONE, todoId);
    },
    deleteTodo({ commit }, todoId) {
      commit(todosTypes.DELETE_TODO, todoId);
    },
    modifyTodoLabels({ commit }, data) {
      commit(todosTypes.MODIFY_TODO_LABELS, data);
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
