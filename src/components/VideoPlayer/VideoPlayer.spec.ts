import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BasePlayer from './BasePlayer.vue'

describe('BasePlayer', () => {
  it('Does BasePlayer component mount properly?', async () => {
    const props = {
      previewImageLink: '',
      link: '',
      progress: 0
    }

    const wrapper = mount(BasePlayer, {
      props
    })

    expect(wrapper.exists()).toBe(true)
  }),
    it('Does emit on BasePlayer component work properly?', async () => {
      const props = {
        previewImageLink: '',
        link: '',
        progress: 0
      }

      const wrapper = mount(BasePlayer, {
        props
      })

      await wrapper.trigger('pause')
      await wrapper.vm.$nextTick()
      expect(wrapper.emitted()).toHaveProperty('pause')
    })
})
