import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { registerMicroApps, setDefaultMountApp, initGlobalState, start } from 'qiankun'

Vue.config.productionTip = false

let app = null

function render ({ loading }) {
  if (!app) {
    app = new Vue({
      router,
      data () {
        return {
          loading
        }
      },
      render (h) {
        return h(App, {
          props: {
            loading: this.loading,
          }
        })
      }
    }).$mount('#app')
  } else {
    app.loading = loading
  }
}

render({ loading: true })

const loader = loading => render({ loading })

registerMicroApps(
  [
    {
      name: 'app1',
      entry: '//192.168.31.112:7100/',
      container: '#subapp-viewport',
      loader,
      activeRule: '/app1'
    },
    {
      name: 'app2',
      entry: '//192.168.31.112:7200/',
      container: '#subapp-viewport',
      loader,
      activeRule: '/app2'
    },
  ],
  {
    beforeLoad: [
      app => {
        console.log('before load', app)
      }
    ], // 挂载前回调
    beforeMount: [
      app => {
        console.log('before mount', app)
      }
    ], // 挂载后回调
    afterUnmount: [
      app => {
        console.log('after unload', app)
      }
    ] // 卸载后回调
  }
)

setDefaultMountApp('/app1')

const actions = initGlobalState({
  hhh: 'hello world'
})

// actions.onGlobalStateChange((state, prev) => {
//   console.log(state, prev)
// })

setTimeout(() => {
  actions.setGlobalState({
    hhh: 'yyyy'
  })
}, 5000)

start()
