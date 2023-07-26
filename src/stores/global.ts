import { defineStore } from 'pinia'
import type { CourseFromList, CourseById } from '@/interfaces'

interface RootState {
  isDarkTheme: boolean
  coursesLists: CourseFromList[]
  paginatedCoursesLists: CourseFromList[]
  course: CourseById | {}
}

export const useGlobalStore = defineStore('global', {
  state: () =>
    ({
      isDarkTheme: false,
      coursesLists: [],
      paginatedCoursesLists: [],
      course: {}
    } as RootState),
  getters: {},
  actions: {
    toggleDarkTheme() {
      this.isDarkTheme = !this.isDarkTheme
    },
    setCoursesLists(coursesLists: CourseFromList[]) {
      this.coursesLists = coursesLists
    },
    setCourse(course: CourseById) {
      this.course = course
    },
    setPaginatedCoursesLists(paginatedCoursesLists: CourseFromList[]) {
      this.paginatedCoursesLists = paginatedCoursesLists
    }
  }
})
