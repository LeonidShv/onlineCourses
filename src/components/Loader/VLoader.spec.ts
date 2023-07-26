import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VLoader from './VLoader.vue'

describe('VLoader', () => {
  it('Does VLoader component mount properly?', () => {
    const props = {
      value: true
    }

    const wrapper = mount(VLoader, {
      props
    })

    expect(wrapper.exists()).toBe(true)
  })
})
