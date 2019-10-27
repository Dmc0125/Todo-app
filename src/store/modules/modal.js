import { modalTypes } from '../types';

const modalModule = {
  state: {
    showModal: false,
  },
  getters: {
    getModalState: state => state.showModal,
  },
  mutations: {
    [modalTypes.SHOW_MODAL](state) {
      state.showModal = true;
    },
    [modalTypes.HIDE_MODAL](state) {
      state.showModal = false;
    },
  },
  actions: {
    showModal({ commit }) {
      commit(modalTypes.SHOW_MODAL);
    },
    hideModal({ commit }) {
      commit(modalTypes.HIDE_MODAL);
    },
  },
};

export default modalModule;
