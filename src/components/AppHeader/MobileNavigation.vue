<template>
  <AppModal v-if="isOpen" @close="close">
    <template #header>Header</template>
    <template #content><DefaultNavigation /></template>
    <template #footer>Footer</template>
  </AppModal>
  <div @click="open">Open</div>
</template>

<script setup>
import AppModal from '@/components/AppModal/index.vue';
import DefaultNavigation from '@/components/AppHeader/DefaultNavigation.vue';
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';

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

<style scoped></style>
