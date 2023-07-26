import { api } from '@/lib/axios'

import type { CourseById, CourseFromList } from '@/interfaces'

export const getToken = async (): Promise<string> => {
  try {
    const resp = await api.get('/auth/anonymous?platform=subscriptions')
    return resp.data.token
  } catch (e) {
    return ''
  }
}

export const getPreviewCourses = async (): Promise<CourseFromList[]> => {
  try {
    const data = await api.get('/core/preview-courses')

    return data.data.courses
  } catch (e) {
    return []
  }
}

export const getCourse = async (id: string): Promise<Partial<CourseById>> => {
  try {
    const data = await api.get(`/core/preview-courses/${id}`)
    return data.data
  } catch (e) {
    return {}
  }
}
