<template>
  <div class="wrapper">
    <div v-for="i in 3" :key="i">
      <AppCard :title="'My title ' + i" />
    </div>
    <div v-for="i in 3" :key="i">
      <SkillCard :title="'Skill ' + i" />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppCard from '@/components/AppCard/index.vue';
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
