<template>
  <VDefaultVideoPlayer
    v-if="type === 'default'"
    @pause="pause"
    :previewImageLink="previewImageLink"
    :link="link"
    :progress="progress"
    class="course-video"
  />

  <VPreviewVideoPlayer
    v-else-if="type === 'preview'"
    class="course-video"
    :previewImageLink="previewImageLink"
    :link="link"
  />
</template>

<script setup lang="ts">
import VDefaultVideoPlayer from './VDefaultVideoPlayer.vue'
import VPreviewVideoPlayer from './VPreviewVideoPlayer.vue'

export interface Props {
  previewImageLink?: string
  link?: string
  progress?: number
  type: string
}

withDefaults(defineProps<Props>(), {
  previewImageLink: '',
  link: '',
  progress: 0,
  type: ''
})

const emit = defineEmits<{
  (e: 'pause', currentTime: number): void
}>()

function pause(currentTime: number) {
  emit('pause', currentTime)
}
</script>