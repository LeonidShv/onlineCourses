// stores/counter.spec.ts
import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'
// import { beforeEach } from "@vue/test-utils";
import { useGlobalStore } from '@/stores/global'

import { coursDataMock } from '@/constants/testMock'

describe('Test pinia store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('Does toggleDarkTheme work properly?', () => {
    const globalStore = useGlobalStore()
    expect(globalStore.isDarkTheme).toBe(false)
    globalStore.toggleDarkTheme()
    expect(globalStore.isDarkTheme).toBe(true)
  })

  it('Does setCourse work properly?', () => {
    const globalStore = useGlobalStore()
    expect(globalStore.course).toEqual({})
    globalStore.setCourse(coursDataMock)
    expect(globalStore.course).toEqual(coursDataMock)
  })
})
