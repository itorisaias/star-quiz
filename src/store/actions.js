export default {
  createStore ({ commit, state }, people) {
    const newPeopleList = [...state.peopleList, ...people]
    commit('setPeopleList', newPeopleList)
  }
}
