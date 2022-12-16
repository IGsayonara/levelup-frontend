<template>
  <header class="app-header">
    <div class="container">
      <div class="app-header__wrapper">
        <div class="logo">
          <img src="/img/logo.png" alt="Level UP" />
        </div>
        <AppNavigation />
        <AppModal />
        <div class="git-button">
          <AppButton text="View on Github" primary-color="black" secondary-color="white" @click="redirectToGithub" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import AppButton from '@/components/AppButton/index.vue';
import { useViewpoint } from '@/composables/viewpoint-composable/index';
import { onMounted, watch } from 'vue';
import AppNavigation from '@/components/AppNavigation/index.vue';
import AppModal from '@/components/AppModal/index.vue';
const { currentBreakpoint } = useViewpoint();
const redirectToGithub = () => {
  window.open('https://github.com/IGsayonara/levelup-frontend', '_blank');
};
onMounted(() => {
  console.log(currentBreakpoint.value);
});
watch(currentBreakpoint, (newValue, oldValue) => {
  console.log(`${oldValue} to ${newValue}`);
});
window.addEventListener('resize', () => {});
</script>

<style scoped lang="scss">
.app-header {
  padding: 3rem 0;

  .logo {
    img {
      width: 23rem;
    }
  }

  .git-button {
    margin-left: 4.5rem;
  }

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
