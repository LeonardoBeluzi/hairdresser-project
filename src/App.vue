<script setup lang="ts">
import Home from "./views/Home.vue";
</script>

<template data-theme="main_theme">
  <div id="app">
    <Home msg="Hello Vue 3 + TypeScript + Vite" />
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
