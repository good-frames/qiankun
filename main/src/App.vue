<template>
  <div id="app">
    <Header></Header>
    <div v-if="loading">loading...</div>
    <router-link to="/app1">app1</router-link>
    <router-link to="/app2">app2</router-link>
    <div id="subapp-viewport"></div>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'App',
  components: {
    Header
  },
  props: {
    loading: Boolean,
  }
}
</script>
