const state = () => ({
  user: null
})

const mutations = {
  setUser (state, user) {
    state.user = user
  }
}

const actions = {
  loginUser ({ commit }, user) {
    commit('setUser', user)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
