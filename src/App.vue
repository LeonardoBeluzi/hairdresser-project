<script lang="ts">
import './app.css'
import TopNavigationBar from '../src/components/TopNavigationBar.vue'
import { defineComponent } from 'vue'
export default {
  name: 'App',
  components: {
    TopNavigationBar
  }
}
import vue from 'vue'
</script>

<template data-theme="main_theme">
  <div id="app">
    <TopNavigationBar></TopNavigationBar>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
