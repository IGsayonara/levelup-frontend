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
        <div v-for="project in projects" :key="project.id" class="col-12 col-xl-6 app-card-col">
          <AppCard :project="project" @click="$router.push('/project/' + project.id)" />
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
        <div v-for="skill in skills" :key="skill.id" class="col-12 col-sm-6 col-md-3 skill-card-col">
          <SkillCard :title="skill.title" />
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
import { useStore } from 'vuex';
import { UserActions } from '@/store/modules/user/action-types';
import { computed } from 'vue';

const store = useStore();

const projects = computed(() => {
  return store.state.UserModule.projects;
});

const skills = computed(() => {
  return store.state.UserModule.skills;
});

store.dispatch(UserActions.SET_USER);
</script>

<style lang="scss" scoped>
.skill-card-col,
.app-card-col {
  margin-bottom: 3rem;
}
</style>
