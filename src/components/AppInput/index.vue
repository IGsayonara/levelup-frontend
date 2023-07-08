<template>
  <div>
    <input
      :id="$props.id"
      type="text"
      :value="reactiveModelValue"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'AppInput',
};
</script>

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

<style scoped lang="scss">
input {
  width: 100%;
  height: 14px;
  padding: 4rem 3rem;
  border: 1px solid #e5e5e5;
  border-radius: 2rem;
  color: #808080;
}
</style>
