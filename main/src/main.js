import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { initRegisterMicroApps } from '@/qiankun'

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

initRegisterMicroApps(loader)
