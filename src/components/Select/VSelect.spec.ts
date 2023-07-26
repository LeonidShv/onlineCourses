import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VSelect from './VSelect.vue'

describe('VSelect', () => {
  it('Does VSelect component mount properly?', () => {
    const props = {
      options: ['test1', 'test2'],
      label: 'test label'
    }

    const wrapper = mount(VSelect, {
      props
    })

    expect(wrapper.exists()).toBe(true)
  })
})
