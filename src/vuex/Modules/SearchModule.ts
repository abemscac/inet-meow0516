import type { Module } from 'vuex';
import type { RootState } from '../Store';

export type SearchModuleState = {
  searchItem: string;
};
const SearchModule: Module<SearchModuleState, RootState> = {
  namespaced: true,
  state: {
    searchItem: '',
  },
  mutations: {
    setSearchItem: (state, payload) => {
      state.searchItem = payload;
    },
  },
  actions: {},
};

export default SearchModule;
