import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import actions from './actions'
import getters from './getters'
import plugins from './plugins'
import modules from './modules'
import mutations from './mutations'

Vue.use(Vuex)

export const createStore = function () {
  return new Vuex.Store({
    state,
    actions,
    getters,
    plugins,
    modules,
    mutations,
    strict: process.env.NODE_ENV !== 'production'
  })
}
