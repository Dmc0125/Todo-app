import { modalTypes } from '../types';

const modalModule = {
  state: {
    showModal: false,
    modalData: null,
  },
  getters: {
    getModalState: state => state.showModal,
    getModalData: state => state.modalData,
  },
  mutations: {
    [modalTypes.SHOW_MODAL](state, data) {
      state.showModal = true;

      if (data) {
        state.modalData = data;
      }
    },
    [modalTypes.HIDE_MODAL](state) {
      state.showModal = false;
      state.modalData = null;
    },
  },
  actions: {
    showModal({ commit }, data) {
      commit(modalTypes.SHOW_MODAL, data);
    },
    hideModal({ commit }) {
      commit(modalTypes.HIDE_MODAL);
    },
  },
};

export default modalModule;
