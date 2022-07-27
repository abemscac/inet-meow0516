import type { Module } from 'vuex';
import type { RootState } from '../Store';

export type UserInfoModuleState = {
  isLogin: boolean;
};
const UserInfoModule: Module<UserInfoModuleState, RootState> = {
  namespaced: true,
  state: {
    isLogin: false,
  },
  mutations: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    },
  },
  actions: {},
};

export default UserInfoModule;
