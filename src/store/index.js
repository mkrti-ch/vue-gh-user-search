import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    user: null,
    error: null,
  },
  getters: {
    loading(state) {
      return state.loading;
    },
    user(state) {
      return state.user;
    },
    error(state) {
      return state.error;
    },
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
  },
  actions: {
    async fetchUser({ commit }, payload) {
      commit('setLoading', true);
      try {
        setTimeout(async () => {
          const response = await fetch(`https://api.github.com/users/${payload}`);
          const data = await response.json();

          commit('setUser', data);
          commit('setLoading', false);
        }, 1500);
      } catch (error) {
        commit('setError', error);
        commit('setLoading', false);
      }
    },
  },
  modules: {
  },
});
