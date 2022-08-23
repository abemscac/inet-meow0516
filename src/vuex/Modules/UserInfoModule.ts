import type { Module } from 'vuex';
import type { RootState } from '../Store';

type UserInfo = {
  username: string;
  avatar: string;
};

export type UserInfoModuleState = {
  isLogin: boolean;
  userInfo: UserInfo;
};
const UserInfoModule: Module<UserInfoModuleState, RootState> = {
  namespaced: true,
  state: {
    isLogin: true,
    userInfo: {
      username: 'TW no.1',
      avatar: new URL('../../assets/default-avatar_1.png', import.meta.url)
        .href,
    },
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
