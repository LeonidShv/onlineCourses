<template>
  <main>
    <h1 class="title">Components</h1>

    <div class="block">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Home" />
        <q-breadcrumbs-el label="Components" />
        <q-breadcrumbs-el label="Breadcrumbs" />
      </q-breadcrumbs>
    </div>

    <div class="q-pa-md q-gutter-sm">
      <q-btn
        color="white"
        text-color="black"
        label="Standard"
        @click="showNotification"
      />
    </div>

    <div
      class="block"
      style="width: 300px"
    >
      <VSelect
        :options="options"
        v-model="select"
        label="Standard"
      />
      {{ select }}
    </div>

    <div
      class="block"
      style="color: red"
    >
      <VCheckbox
        v-model="isCheckbox"
        label="Standard"
      />
      {{ isCheckbox }}
    </div>

    <div
      class="block"
      style="color: red"
    >
      <VPagination
        v-model="pagination"
        :max="10"
        :max-pages="6"
      />

      {{ pagination }}
    </div>

    <div class="block">
      <!-- <q-rating
        v-model="ratingModel"
        size="2em"
        :max="5"
        color="yellow-6"
        icon-half="star_half"
      /> -->
      <VRating v-model="ratingModel" />

      {{ ratingModel }}
    </div>

    <div class="block">
      <VLoader :value="false" />
    </div>

    <div class="block">
      <q-toggle
        v-model="toggle"
        checked-icon="check"
        color="red"
        label="Different icon for each state"
        unchecked-icon="clear"
      />
    </div>

    <div class="block">
      <VInput
        v-model="textarea"
        type="textarea"
        label="text area label"
      />

      {{ textarea }}
    </div>

    <div
      class="block"
      style="width: 100%; max-width: 400px"
    >
      <q-chat-message
        name="me"
        avatar="https://cdn.quasar.dev/img/avatar4.jpg"
        :text="['hey, how are you?']"
        sent
        stamp="7 minutes ago"
      />
      <q-chat-message
        name="Jane"
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :text="[`doing fine, how r you?`]"
        stamp="4 minutes ago"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { useQuasar } from 'quasar'
import VSelect from '@/components/Select/VSelect.vue'
import VCheckbox from '@/components/Checkbox/VCheckbox.vue'
import VPagination from '@/components/Pagination/VPagination.vue'
import VRating from '@/components/Rating/VRating.vue'
import VLoader from '@/components/Loader/VLoader.vue'
import VInput from '@/components/Input/VInput.vue'

const $q = useQuasar()

function showNotification() {
  $q.notify({
    message: 'Jim pinged you.',
    color: 'purple'
  })
}

const select = ref('')
const options = ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle']

const isCheckbox = ref(false)

const pagination = ref(1)

const ratingModel = ref(4.5)

const toggle = ref(false)

const textarea = ref('')
</script>

<style>
.block {
  color: red;
}
</style>
