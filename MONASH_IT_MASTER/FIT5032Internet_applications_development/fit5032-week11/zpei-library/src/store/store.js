import { createStore } from 'vuex';

export default createStore({
  state: {
    isAuthenticated: false,
    user: null,
  },
  mutations: {
    setAuthentication(state, status) {
      state.isAuthenticated = status;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    login({ commit }, user) {
      const username = "admin";
      const password = "abc12fghH234";
      let responses = {
       
      }
      if(user.username == username && user.password == password) {
          // Simulate login
        commit('setAuthentication', true);
        commit('setUser', user);
        responses = {
          code: 200,
          data: {
            token: "abc12fghH234"
          },
          msg: "Login Success"
        }
        return responses
      } else {
        responses = {
          code: 6000,
          data: null,
          msg: "Login Failed"
        }
        return responses
      }
    },
    logout({ commit }) {
      commit('setAuthentication', false);
      commit('setUser', null);
      sessionStorage.removeItem("token")
      // Assume router is being handled outside, e.g., in component
    },
  },
});