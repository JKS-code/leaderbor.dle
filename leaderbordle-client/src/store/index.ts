import { createStore } from "vuex";

const state = {
  wordleAnswerText: "",
  heardleAnswerText: "",
  worldleAnswerText: "",
  framedAnswerText: ""
}

const mutations = {
  updateWordleText(state: any, text: string) {
    state.wordleAnswerText = text;
  }
}

export default createStore({
  state: state,
  getters: {},
  mutations: mutations,
  actions: {},
  modules: {},
});
