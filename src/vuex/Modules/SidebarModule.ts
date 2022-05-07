import type { Module } from 'vuex';
import type { RootState } from '../Store';

export type SidebarModuleState = {
  sidebarVisible: boolean;
};
const SidebarModule: Module<SidebarModuleState, RootState> = {
  namespaced: true,
  state: {
    sidebarVisible: false,
  },
  mutations: {
    toggle: (state) => {
      state.sidebarVisible = !state.sidebarVisible;
    },
    close: (state) => {
      state.sidebarVisible = false;
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

export default SidebarModule;
