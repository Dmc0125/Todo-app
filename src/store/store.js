import Vue from 'vue';
import Vuex from 'vuex';

import labelsModule from './modules/labels';
import todosModule from './modules/todos';
import modalModule from './modules/modal';
import notificationsModule from './modules/notifications';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    labelsModule,
    todosModule,
    modalModule,
    notificationsModule,
  },
});
