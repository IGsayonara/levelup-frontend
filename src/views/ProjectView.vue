<template>
  <section>
    <div class="container">
      <div>{{ id }}</div>
    </div>
    <div class="container">
      <LearnJSX />
      <LearnSlots />
    </div>
  </section>
</template>

<script setup lang="ts">
import { toRef } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';
import { projectIdGuard } from '@/router/middlewares/correctParams';
import LearnJSX from '../../learning/src/components/LearnJSX/index.vue';
import LearnSlots from '../../learning/src/components/LearnSlots/Parent.vue';

interface Props {
  id: number;
}
const props = defineProps<Props>();
const id = toRef(props, 'id');

onBeforeRouteUpdate(projectIdGuard);
</script>
