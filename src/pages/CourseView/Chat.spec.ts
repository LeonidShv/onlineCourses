import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Chat from './Chat.vue'

describe('Chat', () => {
  it('Was the message added to the chat correctly?', async () => {
    const wrapper: any = mount(Chat)
    wrapper.vm.messages = [
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
    ]
    let messagesLength = wrapper.vm.messages.length
    const input = wrapper.findComponent('[data-test="CourseView-Chat-textarea"]')

    await input.setValue('my@mail.com')
    await input.trigger('keyup.enter')
    messagesLength = messagesLength + 1

    expect(wrapper.findAll('[data-test="CourseView-Chat-message"] > *')).toHaveLength(
      messagesLength
    )
  })
})
