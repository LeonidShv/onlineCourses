<template>
  <video
    @pause="pause"
    @ended="pause"
    @keyup="changeSpeed"
    ref="video"
    :poster="previewImageLink"
    :controls="isControls"
    :title="title"
    data-test="video-player"
  >
    <source
      :src="link"
      type="application/x-mpegURL"
    />
  </video>
</template>

<script setup lang="ts">
import { onMounted, onUpdated, ref } from 'vue'
import Hls from 'hls.js'

export interface Props {
  previewImageLink?: string
  link?: string
  progress?: number
  isMuted?: boolean
  isControls?: boolean
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  previewImageLink: '',
  link: '',
  progress: 0,
  isMuted: false,
  isControls: true,
  title: ''
})

const emit = defineEmits<{
  (e: 'pause', currentTime: number): void
  (e: 'test', str: string): void
}>()

// TODO: TS if (video.value) is a hint to fix TS
const video = ref<HTMLMediaElement | null>(null)

onMounted(() => {
  prepareVideoPlayer()
})

onUpdated(() => {
  prepareVideoPlayer()
})

function prepareVideoPlayer() {
  let hls = new Hls()
  let stream = props.link
  hls.loadSource(stream)
  if (video.value) {
    hls.attachMedia(video.value)
    video.value.muted = props.isMuted
    video.value.currentTime = props.progress
  }
}

function pause() {
  const currentTime = video?.value?.currentTime || 0

  emit('pause', currentTime)
}

function changeSpeed(e: KeyboardEvent) {
  if (e.key === 'w' && video.value) {
    video.value.playbackRate = video.value.playbackRate + 0.25
  } else if (e.key === 's' && video.value) {
    video.value.playbackRate = video.value.playbackRate - 0.25
  }
}
</script>
