<template>
  <div id="app">
    <div v-if="loading">loading...</div>
    <router-link to="/app1">app1</router-link>
    <router-link to="/app2">app2</router-link>
    <div id="subapp-viewport"></div>
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  props: {
    loading: Boolean,
  }
}
</script>
