<template>
  <BasePlayer
    :previewImageLink="previewImageLink"
    :link="link"
    :isMuted="true"
    :isControls="false"
    @mouseover="turnOn"
    @mouseleave="turnOff"
  />
</template>

<script setup lang="ts">
import BasePlayer from './BasePlayer.vue'

export interface Props {
  previewImageLink?: string
  link?: string
}

withDefaults(defineProps<Props>(), {
  previewImageLink: '',
  link: ''
})

function turnOn(e: Event) {
  ;(e.target as HTMLMediaElement).play()
}

function turnOff(e: Event) {
  ;(e.target as HTMLMediaElement).pause()
}
</script>
