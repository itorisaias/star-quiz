const state = {
  time: 0,
  timeId: null
}

const mutations = {
  setTime: (state, payload) => (state.time = payload),
  setTimeId: (state, payload) => (state.timeId = payload)
}

const actions = {
  startQuiz ({ commit }) {
    // TODO: logica do boot do quiz
  },
  bootTime ({ commit }, { time, timeId }) {
    commit('setTime', time)
    commit('setTimeId', timeId)
  },
  finishQuiz ({ state, commit }) {
    clearInterval(state.timeId)
    commit('setTimeId', null)
    // TODO: logica de finalização
  }
}

const getters = {
  time: state => state.time
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
