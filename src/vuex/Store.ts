import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import SearchModule, { SearchModuleState } from './Modules/SearchModule';
import SidebarModule, { SidebarModuleState } from './Modules/SidebarModule';
import UserboxModule, { UserboxModuleState } from './Modules/UserboxModule';
import UserInfoModule, { UserInfoModuleState } from './Modules/UserInfoModule';

export type RootState = {
  searchModule: SearchModuleState;
  sidebarModule: SidebarModuleState;
  userboxModule: UserboxModuleState;
  userInfoModule: UserInfoModuleState;
};

export const storeKey: InjectionKey<Store<RootState>> = Symbol();

export const useStore = (): Store<RootState> => baseUseStore(storeKey);

const store = createStore({
  modules: {
    searchModule: SearchModule,
    sidebarModule: SidebarModule,
    userboxModule: UserboxModule,
    userInfoModule: UserInfoModule,
  },
});

export default store;
