<template>
  <AppHeader />
  <AppBreadcrumbs />
  <router-view />
</template>

<script setup>
import AppHeader from '@/components/AppHeader/index.vue';
import AppBreadcrumbs from '@/components/AppBreadcrumbs/index.vue';
</script>

<style lang="scss">
.breadcrumb-section {
  margin-top: 5rem;
}
</style>
