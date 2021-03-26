import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    keywords: "",
    id: 0,
    getAjaxData: 0,
  },
  mutations: {
    refreshKeywords(state, payload) {
      state.keywords = payload.keywords;
    },
    refreshId(state, payload) {
      state.id = payload.id;
    },
    catchAjaxData(state) {
      state.getAjaxData += 1;
    },
  },
  actions: {},
  modules: {},
});
