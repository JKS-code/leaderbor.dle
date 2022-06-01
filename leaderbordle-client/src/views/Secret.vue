<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
const { loginWithRedirect, logout } = useAuth0();
</script>

<template>
  <div>
    <img src="../assets/munchy-man.gif" alt="" />
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

img {
  height: 400px;
  width: 400px;
  margin: auto;
}
</style>
