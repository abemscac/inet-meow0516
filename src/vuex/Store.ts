import { createStore } from 'vuex';
import SidebarModule, { SidebarModuleState } from './Modules/SidebarModule';
import UserboxModule, { UserboxModuleState } from './Modules/UserboxModule';
import UserInfoModule, { UserInfoModuleState } from './Modules/UserInfoModule';

export type RootState = {
  sidebarModule: SidebarModuleState;
  userboxModule: UserboxModuleState;
  userInfoModule: UserInfoModuleState;
};

const store = createStore({
  modules: {
    sidebarModule: SidebarModule,
    userboxModule: UserboxModule,
    userInfoModule: UserInfoModule,
  },
});

export default store;
