<template>
  <div class="wrapper">
    <div v-for="i in 9" :key="i">
      <SkillCard :title="'My title ' + i + 1" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SkillCard from '@/components/SkillCard/index.vue';
</script>

<style>
.wrapper {
  padding: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
}
</style>
