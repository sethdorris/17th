import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  user: {

  },
  isLoggedIn: false
}

const getters = {
  getUser: function () {
    return state.user;
  },
  isLoggedIn: function () {
    return state.isLoggedIn;
  }
}

const mutations = {
  setLoginData: function(state, { user }) {
    state.user = user;
    state.isLoggedIn = true;
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations
})
