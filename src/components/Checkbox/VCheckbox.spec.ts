import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VCheckbox from './VCheckbox.vue'

describe('VCheckbox', () => {
  it('Does VCheckbox component mount properly?', () => {
    const props = {
      label: 'test label'
    }

    const wrapper = mount(VCheckbox, {
      props
    })

    expect(wrapper.exists()).toBe(true)
  })
})
