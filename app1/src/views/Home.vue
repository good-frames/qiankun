<template>
  <div class="home">
    <span>{{ user }}</span>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapState('user', {
      user: state => state.user
    })
  }
}
</script>
