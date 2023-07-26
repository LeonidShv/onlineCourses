<template>
  <q-checkbox
    @update:model-value="(value) => $emit('update:v-model', value)"
    :label="label"
  />
</template>

<script setup lang="ts">
export interface Props {
  label?: string
}

withDefaults(defineProps<Props>(), {
  label: ''
})

defineEmits(['update:v-model'])
</script>
