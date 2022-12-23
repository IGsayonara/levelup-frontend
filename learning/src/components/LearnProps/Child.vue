<template>
  <div>{{ title }}</div>
  <div>{{ modelValue }}</div>
  <div><input :value="editableCounter" @input="$emit('update:modelValue', $event.target.value)" type="text" /></div>
</template>

<script setup lang="ts">
import { toRef } from 'vue';

interface Props {
  title: string;
  modelValue: string | number;
}

const props = defineProps<Props>();

defineEmits(['update']);

const editableCounter = toRef(props, 'modelValue');
</script>

<style scoped></style>
