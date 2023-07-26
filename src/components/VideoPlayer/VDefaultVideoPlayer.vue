<template>
  <BasePlayer
    :previewImageLink="previewImageLink"
    :link="link"
    :progress="progress"
    title="Buttons W and S can change speed of your player"
    @pause="pause"
  />
</template>

<script setup lang="ts">
import BasePlayer from './BasePlayer.vue'

export interface Props {
  previewImageLink?: string
  link?: string
  progress?: number
}

withDefaults(defineProps<Props>(), {
  previewImageLink: '',
  link: '',
  progress: 0
})

const emit = defineEmits<{
  (e: 'pause', currentTime: number): void
}>()

function pause(currentTime: number) {
  emit('pause', currentTime)
}
</script>
