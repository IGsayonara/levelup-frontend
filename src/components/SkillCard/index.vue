<template>
  <div>{{ title }}</div>
  <div>{{ imageUrl }}</div>
  <div>{{ description }}</div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  imageUrl?: string;
  description?: string;
}

const props = withDefaults(defineProps<Props>(), {
  imageUrl: '404',
  description: '',
});
</script>

<style></style>
