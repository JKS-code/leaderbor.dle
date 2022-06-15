<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import WorldleForm from "../components/WorldleForm.vue";
import WordleForm from '../components/WordleForm.vue';
import HeardleForm from '../components/HeardleForm.vue';
import FramedForm from '../components/FramedForm.vue';
import {useStore} from 'vuex';
import { computed } from "@vue/reactivity";

const { user, isAuthenticated } = useAuth0();
const store = useStore();

const readyForSubmit = computed(() => {
  //todo: elaborate
  console.log("hmm");
  console.log(store.state.wordleAnswerText);
  return store.state.wordleAnswerText.length > 0;
});

const submit = (value: string) => { 
    console.log(value);
    const wordleAnswerText = store.state.wordleAnswerText;
    console.log(wordleAnswerText);
}

const value: string = "test";

</script>

<template>
  <h1>Play Page</h1>
  <p>Maybe protected in the future</p>
  <WorldleForm />
  <WordleForm />
  <HeardleForm />
  <FramedForm />
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4" :class="readyForSubmit && 'rounded bg-red-500'" :disabled="!readyForSubmit" @click="submit(value)">Copy & Submit Scores</button>
</template>
<style scoped>
h1 {
  font-size: 30px;
  margin: 20px;
}
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
