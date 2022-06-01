<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
const origin = window.location.origin;
</script>

<template>
  <div>
    <button v-if="!isAuthenticated" @click="loginWithRedirect()">Log in</button>
    <button v-if="isAuthenticated" @click="logout({ returnTo: origin })">
      Log out
    </button>
  </div>
</template>

<style scoped>
button {
  margin: 30px 10px;
  padding: 2px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: gray;
  color: white;
}
</style>
