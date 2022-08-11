import type { Module } from 'vuex';
import type { RootState } from '../Store';
import type { Article } from '../../mock/mockArticle';
import { mockArticles } from '../../mock/mockArticle';

export type SearchModuleState = {
  searchItem: string;
  searchResults: Array<Article>;
};
const SearchModule: Module<SearchModuleState, RootState> = {
  namespaced: true,
  state: {
    searchItem: '',
    searchResults: [],
  },
  mutations: {
    setSearchItem: (state, payload) => {
      state.searchItem = payload;
    },
    setSearchResults: (state, payload) => {
      state.searchResults = payload;
    },
  },
  actions: {
    setSearchResults: ({ state, commit }) => {
      const searchResults = mockArticles.filter((x) => {
        const searchItem = state.searchItem;
        return (
          x.title.includes(searchItem) ||
          x.body.includes(searchItem) ||
          x.author.name.includes(searchItem)
        );
      });
      commit('setSearchResults', searchResults);
    },
  },
};

export default SearchModule;
