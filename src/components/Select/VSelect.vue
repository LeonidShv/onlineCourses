<template>
  <q-select
    @update:model-value="(value) => $emit('update:v-model', value)"
    :options="options"
    :label="label"
  />
</template>

<script setup lang="ts">
interface Option {
  [key: string]: string | number
}

export interface Props {
  options: string[] | Option[]
  label: string
}

defineEmits(['update:v-model'])

withDefaults(defineProps<Props>(), {
  options: () => [],
  label: ''
})
</script>
