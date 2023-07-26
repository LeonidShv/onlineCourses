<template>
  <section>
    <div class="home-header">
      <h2>Courses</h2>

      <VSelect
        v-model="sortingOption"
        label="Sort by"
        :options="sortingOptions"
        class="input"
      />
    </div>

    <div class="home-coursesList">
      <VLoader :value="!useGlobalStore().coursesLists.length" />
      <Course
        v-for="{
          id,
          title,
          rating,
          lessonsCount,
          meta,
          description,
          previewImageLink
        } in useGlobalStore().paginatedCoursesLists"
        :key="id"
        :title="title"
        :rating="rating"
        :lessonsCount="lessonsCount"
        :skills="meta['skills']"
        :description="description"
        :previewImageLink="previewImageLink"
        :courseVideoPreview="meta['courseVideoPreview']"
        :id="id"
        class="home-course"
        data-test="CourseView-Course"
      />
    </div>

    <VPagination
      v-model="pagination"
      @update:model-value="onPagination"
      :max="maxPages"
      :max-pages="maxElementsOnPage"
      class="home-pagination"
      data-test="CoursesListView-pagination"
    />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

import Course from './Course.vue'
import VLoader from '@/components/Loader/VLoader.vue'
import VSelect from '@/components/Select/VSelect.vue'
import VPagination from '@/components/Pagination/VPagination.vue'

import { getPreviewCourses } from '@/server/api'
import { useGlobalStore } from '@/stores/global'

import type { CourseFromList } from '@/interfaces'

onMounted(async () => {
  const courses: CourseFromList[] = await getPreviewCourses()

  useGlobalStore().setCoursesLists(courses)
  onPagination(1)
})

const sortingOption = ref<string>('')
const sortingOptions = [
  {
    label: 'Rating',
    value: 'rating'
  },
  {
    label: 'Price',
    value: 'price'
  }
]

const maxElementsOnPage = ref<number>(10)
const maxPages = computed<number>(() =>
  Math.ceil(useGlobalStore().coursesLists.length / maxElementsOnPage.value)
)

const pagination = ref<number>(1)

function onPagination(pageNumber: number) {
  const firstElement = (pageNumber - 1) * maxElementsOnPage.value
  const lastElement = pageNumber * maxElementsOnPage.value
  const paginatedCourses = useGlobalStore().coursesLists.slice(firstElement, lastElement)

  useGlobalStore().setPaginatedCoursesLists(paginatedCourses)
}
</script>

<style lang="scss" scoped>
.home {
  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }

  &-coursesList {
    position: relative;
    min-height: calc(100vh - var(--header-height) - var(--footer-height) - 180px);
  }

  &-course:not(:first-child) {
    margin-top: 24px;
  }

  &-pagination {
    width: fit-content;
    margin: 24px auto;
  }
}
</style>
