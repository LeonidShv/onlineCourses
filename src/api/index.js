import { api } from '../lib/axios'

export const requestSubscriptions = async () => {
  try {
    const data = await api.get('/auth/anonymous?platform=subscriptions')
    return data
  } catch (e) {
    return null
  }
}

export const requestPreviewCourses = async () => {
  try {
    const data = await api.get('/preview-courses')
    return data
  } catch (e) {
    return null
  }
}
