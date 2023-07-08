<template>
  <section>
    <div v-if="!isError && project" class="container">
      <div class="section-title-wrapper">
        <SectionTitle :title="project.title" />
      </div>
      <AppCard :project="project" />
    </div>
    <div v-else class="container">smth went wrong</div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';
import { idGuard } from '@/router/middlewares/correctParams';
import { useStore } from 'vuex';
import { ProjectActions } from '@/store/modules/project/action-types';
import AppCard from '@/components/AppCard/index.vue';
import SectionTitle from '@/components/SectionTitle/index.vue';

interface Props {
  id: number;
}

const props = defineProps<Props>();

const store = useStore();

const isError = computed(() => {
  return store.state.ProjectModule.isError;
});

const project = computed(() => {
  return store.state.ProjectModule.project;
});

store.dispatch(ProjectActions.SET_PROJECT, props.id);

onBeforeRouteUpdate(idGuard);
</script>
