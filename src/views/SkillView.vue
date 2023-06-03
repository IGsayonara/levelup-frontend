<template>
  <section>
    <container> Skill page will be there soon </container>
  </section>
</template>

<script setup lang="ts">
import { onBeforeRouteUpdate } from 'vue-router';
import { idGuard } from '@/router/middlewares/correctParams';

interface Props {
  id: number;
}
defineProps<Props>();

onBeforeRouteUpdate(idGuard);
</script>
