<template>
  <div class="app-card">
    <div class="app-card__image-wrapper">
      <img :src="imageUrl" class="image" />
    </div>
    <div class="app-card__text-wrapper">
      <h3 class="title">{{ title }}</h3>
      <div class="description">{{ description }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  title: string;
  imageUrl?: string;
  description?: string;
}

withDefaults(defineProps<Props>(), {
  imageUrl: '/img/404.jpg',
  description: 'Simple description for testing Simple description for testing Simple description for testing Simple description for testing Simple description for testing',
});

const asyncData = ref(false);

const myPromise: Promise<boolean> = new Promise((resolve) => {
  setTimeout(() => {
    resolve(true);
  }, 5000);
});
asyncData.value = await myPromise;
</script>

<style lang="scss" scoped>
.app-card {
  display: flex;
  padding: 24px;
  border: 1px solid #e5e5e5;
  border-radius: 41px;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &__image-wrapper {
    width: 120px;
    height: 120px;
    margin-right: 24px;

    .image {
      width: 100%;
      height: 100%;
      min-width: 120px;
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
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 24px;
      transition: all 0.3s ease-in;
    }

    .description {
      font-size: 14px;
      color: #808080;
      margin-bottom: auto;
    }
  }
  &:hover {
    border-color: #ff8c00;
    box-shadow: 1px 1px 1px 1px rgba(255, 140, 0, 0.1);
  }
  &:hover & {
    &__text-wrapper {
      .title {
        color: #ff8c00;
      }
    }
    &__image-wrapper {
      .image {
        border-color: #ff8c00;
        box-shadow: 1px 1px 1px 1px rgba(255, 140, 0, 0.1);
      }
    }
  }
}
</style>
