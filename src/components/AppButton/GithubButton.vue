<template>
  <div class="github-button">
    <AppButton text="View on Github" primary-color="black" secondary-color="white" @click="redirectToGithub" />
  </div>
</template>

<script setup lang="ts">
import AppButton from '@/components/AppButton/index.vue';

declare type Props = {
  repositoryLink: string;
};

const props = defineProps<Props>();

const redirectToGithub = () => {
  window.open(props.repositoryLink || 'https://github.com/IGsayonara/levelup-frontend', '_blank');
};
</script>

<style scoped></style>
