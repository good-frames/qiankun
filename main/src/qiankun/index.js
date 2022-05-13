import { registerMicroApps, setDefaultMountApp, initGlobalState, start } from 'qiankun'
import { APPS, DEFAULT_APP } from './app'

export function initRegisterMicroApps (loader) {
  const apps = APPS.map(app => {
    return {
      ...app,
      loader
    }
  })

  // 注册子应用
  registerMicroApps(
    apps,
    {
      // 挂载前回调
      beforeLoad: [
        app => {
          console.log('before load', app)
        }
      ],
      // 挂载后回调
      beforeMount: [
        app => {
          console.log('before mount', app)
        }
      ],
      // 卸载后回调
      afterUnmount: [
        app => {
          console.log('after unload', app)
        }
      ]
    }
  )

  // 设置默认应用
  setDefaultMountApp(DEFAULT_APP)

  start()
}

// 初始化共享数据
export function initState (data) {
  return initGlobalState(data)
}

// 初始化共享数据
export const actions = initState()

// 监听共享数据改变
// actions.onGlobalStateChange((state, prev) => {
//   console.log(state, prev)
// })

// 设置共享数据
export function setState (data) {
  actions.setGlobalState(data)
}
