<template>
  <AppModal v-if="isOpen" @close="close">
    <template #header></template>
    <template #default>
      <div class="mobile__navigation-wrapper">
        <DefaultNavigation class="mobile__navigation" />
        <GithubButton class="mobile__github-button" />
      </div>
    </template>
  </AppModal>
  <FontAwesomeIcon icon="fa-solid fa-bars" @click="open" />
</template>

<script setup>
import AppModal from '@/components/AppModal/index.vue';
import DefaultNavigation from '@/components/AppHeader/DefaultNavigation.vue';
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import GithubButton from '@/components/AppButton/GithubButton.vue';

const route = useRoute();

const isOpen = ref(false);

const open = () => {
  isOpen.value = true;
};

const close = () => {
  isOpen.value = false;
};

watch(route, () => {
  isOpen.value = false;
});
</script>

<style scoped lang="scss">
.mobile {
  &__navigation:deep {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a {
      margin-bottom: 3.5rem;
    }
  }
}
.mobile__navigation-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: auto 0;
}
</style>
