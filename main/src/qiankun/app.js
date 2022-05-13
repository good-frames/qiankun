// 子应用列表
export const APPS = [
  {
    name: 'app1',
    entry: 'http://localhost:7100/',
    container: '#subapp-viewport',
    activeRule: '/app1'
  },
  {
    name: 'app2',
    entry: 'http://localhost:7200/',
    container: '#subapp-viewport',
    activeRule: '/app2'
  },
]

// 默认首次进入子应用
export const DEFAULT_APP = '/app1'
