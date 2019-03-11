import Vue from 'vue'
import Vuetify from 'vuetify'
import { shallowMount } from '@vue/test-utils'
import Rules from '@/components/home/Rules.vue'

describe('Rules.vue', () => {
  Vue.use(Vuetify)

  it('renders ', () => {
    const rules = ['123', '321']

    const wrapper = shallowMount(Rules)
    wrapper.setData({
      rules
    })

    expect(wrapper.findAll('strong').length).toBe(rules.length)
  })
})
