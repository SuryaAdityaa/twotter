<template>
  <div id="app">
    <nav>
      <router-link to="/">
        <div class="navigation__logo">Twotter</div>
      </router-link>
      <div class="navigation__user" v-if="user"> @{{ user.username }} </div>
    </nav>
    <router-view />
  </div>
</template>

<script>

import {useStore} from 'vuex';
import {computed} from 'vue';

export default {
  name: "App",
  setup() {
    const store = useStore();
    const user = computed(() => store.state.User.user);

    return {
      user
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

nav {
  background-color: #2B806F;
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  font-weight: bold;

  a {
    font-weight: bold;


    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .navigation__logo {
    font-size: 18px;
    color: #fff;
  }
  .navigation__user {
    font-size: 15px;
    color: #fff;
  }
}
</style>
