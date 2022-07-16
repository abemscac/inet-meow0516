import type { Module } from 'vuex';
import type { RootState } from '../Store';

export type UserInfoModuleState = {
  isLogin: boolean;
};
const UserInfoModule: Module<UserInfoModuleState, RootState> = {
  namespaced: false,
  state: {
    isLogin: false,
  },
  mutations: {},
  actions: {},
};

export default UserInfoModule;
