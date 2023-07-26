<template>
    <section>
        <h1>Dragon</h1>
        {{ dragonId }}
        {{ dragon }}
    </section>
</template>

<script setup lang="ts">
import {computed } from 'vue'
import { useRoute } from 'vue-router'

import { useQuery } from '@vue/apollo-composable'
import { QUERY_DRAGON_ID } from '@/server/graphQl/index.ts'

const dragonId = computed<string>(() => String(useRoute().params.id))

const { result: dragon, loading: dragonLoading, error: isDragonError } = useQuery(QUERY_DRAGON_ID, {
    dragonId: dragonId.value,
})
</script>