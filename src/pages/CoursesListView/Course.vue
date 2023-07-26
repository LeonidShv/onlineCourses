<template>
  <div class="course">
    <router-link
      :to="`/course/${id}`"
      class="course-videoWrapper"
    >
      <VideoPlayer
        type="preview"
        class="course-video"
        :previewImageLink="`${previewImageLink}/cover.webp`"
        link="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8"
      />
    </router-link>

    <div class="course-info">
      <router-link
        :to="`/course/${id}`"
        class="course-link"
        >{{ title }}</router-link
      >
      <VRating
        class="course-rating"
        :model-value="rating"
        :max="5"
      />
      <p class="course-text">{{ description }}</p>
      <p class="course-duration">{{ lessonsCount }} lectures</p>
      <div class="course-badges">
        <VBadge
          v-for="(skill, i) in skills"
          :key="i"
          class="course-badge"
        >
          {{ skill }}
        </VBadge>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { VideoPlayer } from 'vue-components';
import { VideoPlayer } from 'vue-hls-video-player';
// import VideoPlayer from '@/components/VideoPlayer2/index.vue'
import VRating from '@/components/Rating/VRating.vue'
import VBadge from '@/components/Badge/VBadge.vue'

export interface CourseVideoPreview {
  link?: string
  previewImageLink?: string
}

export interface Props {
  title?: string
  lessonsCount?: number
  skills?: string[]
  rating?: number
  description?: string
  previewImageLink?: string
  courseVideoPreview?: CourseVideoPreview | void
  id?: string
}

withDefaults(defineProps<Props>(), {
  title: '',
  lessonsCount: 0,
  skills: () => [],
  rating: 0,
  description: '',
  previewImageLink: '',
  courseVideoPreview: () => {},
  id: ''
})
</script>

<style lang="scss" scoped>
.course {
  display: flex;
  gap: 16px;
  padding-bottom: 24px;
  box-shadow: var(--shadow);

  &-videoWrapper {
    width: 25%;
  }

  &-video {
    width: 100%;
    height: 200px;
  }

  &-info {
    width: 75%;
  }

  &-text {
    margin-top: 16px;
  }

  &-link {
    color: var(--text-color);
    display: block;
    font-size: 18px;
    transition: color 0.3s, background-color 0.3s;

    &:hover {
      background-color: var(--bg-block);
      color: var(--brand-highlight);
    }
  }

  &-badge:not(:first-child) {
    margin-left: 8px;
  }
}
</style>
