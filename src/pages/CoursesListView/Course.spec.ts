import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Course from './Course.vue'

describe('Course', () => {
  it('Does Course component mount properly?', async () => {
    const props = {
      title: 'Title',
      lessonsCount: 5,
      skills: () => ['a1', 'a2', 'b1'],
      rating: 4,
      description: 'description description description description',
      previewImageLink: `https://wisey.app/assets/images/web/course-covers/the-power-of-self-discipline-how-to-stay-on-track`,
      courseVideoPreview: () => ({
        link: `https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/preview/AppleHLS1/preview.m3u8`,
        duration: 27,
        previewImageLink:
          'https://wisey.app/assets/images/web/course-covers/lack-of-motivation-how-to-overcome-it/preview'
      }),
      id: '12sd'
    }

    const wrapper = mount(Course, {
      props
    })

    expect(wrapper.exists()).toBe(true)
  })
})
