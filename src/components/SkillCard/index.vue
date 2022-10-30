<template>
  <div>{{ title }}{{ description }}</div>
  <div>{{ imageUrl }}</div>
  <div>{{ description }}</div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  imageUrl: string
  description: string
}>()
</script>

<style></style>
