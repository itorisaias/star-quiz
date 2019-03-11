import * as _ from 'lodash'

const state = {
  plays: []
}

const mutations = {
  setPlays: (state, payload) => (state.plays = payload)
}

const actions = {
  recorderPlay ({ commit, state }, { totalPoints, countOfQuestion, email, username }) {
    const newPlay = { totalPoints, countOfQuestion, email, username }
    localStorage.removeItem('plays')
    localStorage.setItem('plays', JSON.stringify([ ...state.plays, newPlay ]))
    commit('setPlays', [ ...state.plays, newPlay ])
  }
}

const getters = {
  plays: (state) => {
    const plays = [ ...state.plays ]

    return _.sortBy(plays, ['totalPoints', 'countOfQuestion']).reverse()
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
