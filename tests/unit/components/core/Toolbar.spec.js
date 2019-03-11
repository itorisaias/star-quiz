import Vue from 'vue'
import Vuetify from 'vuetify'
import { shallowMount } from '@vue/test-utils'
import Toolbar from '@/components/core/Toolbar.vue'

describe('Toolbar.vue', () => {
  Vue.use(Vuetify)

  it('renders ', () => {
    const urlRepository = 'https://teste.com'
    const title = 'Teste ToolBar'

    const wrapper = shallowMount(Toolbar)
    wrapper.setData({
      urlRepository,
      title
    })

    expect(wrapper.find('.starWars-2').text()).toMatch(title)
    expect(wrapper.find('a').attributes('href')).toMatch(urlRepository)
  })
})
