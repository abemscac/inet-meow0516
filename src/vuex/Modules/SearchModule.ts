import type { Module } from 'vuex';
import type { RootState } from '../Store';
import type { Article } from '../../mock/mockArticle';
import { mockArticles } from '../../mock/mockArticle';

export type SearchModuleState = {
  results: Array<Article>;
};

const SearchModule: Module<SearchModuleState, RootState> = {
  namespaced: true,
  state: {
    results: [],
  },
  mutations: {
    setResults: (state, payload) => {
      state.results = payload;
    },
  },
  actions: {
    search: ({ commit }, keyword: string) => {
      const loweredKeyword = keyword.toLowerCase();
      const results = mockArticles.filter((x) => {
        return (
          x.title.toLowerCase().includes(loweredKeyword) ||
          x.body.toLowerCase().includes(loweredKeyword) ||
          x.author.name.toLowerCase().includes(loweredKeyword)
        );
      });
      commit('setResults', results);
    },
  },
};

export default SearchModule;
