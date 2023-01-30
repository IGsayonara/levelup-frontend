<template>
  <section>
    <div v-if="!isError" class="container">
      <h2>{{ title }}</h2>
    </div>
    <div v-else class="container">
      <h2>Project with id {{ id }} is not found :(</h2>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';
import { idGuard } from '@/router/middlewares/correctParams';
import { useStore } from 'vuex';
import { SkillActions } from '@/store/modules/skill/action-types';

interface Props {
  id: number;
}
const props = defineProps<Props>();

const store = useStore();

const title = computed(() => {
  return store.state.SkillModule.title;
});

const isError = computed(() => {
  return store.state.SkillModule.isError;
});

store.dispatch(SkillActions.SET_SKILL, props.id);

onBeforeRouteUpdate(idGuard);
</script>
