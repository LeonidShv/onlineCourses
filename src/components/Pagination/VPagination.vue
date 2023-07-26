<template>
  <q-pagination
    @update:model-value="(value) => $emit('update:v-model', value)"
    :max="10"
    :max-pages="6"
    boundary-numbers
    direction-links
  />

  <!-- color="yellow"
    active-text-color="dark" -->
</template>

<script setup lang="ts">
export interface Props {
  max: number
  maxPages: number
}

defineEmits(['update:v-model'])

withDefaults(defineProps<Props>(), {
  max: 0,
  maxPages: 0
})
</script>
