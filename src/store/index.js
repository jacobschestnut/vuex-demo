import { createStore } from 'vuex'

export default createStore({
  state: {
    currentUser: {
      name: 'John Doe',
      email: 'john.doe@gmail.com'
    }
  },
  mutations: {
    updateUser(state, userData) {
      state.currentUser = {
        name: userData.name,
        email: userData.email
      }
    }
  },
  actions: {
    updateUser({ commit }, userData) {
      commit('updateUser', userData)
    }
  },
  getters: {
    currentUser(state) {
      return state.currentUser
    }
  },
  modules: {}
})
