import Vue from 'vue';
import Vuex from 'vuex';

import labels from './modules/labels';
import todos from './modules/todos';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    labels,
    todos,
  },
});
