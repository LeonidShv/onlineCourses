import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import LessonNavItem from './LessonNavItem.vue'

describe('LessonNavItem', () => {
  it('Has the LessonNavItem component been completed?', async () => {
    const props = {
      duration: 10,
      order: 1,
      status: '',
      title: 'Title dfsf',
      id: 'dsf234',
      completed: true,
      choosenLesssonId: '123'
    }

    const wrapper = mount(LessonNavItem, {
      props
    })

    expect(wrapper.get('[data-test="CourseView-LessonNavItem-title"]').classes()).toContain(
      'lessonNavItem-title--completed'
    )
  })

  it('Is the LessonNavItem component locked?', async () => {
    const props = {
      duration: 10,
      order: 1,
      status: 'locked',
      title: 'Title dfsf',
      id: 'dsf234',
      completed: false,
      choosenLesssonId: '123'
    }

    const wrapper = mount(LessonNavItem, {
      props
    })

    expect(wrapper.get('[data-test="CourseView-LessonNavItem-wrapper"]').classes()).toContain(
      'lessonNavItem--locked'
    )
  })

  it('Is the LessonNavItem component active?', async () => {
    const props = {
      duration: 10,
      order: 1,
      status: '',
      title: 'Title dfsf',
      id: '1111',
      completed: false,
      choosenLesssonId: '1111'
    }

    const wrapper = mount(LessonNavItem, {
      props
    })

    expect(wrapper.get('[data-test="CourseView-LessonNavItem-title"]').classes()).toContain(
      'lessonNavItem-title--active'
    )
  })
})
