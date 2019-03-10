const state = {
  characters: [],
  character: {},
  countCharacter: 12
}

const mutations = {
  setCharacters: (state, payload) => (state.characters = payload),
  setCharacter: (state, payload) => (state.character = payload),
  setCountCharacter: (state, payload) => (state.countCharacter = payload)
}

const actions = {
  loadCharacters ({ commit, dispatch, state }, page = 1) {
    const url = `https://swapi.co/api/people/?page=${page}`
    window.axios
      .get(url)
      .then(response => response.data)
      .then((peoples) => {
        commit('setCharacters', [...state.characters, ...peoples.results])
        commit('setCountCharacter', peoples.count)

        if (peoples.next) {
          dispatch('loadCharacters', peoples.next.split('=')[1])
        }
      }).catch((err) => {
        console.log(err)
      })
  },
  getCharacters ({ commit }, url) {
    window.axios
      .get(url)
      .then((response) => response.data)
      .then((characters) => {
        commit('setCharacters', [...state.characters, ...characters.results])
        commit('setCountCharacter', characters.count)
      }).catch((err) => {
        console.log(err)
      })
  },
  showDetail ({ commit }, character) {
    commit('setCharacter', character)
    // TODO: OPEN MODAL
  },
  closeDetail ({ commit }) {
    commit('setCharacter', null)
    // TODO: CLOSE MODAL
  },
  response ({ commit }, { character, answer }) {
    if (character.name === answer) {
      console.log('ESTA CORRETO')
    } else {
      console.log('ESTA INCORRETO')
    }
  }
}

const getters = {
  countCharacter: state => state.countCharacter,
  character: state => state.character,
  characters: state => {
    return state.characters.slice(0, 8)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
