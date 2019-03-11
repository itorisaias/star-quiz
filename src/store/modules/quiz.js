const state = {
  time: 0,
  timeId: null,
  questions: [],
  modalPersonHelp: null,
  pagination: {
    page: 0,
    limit: 0
  },
  finalResult: {
    totalPoints: 0,
    countOfQuestion: 0
  }
}

const mutations = {
  setTime: (state, payload) => (state.time = payload),
  setTimeId: (state, payload) => (state.timeId = payload),
  setQuestions: (state, payload) => (state.questions = payload),
  setPagination: (state, payload) => (state.pagination = payload),
  setModalPersonHelp: (state, payload) => (state.modalPersonHelp = payload),
  setFinalResult: (state, payload) => (state.finalResult = payload)
}

const actions = {
  startQuiz ({ commit, rootState }) {
    const peopleJson = require('@/data/people.json')
    const {
      people,
      films,
      species,
      starships,
      vehicles,
      planets
    } = rootState
    const points = 10
    const answer = null
    const rightAnswer = null

    commit('setQuestions', people.map(person => {
      let urlImg = peopleJson.find(personJson => personJson.name === person.name)

      const newfilms = person.films.map((personfilm) => films.find((film) => film.url === personfilm))
      const newspecies = person.species.map((personspecie) => species.find((specie) => specie.url === personspecie))
      const newstarships = person.starships.map((personstarship) => starships.find((starship) => starship.url === personstarship))
      const newvehicles = person.vehicles.map((personvehicle) => vehicles.find((vehicle) => vehicle.url === personvehicle))
      const newhomeworld = planets.find((planet) => planet.url === person.homeworld).name

      if (urlImg) {
        urlImg = require(`@/assets/images/people/${urlImg.pathImg}`)
      } else {
        console.warn('URL IMG NOT FOUNT FOR PERSON:', person.name)
      }

      return ({
        ...person,
        points,
        answer,
        urlImg,
        rightAnswer,
        films: newfilms,
        species: newspecies,
        starships: newstarships,
        vehicles: newvehicles,
        homeworld: newhomeworld
      })
    }))
    commit('setModalPersonHelp', null)
    commit('setPagination', { page: 1, limit: 8 })
  },
  bootTime ({ commit }, { time, timeId }) {
    commit('setTime', time)
    commit('setTimeId', timeId)
  },
  finishQuiz ({ state, commit }) {
    clearInterval(state.timeId)
    const questionsAnsweredCorrectly = state.questions.filter(question => question.rightAnswer)
    const totalPoints = questionsAnsweredCorrectly.reduce((total, current) => (total + (+current.points)), 0)

    commit('setFinalResult', {
      totalPoints,
      countOfQuestion: questionsAnsweredCorrectly.length
    })
    commit('setTimeId', null)
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
  },
  response ({ commit, state }, { answer, person }) {
    commit('setQuestions', state.questions.map(question => {
      if (question.name === person.name) {
        question = { ...question, answer }

        if (!answer) {
          question = { ...question, rightAnswer: null }
        } else if (answer.toLowerCase().trim() === person.name.toLowerCase()) {
          question = { ...question, rightAnswer: true }
        } else {
          question = { ...question, rightAnswer: false }
        }
      }
      return { ...question }
    }))
  }
}

const getters = {
  time: (state) => (state.time),
  pagination: (state) => (state.pagination),
  modalPersonHelp: (state) => (state.modalPersonHelp),
  finalResult: (state) => (state.finalResult),
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
