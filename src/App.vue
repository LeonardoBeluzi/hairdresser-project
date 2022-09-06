<script lang="ts">
import './app.css'
import TopNavigationBar from './components/navigation/TopNavigationBar.vue'
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
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
  <router-view />
</template>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
}
</style>
