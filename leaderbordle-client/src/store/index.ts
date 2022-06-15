import { createStore } from "vuex";

const state = {
  wordleNumGuesses: null
}

const mutations = {
  updateWordleNumGuesses(state: any, numGuesses: number) {
    console.log("updating?");
    state.wordleNumGuesses = numGuesses;
  }
}

export default createStore({
  state: state,
  getters: {},
  mutations: mutations,
  actions: {},
  modules: {},
});
