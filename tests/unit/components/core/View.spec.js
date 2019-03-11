import Vue from 'vue'
import Vuetify from 'vuetify'
import { shallowMount } from '@vue/test-utils'
import View from '@/components/core/View.vue'
import { createRouter } from '@/router'

describe('View.vue', () => {
  const router = createRouter()

  Vue.use(Vuetify)
  Vue.use(router)

  it('renders ', () => {
    const wrapper = shallowMount(View)

    expect(wrapper.find('router-view-stub').exists()).toBe(true)
  })
})
