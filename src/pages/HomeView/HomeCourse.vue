<template>
  <div class="course">
    <VideoPlayer class="course-video" />

    <div class="course-info">
      <h3 class="course-title">{{ title }}</h3>
      <q-rating
        class="course-rating"
        readonly
        :model-value="rating"
        size="18px"
        :max="5"
        color="yellow"
        icon-half="star_half"
      />
      <p class="course-text">{{ description }}</p>
      <p class="course-duration">{{ lessonsCount }} lectures - {{ duration }} hours</p>
      <div class="course-badges">
        <q-badge
          class="course-badge"
          v-for="(skill, i) in skills"
          color="yellow"
          text-color="dark"
          :key="i"
        >
          {{ skill }}
        </q-badge>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VideoPlayer from '@/components/VVideoPlayer/index.vue'
import { defineProps } from 'vue'

defineProps<{
  title: string
  lessonsCount: number
  duration: Number
  skills: string[]
  rating: number
  description: string
}>()
</script>

<style lang="scss" scoped>
.course {
  display: flex;
  gap: 16px;
  padding-bottom: 24px;
  box-shadow: 0px 0.5px 0px 0px rgba(255, 255, 255, 0.4);

  &-video {
    width: 25%;
  }

  &-info {
    width: 75%;
  }

  &-text {
    margin-top: 16px;
  }

  &-duration {
    margin: 8px 0 16px;
    color: var(--grey);
  }

  &-badge:not(:first-child) {
    margin-left: 8px;
  }
}
</style>
