<template>
  <DefaultNavigation class="desktop__navigation" />
  <GithubButton class="desktop__github-button" />
</template>

<script setup>
import DefaultNavigation from '@/components/AppHeader/DefaultNavigation.vue';
import GithubButton from '@/components/AppButton/GithubButton.vue';
</script>

<style scoped lang="scss">
.desktop {
  &__navigation:deep {
    margin-left: auto;
    a {
      margin-left: 3.5rem;
    }
  }
  &__github-button:deep {
    margin-left: 3.5rem;
  }
}
</style>
