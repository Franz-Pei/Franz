import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuthenticated: false,
    user: null
  },
  mutations: {
    setAuthentication(state, status) {
      state.isAuthenticated = status
    },
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    login({ commit }, user) {
      let responses = {}
      let userList = JSON.parse(localStorage.getItem('userList'))
      let data = userList.filter((item) => item.username == user.username)
      console.log(data, 'data')
      if (data.length > 0) {
        let pass = data[0].password
        let id = data[0].id
        if (user.password == pass) {
          // Simulate login
          commit('setAuthentication', true)
          commit('setUser', user)
          sessionStorage.setItem('id',id)
          responses = {
            code: 200,
            data: {
              token: 'abc12fghH234'
            },
            msg: 'Login Success'
          }
          return responses
        } else {
          responses = {
            code: 6000,
            data: null,
            msg: 'Login Failed'
          }
          return responses
        }
      } else {
        responses = {
          code: 6000,
          data: null,
          msg: 'Login Failed'
        }
        return responses
      }
      // if (user.username == username && user.password == password) {

      // } else {

      // }
    },
    logout({ commit }) {
      commit('setAuthentication', false)
      commit('setUser', null)
      sessionStorage.removeItem('token')
      // Assume router is being handled outside, e.g., in component
    }
  }
})
