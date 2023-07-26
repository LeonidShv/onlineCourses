import { mount, shallowMount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useGlobalStore } from '@/stores/global'
import CoursesListView from './index.vue'
import { coursesList } from '@/constants/testMock'

describe('CoursesListView page', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('the required number of CoursesListView components were rendered properly if the correct data got into the store', async () => {
    const wrapper = shallowMount(CoursesListView)
    const globalStore = useGlobalStore()

    globalStore.setPaginatedCoursesLists(coursesList)
    globalStore.setCoursesLists(coursesList)
    const coursesListLength = globalStore.paginatedCoursesLists.length

    await wrapper.vm.$nextTick()

    expect(wrapper.findAll('[data-test="CourseView-Course"]')).toHaveLength(coursesListLength)
  })
})
