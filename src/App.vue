<template>
  <div>
    <Suspense>
      <SkillCard />
      <template #fallback> Loading... </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import SkillCard from '@/components/SkillCard/index.vue';
</script>

<style></style>
