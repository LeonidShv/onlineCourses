<template>
  <q-toggle
    @update:model-value="(value) => $emit('update:v-model', value)"
    :label="label"
    :unchecked-icon="uncheckedIcon"
    :checked-icon="checkedIcon"
  />
</template>

<script setup lang="ts">
export interface Props {
  label?: string
  uncheckedIcon?: string
  checkedIcon?: string
}

withDefaults(defineProps<Props>(), {
  label: '',
  uncheckedIcon: '',
  checkedIcon: ''
})

defineEmits(['update:v-model'])
</script>
