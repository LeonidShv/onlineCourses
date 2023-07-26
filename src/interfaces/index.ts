interface CourseBase {
  id: string
  title: string
  tags: string[]
  launchDate: string
  status: string
  description: string
  duration: number
  previewImageLink: string
  rating: number
  meta: Meta
  containsLockedLessons: boolean
}

interface Meta {
  slug: string
  skills: string[]
  courseVideoPreview: {
    link: string
    duration: number
    previewImageLink: string
  }
}

interface Lesson {
  id: string
  title: string
  duration: number
  order: number
  type: string
  status: string
  link: string
  previewImageLink: string
  meta: null
}

export interface CourseById extends CourseBase {
  lessons: Lesson[]
}

export interface ExtendedCourseById extends CourseBase {
  lessons: ExtendedLesson[]
}

export interface ExtendedLesson extends Lesson {
  progress: number
  completed: boolean
}

export interface CourseFromList extends CourseBase {
  lessonsCount: number
}
