import uuidv4 from 'uuid/v4';

import { notificationTypes } from '../types';

const notificationModule = {
  state: {
    notifications: [],
  },
  getters: {
    getNotifications: state => state.notifications,
  },
  mutations: {
    [notificationTypes.SHOW_NOTIFICATION](state, notification) {
      state.notifications.push(notification);
    },
    [notificationTypes.HIDE_NOTIFICATION](state, id) {
      state.notifications = state.notifications.filter(n => n.id !== id);
    },
  },
  actions: {
    showNotification({ commit, state }, { text, head, isSuccess }) {
      const data = {
        id: uuidv4(),
        text,
        head,
        isSuccess,
      };

      if (state.notifications.length > 2) {
        commit(notificationTypes.HIDE_NOTIFICATION, state.notifications[0].id);
      }

      commit(notificationTypes.SHOW_NOTIFICATION, data);

      setTimeout(() => {
        commit(notificationTypes.HIDE_NOTIFICATION, data.id);
      }, 6000);
    },
    hideNotification({ commit }, id) {
      commit(notificationTypes.HIDE_NOTIFICATION, id);
    },
  },
};

export default notificationModule;
