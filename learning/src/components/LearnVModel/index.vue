<template>
  <div>
    <label :for="$props.id">{{ label }}</label>
    <input :id="$props.id" type="text" :value="reactiveModelValue" v-bind="$attrs" @input="$emit('update:modelValue', $event.target.value)" />
  </div>
</template>
<script lang="ts"></script>
<script setup lang="ts">
import { toRef } from 'vue';

interface Props {
  id: string;
  label: string;
  modelValue: string;
}
const props = defineProps<Props>();

defineEmits(['update:modelValue']);
const reactiveModelValue = toRef(props, 'modelValue');
</script>

<style scoped></style>
