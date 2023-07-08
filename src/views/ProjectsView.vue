<template>
  <div class="container">
    <div class="section-title-wrapper">
      <SectionTitle title="Search for projects" />
    </div>
  </div>
  <div class="projects_search">
    <div class="container">
      <AppInput
        id="searchProjectInput"
        v-model="searchValue"
        placeholder="Search"
        label="kek"
      />
    </div>
  </div>
  <section>
    <div class="container">
      <div v-if="projects.length" class="row">
        <div
          v-for="project in projects"
          :key="project.id"
          class="col-12 col-xl-6 app-card-col"
        >
          <AppCard
            :project="project"
            @click="$router.push('/project/' + project.id)"
          />
        </div>
        <InfiniteLoading @infinite="loadMore" />
      </div>
      <div v-else>
        <div class="not_found_image">
          <img src="/img/404.jpg" alt="Not found any project" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import InfiniteLoading from 'v3-infinite-loading';
import SectionTitle from '@/components/SectionTitle/index.vue';
import { useStore } from 'vuex';
import { ProjectsActions } from '@/store/modules/projects/action-types';
import { computed, ref, watch } from 'vue';
import AppCard from '@/components/AppCard/index.vue';
import AppInput from '@/components/AppInput/index.vue';
import debounce from 'lodash.debounce';

const store = useStore();
const searchValue = ref<string>('');

const projects = computed(() => {
  return store.state.ProjectsModule.projects;
});

store.dispatch(ProjectsActions.SEARCH_PROJECTS, searchValue.value);

watch(
  searchValue,
  debounce(() => {
    if (store.state.ProjectsModule.isLoading) return;
    store.dispatch(ProjectsActions.SEARCH_PROJECTS, searchValue.value);
  }, 300)
);

const loadMore = () => {
  if (store.state.ProjectsModule.isLoading) return;
  store.dispatch(ProjectsActions.LOAD_MORE_PROJECTS);
};
</script>

<style scoped lang="scss">
.app-card-col {
  margin-bottom: 3rem;
}
.not_found_image {
  display: flex;
  justify-content: center;
}
.projects_search {
  margin-bottom: 3rem;
}
</style>
