<template>
  <header class="app-header">
    <div class="container">
      <div class="app-header__wrapper">
        <div class="logo" @click="$router.push('/')">
          <img src="/img/logo.png" alt="Level UP" />
        </div>
        <DesktopNavigation v-if="!isMobileNavigation" />
        <MobileNavigation v-else />
      </div>
    </div>
  </header>
</template>

<script setup>
import { useViewpoint } from '@/composables/viewpoint-composable/index';
import { computed } from 'vue';
import DesktopNavigation from '@/components/AppHeader/DesktopNavigation.vue';
import MobileNavigation from '@/components/AppHeader/MobileNavigation.vue';
const { currentBreakpoint } = useViewpoint();

const isMobileNavigation = computed(() => {
  return ['xs', 'sm'].includes(currentBreakpoint.value);
});
</script>

<style scoped lang="scss">
.app-header {
  padding: 3rem 0;
  border-bottom: 1px solid;
  background-color: white;
  filter: drop-shadow(2px 2px 6px black);

  .logo {
    cursor: pointer;
    img {
      width: 23rem;
    }
  }

  .github-button:deep {
    margin-left: 4.5rem;
  }

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
