import uuidv4 from 'uuid/v4';

import { labelsTypes } from '../types';
import { setItem, addItem } from '../../utils/localstorage';

const colors = ['red', 'green', 'blue', 'yellow', 'orange'];

const labelsModule = {
  state: {
    labels: [],
    colors,
  },
  getters: {
    getLabels: state => state.labels,
    getLabel: state => id => state.labels.find(label => label.id === id),
    getColors: state => state.colors,
  },
  mutations: {
    [labelsTypes.SET_LABELS](state, labels) {
      state.labels = labels;
    },
    [labelsTypes.CREATE_LABEL](state, labelText) {
      const label = {
        text: labelText,
        color: 'blue',
        id: uuidv4(),
      };

      state.labels.push(label);
      addItem(process.env.VUE_APP_LS_LABELS_KEY, label);
    },
    [labelsTypes.DELETE_LABEL](state, labelId) {
      const withoutDeleted = state.labels.filter(label => label.id !== labelId);

      state.labels = withoutDeleted;
      setItem(process.env.VUE_APP_LS_LABELS_KEY, withoutDeleted);
    },
    [labelsTypes.MODIFY_LABEL](state, modifiedLabel) {
      const modifiedIdx = state.labels.findIndex(label => label.id === modifiedLabel.id);

      state.labels.splice(modifiedIdx, 1, {
        ...state.labels[modifiedIdx],
        ...modifiedLabel,
      });

      setItem(process.env.VUE_APP_LS_LABELS_KEY, state.labels);
    },
  },
  actions: {
    setLabels({ commit, state }, labels) {
      if (labels) {
        commit(labelsTypes.SET_LABELS, labels);
        return;
      }

      const defaultLabels = state.colors.map(color => ({
        text: '',
        id: uuidv4(),
        color,
      }));

      commit(labelsTypes.SET_LABELS, defaultLabels);

      setItem(process.env.VUE_APP_LS_LABELS_KEY, defaultLabels);
    },
    createLabel({ commit }, labelText) {
      commit(labelsTypes.CREATE_LABEL, labelText);
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
