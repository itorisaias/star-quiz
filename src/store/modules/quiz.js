const state = {
  time: 0,
  timeId: null,
  questions: [],
  modalPersonHelp: null,
  pagination: {
    page: 0,
    limit: 0
  }
}

const mutations = {
  setTime: (state, payload) => (state.time = payload),
  setTimeId: (state, payload) => (state.timeId = payload),
  setQuestions: (state, payload) => (state.questions = payload),
  setPagination: (state, payload) => (state.pagination = payload),
  setModalPersonHelp: (state, payload) => (state.modalPersonHelp = payload)
}
const actions = {
  startQuiz ({ commit, rootState }) {
    const peopleJson = require('@/data/people.json')
    const { peopleList } = rootState
    const points = 10
    const answer = null
    const rightAnswer = null

    commit('setQuestions', peopleList.map(person => {
      let urlImg = peopleJson.find(personJson => personJson.name === person.name)

      if (urlImg) {
        urlImg = require(`@/assets/characters/${urlImg.pathImg}`)
      } else {
        console.log(person.name)
      }

      return ({ ...person, points, answer, urlImg, rightAnswer })
    }))
    commit('setPagination', { page: 1, limit: 8 })
  },
  bootTime ({ commit }, { time, timeId }) {
    commit('setTime', time)
    commit('setTimeId', timeId)
  },
  finishQuiz ({ state, commit }) {
    clearInterval(state.timeId)
    commit('setTimeId', null)
    // TODO: logica de finalização
  },
  paginationQuestion ({ commit }, { page = 1, limit = 8 }) {
    commit('setPagination', { page, limit })
  },
  showDetail ({ commit, state }, person) {
    commit('setModalPersonHelp', person)

    commit('setQuestions', state.questions.map(question => {
      if (question.name === person.name) {
        return { ...question, points: 5 }
      }

      return { ...question }
    }))
  },
  closeDetail ({ commit }) {
    commit('setModalPersonHelp', null)
  }
}

const getters = {
  time: (state) => (state.time),
  pagination: (state) => (state.pagination),
  modalPersonHelp: (state) => (state.modalPersonHelp),
  questions: (state) => {
    const { page, limit } = state.pagination

    const end = page * limit
    const start = end - limit

    return state.questions.slice(start, end)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
