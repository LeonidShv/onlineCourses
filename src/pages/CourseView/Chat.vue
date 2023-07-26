<template>
  <div
    ref="chat"
    class="chat"
  >
    <div
      class="chat-messages"
      data-test="CourseView-Chat-message"
    >
      <q-chat-message
        v-for="({ name, avatar, text, sent }, i) in messages"
        :key="i"
        :name="name"
        :avatar="avatar"
        :text="text"
        :sent="sent"
        name-color="grey-1"
      />
    </div>

    <VInput
      class="chat-textarea"
      type="textarea"
      v-model="message"
      placeholder="write a message"
      @keyup.enter="sendMessage"
      data-test="CourseView-Chat-textarea"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'

import VInput from '@/components/Input/VInput.vue'

import { avatarSrc } from '@/constants'
import type { Ref } from 'vue'

interface Message {
  name: string
  avatar: string
  text: string[]
  sent: boolean
}

const messages: Ref<Message[]> = ref([
  {
    name: 'Jane',
    avatar: 'https://cdn.quasar.dev/img/avatar3.jpg',
    text: [`Explaine, please, how can I do this ...`],
    sent: false
  },
  {
    name: 'Sam',
    avatar: 'https://cdn.quasar.dev/img/avatar4.jpg',
    text: [`I've faced with the same problem, just do this and this`],
    sent: false
  }
])

const message = ref<string>('')
const chat = ref<HTMLElement | null>(null)

function sendMessage() {
  message.value = message.value.trim()

  if (!message.value) return

  const msg = {
    name: 'Me',
    avatar: avatarSrc,
    text: [message.value],
    sent: true
  }

  messages.value.push(msg)
  message.value = ''

  nextTick(function () {
    if (chat.value) {
      chat.value.scrollTop = chat.value.scrollHeight
    }
  })
}
</script>

<style lang="scss">
.chat {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 45%;
  overflow: auto;
  position: relative;

  &-messages {
    margin-bottom: 16px;
  }

  &-textarea {
    margin-top: auto;
    border-radius: 20% / 50%;
  }
}
</style>
