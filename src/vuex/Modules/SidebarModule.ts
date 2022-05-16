import type { Module } from 'vuex';
import type { RootState } from '../Store';

export type SidebarModuleState = {
  visible: boolean;
};
const SidebarModule: Module<SidebarModuleState, RootState> = {
  namespaced: true,
  state: {
    visible: false,
  },
  mutations: {
    toggle: (state) => {
      state.visible = !state.visible;
    },
    close: (state) => {
      state.visible = false;
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
