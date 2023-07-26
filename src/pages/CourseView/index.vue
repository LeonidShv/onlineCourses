<template>
  <section class="course">
    <h2>{{ pageTitle }}</h2>
    <div class="course-wrapper">
      <div class="course-videoWrapper">
        <VideoPlayer
          type="default"
          @pause="processPause"
          previewImageLink="https://www.gstatic.com/webp/gallery/1.sm.webp"
          link="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8"
          :progress="choosenLessson?.progress"
          :isMuted="false"
          :isControls="true"
          class="course-video"
        />

        <Chat />
      </div>
      <div class="course-listLessons">
        <VLoader :value="!courseResponsed?.lessons?.length" />
        <LessonNavItem
          v-for="{
            duration,
            order,
            status,
            title,
            id,
            completed
          } in courseResponsed?.lessons?.sort(compare)"
          :key="id"
          :duration="duration"
          :order="order"
          :status="status"
          :title="title"
          :id="id"
          :completed="completed"
          :choosenLesssonId="choosenLessson.id"
          @click="chooseLesson(id)"
          data-test="CourseView-LessonNavItem"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import type { Ref } from 'vue'
import { useRoute } from 'vue-router'

import { VideoPlayer } from 'vue-hls-video-player';

// import VideoPlayer from '@/components/VideoPlayer2/index.vue'
import Chat from './Chat.vue'
import LessonNavItem from './LessonNavItem.vue'
import VLoader from '@/components/Loader/VLoader.vue'

import { getCourse } from '@/server/api'

import type { CourseById, ExtendedLesson, ExtendedCourseById } from '@/interfaces'

const courseResponsed: Ref<ExtendedCourseById> = ref({} as ExtendedCourseById)
const choosenLessson: Ref<ExtendedLesson> = ref({} as ExtendedLesson)
const pageTitle = ref<string>('')

const idCourse = computed<string>(() => String(useRoute().params.id))

interface TupdateData {
  order: number
}

function compare<T extends TupdateData>(a: T, b: T) {
  if (a.order < b.order) {
    return -1
  }
  if (a.order > b.order) {
    return 1
  }
  return 0
}

onMounted(async () => {
  if (idCourse.value in localStorage) {
    const courseWithProgress: ExtendedCourseById = JSON.parse(
      localStorage.getItem(idCourse.value) || 'null'
    )
    updateData(courseWithProgress)
  } else {
    const course: CourseById = await getCourse(idCourse.value)

    const lessonsWithProgress: ExtendedLesson[] = course?.lessons.map((lesson) => ({
      ...lesson,
      progress: 0,
      completed: false
    }))

    const courseWithProgress: ExtendedCourseById = { ...course, lessons: lessonsWithProgress }
    localStorage.setItem(idCourse.value, JSON.stringify(courseWithProgress))
    updateData(courseWithProgress)
  }
})

function updateData(courseWithProgress: ExtendedCourseById) {
  courseResponsed.value = courseWithProgress
  choosenLessson.value = courseWithProgress?.lessons[0]
  pageTitle.value = courseWithProgress.title
}

function chooseLesson(id: string) {
  choosenLessson.value = courseResponsed.value?.lessons.find(
    (lesson) => lesson.id === id
  ) as ExtendedLesson
}

function processPause(progress: number) {
  choosenLessson.value.progress = progress

  if (progress >= choosenLessson.value.duration - 3) {
    // progress can change up and down, but completed cannot be marked as false [when rewinding, not to lose the progress of the lesson]
    choosenLessson.value.completed = true
  }

  const foundedIndex: number = courseResponsed.value?.lessons.findIndex(
    (lesson) => lesson.id == choosenLessson.value.id
  )
  courseResponsed.value.lessons[foundedIndex] = choosenLessson.value
  const id: string = idCourse.value

  localStorage.setItem(id, JSON.stringify(courseResponsed.value))
}
</script>

<style lang="scss" scoped>
.course {
  $titleHeight: 60px;

  &-wrapper {
    display: flex;
    justify-content: space-between;
  }

  &-videoWrapper {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &-video {
    width: 100%;
    height: 45%;
  }

  &-listLessons,
  &-videoWrapper {
    height: calc(
      100vh - var(--header-height) - var(--footer-height) - var(--section-padding-block) -
        $titleHeight
    );
  }

  &-listLessons {
    padding: 16px;
    width: 25%;
    overflow: auto;
    background: var(--bg-block);
  }
}
</style>
