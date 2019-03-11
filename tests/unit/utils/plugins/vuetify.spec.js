import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Vuetify from 'vuetify'

describe('Teste Page About', function () {
  Vue.use(Vuetify)

  const wrapper = mount(Vue.component('VuetifyPluginTeste', {
    template: `
      <v-app dark>
        <h1 color="red">Hello World</h1>
        <v-icon x-large class="red--text">warning</v-icon>
      </v-app>
    `
  }))

  it('should be load vuetify', () => {
    expect(wrapper.find('#app').exists()).toBe(true)
    expect(wrapper.find('.application').find('.theme--dark').exists()).toBe(true)
    expect(wrapper.find('.v-icon').html()).toContain('material-icons')
  })
})
