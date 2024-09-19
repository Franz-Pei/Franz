import { createStore } from 'vuex';
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getIdTokenResult } from "firebase/auth";

export default createStore({
  state: {
    isAuthenticated: false,
    user: null,  // 用户信息
    role: null,  // 用户角色
  },
  mutations: {
    setAuthentication(state, status) {
      state.isAuthenticated = status;
    },
    setUser(state, user) {
      state.user = user;
    },
    setRole(state, role) {
      state.role = role;
    },
  },
  actions: {
    // 使用 Firebase 登录验证
    async login({ commit }, { email, password }) {
      const auth = getAuth();
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // 获取用户的 ID Token，并通过 token 来识别用户角色
        const tokenResult = await getIdTokenResult(user);
        const role = tokenResult.claims.role || 'user';  // 默认角色为 'user'

        // 更新 Vuex 状态
        commit('setAuthentication', true);
        commit('setUser', user);
        commit('setRole', role);

        // 存储 token 和 role 到 sessionStorage
        sessionStorage.setItem('token', user.accessToken);
        sessionStorage.setItem('role', role);

        return {
          code: 200,
          data: {
            token: user.accessToken
          },
          msg: "Login Success"
        };
      } catch (error) {
        console.error('Login Error:', error);
        return {
          code: 6000,
          data: null,
          msg: "Login Failed"
        };
      }
    },

    // 登出操作
    async logout({ commit }) {
      const auth = getAuth();
      try {
        await signOut(auth);
        commit('setAuthentication', false);
        commit('setUser', null);
        commit('setRole', null);

        // 清除 sessionStorage
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('role');

        return {
          code: 200,
          msg: "Logout Success"
        };
      } catch (error) {
        console.error('Logout Error:', error);
        return {
          code: 6001,
          msg: "Logout Failed"
        };
      }
    }
  },
});