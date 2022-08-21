import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App exists', () => {
  it('App should exists', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.exists()).toBe(true)
  })
})
