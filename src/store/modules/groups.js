import uuidv4 from 'uuid/v4';

import { groupsTypes } from '../types';
import { setItem } from '../../utils/localstorage';

const groupsModule = {
  state: {
    groups: [{
      name: 'All',
      selected: true,
      id: uuidv4(),
    }],
  },
  getters: {
    getGroups: state => state.groups,
  },
  mutations: {
    [groupsTypes.SET_TODO_GROUPS](state, groups) {
      state.groups = groups;
    },
    [groupsTypes.CREATE_TODO_GROUP](state, name) {
      state.groups.push({
        selected: false,
        id: uuidv4(),
        name,
      });
      setItem(process.env.VUE_APP_LS_GROUPS_KEY, state.groups);
    },
    [groupsTypes.SELECT_TODO_GROUP](state, id) {
      const groupIdx = state.groups.findIndex(group => group.id === id);

      state.groups.splice(groupIdx, 1, {
        ...state.groups[groupIdx],
        selected: !state.groups[groupIdx].selected,
      });
    },
  },
  actions: {
    setTodoGroups({ commit }, groups) {
      if (groups) {
        commit(groupsTypes.SET_TODO_GROUPS, groups);
      }
    },
    createTodoGroup({ commit }, name) {
      commit(groupsTypes.CREATE_TODO_GROUP, name);
    },
    selectTodoGroup({ commit }, id) {
      commit(groupsTypes.SELECT_TODO_GROUP, id);
    },
  },
};

export default groupsModule;
