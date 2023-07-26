import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VInput from './VInput.vue'

describe('VInput', () => {
  it('Does VInput component mount properly?', () => {
    const props = {
      label: 'test label',
      type: 'textarea',
      placeholder: 'test placeholder'
    }

    const wrapper = mount(VInput, {
      props
    })

    expect(wrapper.exists()).toBe(true)
  })
})
