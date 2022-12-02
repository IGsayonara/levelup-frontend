<template>
  <div class="app-banner">
    <div class="app-banner__text-wrapper page-container">
      <h1 class="title">{{ title }}</h1>
      <div class="description" v-html="description"></div>
    </div>
    <img class="app-banner__image" :src="bannerImage" alt="" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  bannerImage?: string;
}

withDefaults(defineProps<Props>(), {
  bannerImage: '/img/banner.png',
});
</script>

<style scoped lang="scss">
.app-banner {
  width: 100%;
  height: 642px;
  position: relative;
  display: flex;
  align-items: center;

  &__text-wrapper {
    color: white;

    .title {
      font-size: 48px;
      margin-bottom: 40px;
    }

    .description {
      font-size: 24px;
    }
  }

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
  }
}
</style>
