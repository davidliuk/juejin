<template>
  <div id="app">
    <MyTopNav></MyTopNav>
    <router-view></router-view>
  </div>
</template>

<script>
import MyTopNav from './components/navigation/TopNavigationBar.vue';

export default {
  name: 'App',
  components: {
    MyTopNav
  }
}
</script>

<style>
* {
  margin: 0;
}

body {
  background-color: #f4f5f5;
}
</style>
