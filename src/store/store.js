import Vue from 'vue';
import Vuex from 'vuex';

import createTodo from './modules/labels';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    createTodo,
  },
});
