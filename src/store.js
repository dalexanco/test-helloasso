import Vue from 'vue'
import Vuex from 'vuex'
import * as ApiClient from './api_calls'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const mutations = {
  setOrganisms (state, list) {
    state.organisms = list
  }
}

const actions = {
  fetchOrganisms ({ commit }) {
    return ApiClient.fetchOrganisms(1, 20)
      .then(({ resources }) => {
        commit('setOrganisms', resources)
      })
      .catch(console.log)
  }
}

export default new Vuex.Store({
  actions,
  mutations,
  state: {
    organisms: []
  },
  strict: debug
})
