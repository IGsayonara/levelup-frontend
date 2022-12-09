<template>
  <section>
    <div class="container">
      <div>{{ id }}</div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { toRef } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';
import { isIdValid } from '@/utils/id-util';

interface Props {
  id: number;
}
const props = defineProps<Props>();
const id = toRef(props, 'id');

onBeforeRouteUpdate((to, _from, next) => {
  if (isIdValid(to.params.id)) {
    next();
  } else {
    next('/404');
  }
});
</script>
