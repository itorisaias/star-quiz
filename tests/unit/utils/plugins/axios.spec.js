import { createLocalVue } from '@vue/test-utils'
import Plugin from '@/utils/plugins/axios'

describe('Teste plugin Axios', function () {
  const localVue = createLocalVue()
  localVue.use(Plugin)

  it('should be loading axios', () => {
    // expect(typeof localVue.axios).toBe('function')
    // expect(typeof window.axios).toBe('function')
  })
})
