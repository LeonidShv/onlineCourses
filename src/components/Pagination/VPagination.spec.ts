import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VPagination from './VPagination.vue'

describe('VPagination', () => {
  it('Does VPagination component mount properly?', () => {
    const props = {
      max: 6,
      maxPages: 10
    }

    const wrapper = mount(VPagination, {
      props
    })

    expect(wrapper.exists()).toBe(true)
  })
})
