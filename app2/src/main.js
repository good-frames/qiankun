import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router'

Vue.config.productionTip = false
Vue.use(VueRouter)

let router = null
let instance = null

function render (props = {}) {
  const { container } = props
  router = new VueRouter({
    mode: 'history',
    base: window.__POWERED_BY_QIANKUN__ ? '/app2' : '/',
    routes
  })

  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap () {}

export async function mount (props) {
  console.log('app2.localStorage', localStorage.getItem('user'))
  props.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log('app2.onGlobalStateChange', state, prev)
  })
  // props.setGlobalState({
  //   hhh: '123'
  // })
  render(props)
}

export async function unmount (props) {
  instance.$destroy()
  instance = null
  router = null
}
