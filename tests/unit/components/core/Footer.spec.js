import Vue from 'vue'
import Vuetify from 'vuetify'
import { shallowMount } from '@vue/test-utils'
import Footer from '@/components/core/Footer.vue'

describe('Footer.vue', () => {
  Vue.use(Vuetify)

  it('renders ', () => {
    const urlProfile = 'https://teste.com'
    const wrapper = shallowMount(Footer)

    wrapper.setData({
      urlProfile
    })

    expect(wrapper.find('a').attributes('href')).toMatch(urlProfile)
  })
})
