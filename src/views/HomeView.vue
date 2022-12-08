<template>
  <section class="banner-wrapper">
    <AppBanner description="Done by <span style='color: #ff8c00;'>Ihor Didunik</span> during fulfilment of personal development plan" title="Funny Self Development" />
  </section>
  <section>
    <div class="container">
      <div class="section-title-wrapper">
        <SectionTitle title="Mini apps" link-text="See more" />
      </div>
      <div class="row">
        <div v-for="i in 4" :key="i" class="col-12 col-xl-6 app-card-col">
          <AppCard :title="'My title ' + i" />
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="section-title-wrapper">
        <SectionTitle title="Learned skills" link-text="See more" />
      </div>
      <div class="row">
        <div v-for="i in 12" :key="i" class="col-12 col-sm-6 col-md-3 skill-card-col">
          <SkillCard :title="'Skill ' + i" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/SectionTitle/index.vue';
import AppCard from '@/components/AppCard/index.vue';
import AppBanner from '@/components/AppBanner/index.vue';
import SkillCard from '@/components/SkillCard/index.vue';
</script>

<style lang="scss" scoped>
.skill-card-col,
.app-card-col {
  margin-bottom: 3rem;
}

section {
  margin-bottom: 8rem;
}

.section-title-wrapper {
  margin-bottom: 5rem;
}
</style>
