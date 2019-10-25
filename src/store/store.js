import Vue from 'vue';
import Vuex from 'vuex';

import labelsModule from './modules/labels';
import todosModule from './modules/todos';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    labelsModule,
    todosModule,
  },
});
