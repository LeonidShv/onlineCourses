<template>
  <q-input
    @update:model-value="(value) => $emit('update:v-model', value)"
    :placeholder="placeholder"
    :type="type"
    filled
    autogrow
    :label="label"
  />
</template>

<script setup lang="ts">
export interface Props {
  label?: string
  type: string
  placeholder: string
}

defineEmits(['update:v-model'])

withDefaults(defineProps<Props>(), {
  label: '',
  type: 'textarea',
  placeholder: ''
})
</script>
