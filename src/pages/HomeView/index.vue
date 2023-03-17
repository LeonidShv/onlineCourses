<template>
  <div>
    <h2>Courses</h2>
    <div class="home-header">
      <q-select
        class="input"
        v-model="sortingOption"
        dark
        :options="sortingOptions"
        label="Sort by"
      />
      <p>123 courses</p>
    </div>

    <div class="home-coursesList">
      <HomeCourse
        v-for="i in 10"
        :key="i"
        :title="'JavaScript'"
        :rating="4.5"
        :lessonsCount="12"
        :duration="333"
        :skills="['js', 'html']"
        :description="'Reignite your inner drive by managing factors that dampen your motivation.'"
        class="home-course"
      />
    </div>

    <q-pagination
      v-model="pagination"
      color="yellow"
      active-text-color="dark"
      :max="10"
      :max-pages="6"
      boundary-numbers
      direction-links
      class="home-pagination"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useGlobalStore } from '@/stores/global'
import HomeCourse from './HomeCourse.vue'

onMounted(async () => {
  console.log(useGlobalStore().isDarkTheme);
  useGlobalStore().toggleDarkTheme();
  console.log(useGlobalStore().isDarkTheme);

  // const data = await requestSubscriptions();
  // console.log(data);

  // const data2 = await requestPreviewCourses();
  // console.log(data2);

  const requestOptions: any = {
    method: 'GET',
    redirect: 'follow',
    // mode: 'no-cors',
    // Accept: '*/*',
    // 'Accept-Encoding': 'gzip, deflate, br',
    // Connection: 'keep-alive'
  }

  fetch("https://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions", requestOptions)
  .then((response) => response.body)
  .then((body) => {
    const reader = body?.getReader();

    return new ReadableStream({
      start(controller) {
        function push() {
          reader?.read().then(({ done, value }) => {
            if (done) {
              controller.close();
              return;
            }
            controller.enqueue(value);
            push();
          });
        }

        push();
      },
    });
  })
  .then((stream) =>
    new Response(stream, { headers: { "Content-Type": "text/html" } }).text()
  )
  .then((result) => {
    console.log(result);
  });
})

const sortingOption = ref('')
const sortingOptions = [
  {
    label: 'Rating',
    value: 'rating'
  },
  {
    label: 'Price',
    value: 'price'
  }
]

const pagination = ref(1)
</script>

<style lang="scss" scoped>
.home {
  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-course:not(:first-child) {
    margin-top: 24px;
  }

  &-pagination {
    width: fit-content;
    margin: 24px auto;
  }
}
</style>
