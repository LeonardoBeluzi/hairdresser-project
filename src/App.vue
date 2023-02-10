<script lang="ts">
import './app.css'
import TopNavigationBar from './components/navigation/TopNavigationBar.vue'
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'App',
  components: {
    TopNavigationBar,
    Calendar
}
}
import vue from 'vue'
import Calendar from './components/calendar/Calendar.vue'
</script>

<template data-theme="main_theme">
  <div id="app">
    <TopNavigationBar></TopNavigationBar>
  </div>
  <router-view />
</template>
