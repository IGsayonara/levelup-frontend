<template>
  <div v-if="project" class="app-card">
    <div class="app-card__image-wrapper">
      <img :src="imageUrl" class="image" />
    </div>
    <div class="app-card__text-wrapper">
      <h3 class="title">{{ project.title }}</h3>
      <div class="description">{{ project.description }}</div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AppCard',
};
</script>

<script setup lang="ts">
import { Project } from '@/types/project';
import { computed, toRef } from 'vue';

interface Props {
  project: Project;
}

const props = defineProps<Props>();
const project = toRef(props, 'project');

const imageUrl = computed(() => {
  return project.value.imageUrl || '/img/404.jpg';
});
</script>

<style lang="scss" scoped>
.app-card {
  display: flex;
  padding: 3rem;
  border: 1px solid #e5e5e5;
  border-radius: 4rem;
  background-color: white;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &__image-wrapper {
    width: 15rem;
    height: 15rem;
    margin-right: 3rem;

    .image {
      width: 100%;
      height: 100%;
      min-width: 15rem;
      border: 1px solid #e5e5e5;
      border-radius: 25%;
      transition: all 0.3s ease-in;
    }
  }

  &__text-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .title {
      width: 100%;
      font-size: 3rem;
      font-weight: bold;
      margin-bottom: 3rem;
      transition: all 0.3s ease-in;
    }

    .description {
      color: #808080;
      margin-bottom: auto;
    }
  }
  &:hover {
    border-color: $orange;
    filter: drop-shadow(1px 1px 6px $orange);
  }
  &:hover & {
    &__text-wrapper {
      .title {
        color: $orange;
      }
    }
    &__image-wrapper {
      .image {
        border-color: $orange;
        filter: drop-shadow(1px 1px 6px $orange);
      }
    }
  }
}
</style>
