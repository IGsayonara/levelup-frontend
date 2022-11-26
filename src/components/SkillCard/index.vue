<template>
  <div>{{ title }}</div>
  <div>{{ imageUrl }}</div>
  <div>{{ description }}</div>
  <div>{{ asyncData }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  title: string;
  imageUrl?: string;
  description?: string;
}

withDefaults(defineProps<Props>(), {
  imageUrl: '404',
  description: '',
});

const asyncData = ref(false);

const myPromise: Promise<boolean> = new Promise((resolve) => {
  setTimeout(() => {
    resolve(true);
  }, 5000);
});
asyncData.value = await myPromise;
</script>

<style></style>
