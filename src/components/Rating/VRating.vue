<template>
  <q-rating
    @update:model-value="(value) => $emit('update:v-model', value)"
    size="18px"
    readonly
    :max="5"
    color="yellow"
    icon-half="star_half"
  />
</template>

<script setup lang="ts">
defineEmits(['update:v-model'])
</script>
