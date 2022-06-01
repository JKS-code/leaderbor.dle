<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
const { user, isAuthenticated } = useAuth0();
</script>

<template>
  <h1>Home Page</h1>
  <pre v-if="isAuthenticated">
    <h2> User Info (teehee)</h2>
    <code>{{ user }}</code>
  </pre>
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
