import { mount, createLocalVue } from '@vue/test-utils'

import moment from '@/utils/filters/moment'

describe('Test Filter moment', function () {
  const localVue = createLocalVue()

  localVue.filter('moment', moment)
  const dateOfBorn = new Date(1996, 4, 24)
  const componentMoment = localVue.component('moment', {
    template: `
      <div>
        <h1 id="day">{{ dateOfBorn | moment('D') }}</h1>
        <h1 id="dateFull">{{ dateOfBorn | moment('LL') }}</h1>
      </div>
    `,
    data: () => ({
      dateOfBorn
    })
  })
  const wrapper = mount(componentMoment)

  it('should be format date with filter', () => {
    expect(+wrapper.find('#day').text()).toEqual(24)
    expect(wrapper.find('#dateFull').text()).toEqual('24 de Maio de 1996')
  })
})
