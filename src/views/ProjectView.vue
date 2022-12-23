<template>
  <section>
    <div class="container">
      <div>{{ id }}</div>
    </div>
    <div class="container">
      <LearnProps />
    </div>
  </section>
</template>

<script setup lang="ts">
import { toRef } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';
import { projectIdGuard } from '@/router/middlewares/correctParams';
import LearnProps from '../../learning/src/components/LearnProps/Parent.vue';

interface Props {
  id: number;
}
const props = defineProps<Props>();
const id = toRef(props, 'id');

onBeforeRouteUpdate(projectIdGuard);
</script>
