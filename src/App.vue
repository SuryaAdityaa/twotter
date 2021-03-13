<template>
  <div id="app">
    <UserProfile/>
  </div>
</template>

<script>

import UserProfile from "./components/UserProfile";

export default {
  name: 'App',
  components: { UserProfile },
}
</script>

<style>
* {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  background-color: #f1f1f1;
  height: 100vh;
}
</style>
