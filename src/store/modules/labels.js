import uuidv4 from 'uuid/v4';

import { labelsTypes } from '../types';

const colors = ['red', 'green', 'blue', 'yellow', 'orange'];

const labelsModule = {
  state: {
    labels: colors.map(color => ({
      text: '',
      id: uuidv4(),
      color,
    })),
    colors,
  },
  getters: {
    getLabels: state => state.labels,
    getLabel: state => id => state.labels.find(label => label.id === id),
    getColors: state => state.colors,
  },
  mutations: {
    [labelsTypes.ADD_LABEL](state, labelText) {
      const label = {
        text: labelText,
        color: 'blue',
        id: uuidv4(),
      };

      state.labels.push(label);
    },
    [labelsTypes.DELETE_LABEL](state, labelId) {
      const withoutDeleted = state.labels.filter(label => label.id !== labelId);

      state.labels = withoutDeleted;
    },
    [labelsTypes.MODIFY_LABEL](state, modifiedLabel) {
      const modifiedIdx = state.labels.findIndex(label => label.id === modifiedLabel.id);

      state.labels.splice(modifiedIdx, 1, {
        ...state.labels[modifiedIdx],
        ...modifiedLabel,
      });
    },
  },
  actions: {
    createLabel({ commit }, labelText) {
      commit(labelsTypes.ADD_LABEL, labelText);
    },
    deleteLabel({ commit, dispatch, state }, labelId) {
      commit(labelsTypes.DELETE_LABEL, labelId);

      dispatch('deleteNonExistingLabelIds', state.labels);
    },
    modifyLabel({ commit }, modifiedLabelData) {
      commit(labelsTypes.MODIFY_LABEL, modifiedLabelData);
    },
  },
};

export default labelsModule;
