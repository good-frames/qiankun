<template>
  <div>
    <span>{{ userInfo }}</span>
    <button @click="login">登录</button>
  </div>
</template>

<script>
import { setState } from '@/qiankun'
export default {
  name: '',
  data () {
    return {
      userInfo: null
    }
  },
  methods: {
    login () {
      this.userInfo = {
        name: 'dongdongjie',
        age: 27
      }
      window.localStorage.setItem('user', JSON.stringify(this.userInfo))
      setState(this.userInfo)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
