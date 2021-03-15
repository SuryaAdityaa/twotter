<template>
  <div id="app">
    <nav>
      <router-link to="/">
        <div class="navigation__logo">Twotter</div>
      </router-link>
      <div class="navigation__user">{{ state.user.username }}</div>
    </nav>
    <router-view />
  </div>
</template>

<script>

import {reactive} from 'vue';

export default {
  name: "App",
  setup() {
    const state = reactive({
      user: {
        username: '@suryaaditya'
      }
    })

    return {
      state
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f1f1f1;
  min-height: 100vh;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
