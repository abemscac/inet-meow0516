import { createStore } from 'vuex';
import SidebarModule, { SidebarModuleState } from './Modules/SidebarModule';
import UserboxModule, { UserboxModuleState } from './Modules/UserboxModule';

export type RootState = {
  sidebarModule: SidebarModuleState;
  userboxModule: UserboxModuleState;
};

const store = createStore({
  modules: {
    sidebarModule: SidebarModule,
    userboxModule: UserboxModule,
  },
});

export default store;
