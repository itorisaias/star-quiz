import Vue from 'vue'
import Vuetify from 'vuetify'
import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'
import '@/utils/plugins/base'

describe('Home.vue', () => {
  Vue.use(Vuetify)

  it('renders ', () => {
    const fn = jest.fn()

    shallowMount(Home, {
      methods: {
        getUrlImgRandon: fn
      }
    })

    expect(fn).toBeCalled()
  })
})
