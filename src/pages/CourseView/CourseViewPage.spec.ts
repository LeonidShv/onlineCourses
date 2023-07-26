import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import CourseView from './index.vue'
import { coursDataMock } from '@/constants/testMock'

describe('CourseView page', () => {
  it('the required number of LessonNavItem components were rendered properly if the correct data got into data courseResponsed', async () => {
    const wrapper: any = shallowMount(CourseView)
    wrapper.vm.courseResponsed = coursDataMock
    const courseLessonsLength = coursDataMock.lessons.length

    await wrapper.vm.$nextTick()

    expect(wrapper.findAll('[data-test="CourseView-LessonNavItem"]')).toHaveLength(
      courseLessonsLength
    )
  })
})
