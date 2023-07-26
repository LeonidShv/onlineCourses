<template>
  <header class="header">
    <p class="header-logo">Online courses. <b class="header-logo--highlight">Certificated</b></p>

    <VToggle
      v-model="isDark"
      @update:model-value="changeTheme"
      uncheckedIcon="light_mode"
      checkedIcon="dark_mode"
      class="header-themeToggle"
    />

    <img
      :src="avatarSrc"
      alt="user avatar"
      class="header-avatar"
    />
  </header>

  <RouterView class="routerView" />

  <footer class="footer">
    <p>© Copyright <b>2023</b></p>

    <p><strong>Genesis front-end</strong></p>
  </footer>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { getToken } from '@/server/api/index.js'
import { onMounted, onBeforeMount, ref } from 'vue'
import { avatarSrc } from '@/constants'

import VToggle from '@/components/Toggle/VToggle.vue'

import { useQuasar } from 'quasar'

const isDark = ref<boolean>(false)

onBeforeMount(() => {
  isDark.value = window?.matchMedia('(prefers-color-scheme: dark)')?.matches || false
  
  $q.dark.set(isDark.value)
})

function changeTheme() {
  $q.dark.set(isDark.value)
}

onMounted(async () => {
  const token: string = await getToken()
  document.cookie = `token=${token}`
})

const $q = useQuasar()

</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;
  padding: 0 80px;
  line-height: var(--header-height);
  background-color: var(--bg-block);
  box-shadow: var(--shadow-header);

  &-avatar {
    height: 30px;
    width: 30px;
    object-fit: cover;
    border-radius: 50%;
  }

  &-logo--highlight {
    color: var(--brand-highlight);
  }

  &-themeToggle {
    margin-left: auto;
    margin-right: 40px;
  }
}

.routerView {
  height: calc(100vh - var(--header-height) - var(--footer-height));
  overflow: auto;
  padding: 24px 80px;
}

.footer {
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  background-color: var(--bg-block);
  padding: 0 80px;
  line-height: var(--footer-height);
  box-shadow: var(--shadow-footer);
}
</style>
