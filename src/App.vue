<template>
  <AppBanner description="Done by <span style='color: #ff8c00;'>Ihor Didunik</span> during fulfilment of personal development plan" title="Funny Self Development" />
  <div class="page-container">
    <SectionTitle title="Mini apps" link-text="See more" />
    <div class="app-wrapper">
      <div v-for="i in 4" :key="i">
        <AppCard :title="'My title ' + i" />
      </div>
    </div>
    <div class="skill-wrapper">
      <div v-for="i in 12" :key="i">
        <SkillCard :title="'Skill ' + i" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/SectionTitle/index.vue';
import AppCard from '@/components/AppCard/index.vue';
import AppBanner from '@/components/AppBanner/index.vue';
import SkillCard from '@/components/SkillCard/index.vue';
</script>

<style>
.page-container {
  padding: 24px;
}
.app-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
}
.skill-wrapper {
  padding: 24px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 24px;
}
</style>
