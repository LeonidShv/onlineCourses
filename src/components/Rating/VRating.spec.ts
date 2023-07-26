import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VRating from './VRating.vue'

describe('VRating', () => {
  it('Does VRating component mount properly?', () => {
    const wrapper = mount(VRating)

    expect(wrapper.exists()).toBe(true)
  })
})
