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
import { toRef, ref, onMounted } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';
import { projectIdGuard } from '@/router/middlewares/correctParams';
import { test } from '@/api';

interface Props {
  id: number;
}
const props = defineProps<Props>();
const id = toRef(props, 'id');

const apiData = ref<any>();

onMounted(async () => {
  apiData.value = await test();
});

onBeforeRouteUpdate(projectIdGuard);
</script>
