<template>
  <AppModal v-if="false">
    <template #header>Header</template>
    <template #content><DefaultNavigation /></template>
    <template #footer>Footer</template>
  </AppModal>
</template>

<script setup>
import AppModal from '@/components/AppModal/index.vue';
import DefaultNavigation from '@/components/AppHeader/DefaultNavigation.vue';
</script>

<style scoped></style>
