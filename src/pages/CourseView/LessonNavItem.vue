<template>
  <div
    :key="id"
    :class="{
      'lessonNavItem--locked': status === 'locked'
    }"
    class="lessonNavItem"
    :title="status === 'locked' ? 'Lesson is locked' : ''"
    data-test="CourseView-LessonNavItem-wrapper"
  >
    <VCheckbox :model-value="!!completed" />
    <div>
      <p
        class="lessonNavItem-title"
        :class="{
          'lessonNavItem-title--active': choosenLesssonId === id,
          'lessonNavItem-title--completed': completed && choosenLesssonId !== id
        }"
        data-test="CourseView-LessonNavItem-title"
      >
        {{ order }}.{{ title }}
      </p>
      <p class="lessonNavItem-time">
        <IconTime />
        {{ Math.round((100 * duration) / 60) / 100 }} min
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconTime from '@/assets/icons/time.svg'
import VCheckbox from '@/components/Checkbox/VCheckbox.vue'

export interface Props {
  duration: number
  order: number
  status: string
  title: string
  id: string
  completed: boolean
  choosenLesssonId: string
}

withDefaults(defineProps<Props>(), {
  duration: 0,
  order: 0,
  status: '',
  title: '',
  id: '',
  completed: false,
  choosenLesssonId: ''
})
</script>

<style lang="scss">
.lessonNavItem {
  display: flex;
  align-items: center;
  box-shadow: var(--shadow);

  &:not(:first-child) {
    padding: 8px 0;
  }

  &:first-child {
    padding-bottom: 8px;
  }

  &--locked {
    position: relative;
    cursor: not-allowed;

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: var(--disabled-block);
      opacity: 0.3;
    }
  }

  &-title {
    margin-left: 8px;

    &--active {
      color: var(--q-primary);
    }

    &--completed {
      color: var(--completed);
    }
  }

  &-time {
    display: flex;
    gap: 8px;
    font-size: 12px;
    margin-left: auto;
  }
}
</style>
