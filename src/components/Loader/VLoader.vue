<template>
  <q-inner-loading
    :showing="value"
    label="Please wait..."
    label-class="text-teal"
    label-style="font-size: 1.1em"
  />
</template>

<script setup lang="ts">
export interface Props {
  value: boolean
}

withDefaults(defineProps<Props>(), {
  value: false
})
</script>
