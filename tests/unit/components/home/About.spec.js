import { shallowMount } from '@vue/test-utils'
import About from '@/components/home/About.vue'

describe('About.vue', () => {
  it('renders ', () => {
    const urlStarWars = 'https://teste.com'

    const wrapper = shallowMount(About)
    wrapper.setData({
      urlStarWars
    })

    expect(wrapper.find('a').attributes('href')).toMatch(urlStarWars)
    expect(wrapper.find('.starWars').exists()).toBe(true)
  })
})
