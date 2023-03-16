<template>
  <h1>
    Home view
  </h1>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useGlobalStore } from '@/stores/global'

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
  };

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
</script>