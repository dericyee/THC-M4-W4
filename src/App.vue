<template>
  <div id="app">
    <h1>Vue Router Example</h1>
    <nav-bar></nav-bar>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
// import <NAME> from <WHERE>
import NavigationBar from "./components/NavigationBar";

export default {
  components: {
    "nav-bar": NavigationBar
  }
};
</script>