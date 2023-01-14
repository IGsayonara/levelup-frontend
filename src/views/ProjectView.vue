<template>
  <section>
    <div class="container">
      <div>{{ id }}</div>
    </div>
    <div class="container">
      {{ apiData }}
    </div>
  </section>
</template>

<script setup lang="ts">
import { toRef, ref } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';
import { projectIdGuard } from '@/router/middlewares/correctParams';

interface Props {
  id: number;
}
const props = defineProps<Props>();
const id = toRef(props, 'id');

const apiData = ref<any>();
fetch('http://api.luckyigor.world/', {
  mode: 'no-cors',
})
  .then((data) => {
    return data.text();
  })
  .catch((err) => {
    console.error(err);
    return `There is no project with id ${id.value}`;
  })
  .then((text) => {
    apiData.value = text;
  });

onBeforeRouteUpdate(projectIdGuard);
</script>
