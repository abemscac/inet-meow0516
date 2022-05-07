import { createStore } from 'vuex';
import SidebarModule, { SidebarModuleState } from './Modules/SidebarModule';

export type RootState = {
  sidebarModule: SidebarModuleState;
};

const store = createStore({
  modules: {
    sidebarModule: SidebarModule,
  },
});

export default store;
