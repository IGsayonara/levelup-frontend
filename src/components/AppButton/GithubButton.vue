<template>
  <AppButton
    primary-color="black"
    class="github-button"
    secondary-color="white"
    @click="redirectToGithub"
    >View on Github</AppButton
  >
</template>

<script setup lang="ts">
import AppButton from '@/components/AppButton/index.vue';

declare type Props = {
  repositoryLink: string;
};

const props = defineProps<Props>();

const redirectToGithub = () => {
  window.open(
    props.repositoryLink || 'https://github.com/IGsayonara/levelup-frontend',
    '_blank'
  );
};
</script>

<style scoped></style>
