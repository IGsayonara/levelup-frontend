<template>
  <slot :is-open="isOpen" :timer="timer"></slot>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

interface Props {
  lifeTime: number;
}

const props = defineProps<Props>();

const timer = ref(0);
const interval = ref<number>(0);

const isOpen = computed(() => timer.value < props.lifeTime);

onMounted(() => {
  interval.value = setInterval(() => {
    if (timer.value >= props.lifeTime) {
      clearInterval(interval.value);
      return;
    }
    timer.value++;
  }, 1000);
});

onBeforeUnmount(() => {
  clearInterval(interval.value);
});
</script>

<style scoped></style>
