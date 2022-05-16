import type { Module } from 'vuex';
import type { RootState } from '../Store';

export type UserboxModuleState = {
  menuVisible: boolean;
};
const UserboxModule: Module<UserboxModuleState, RootState> = {
  namespaced: true,
  state: {
    menuVisible: false,
  },
  mutations: {
    toggle: (state) => {
      state.menuVisible = !state.menuVisible;
    },
    close: (state) => {
      state.menuVisible = false;
    },
  },
  actions: {
    toggle: ({ commit }) => {
      commit('toggle');
    },
    close: ({ commit }) => {
      commit('close');
    },
  },
};

export default UserboxModule;
