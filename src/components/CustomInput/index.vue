<template>
  <div>
    <label :for="$props.id">{{ label }}</label>
    <input :id="$props.id" type="text" :value="modelValue" v-bind="$attrs" @input="$emit('update:modelValue', $event.target.value)" />
    <div ref="refA" @click="a++">{{ a }}</div>
    <div ref="refB" @click="b++">{{ b }}</div>
  </div>
</template>
<script lang="ts"></script>
<script setup lang="ts">
// eslint-disable-next-line no-unused-vars
import { ref, watchPostEffect, watchEffect, watchSyncEffect, onMounted, onUpdated, onBeforeUpdate, onBeforeMount } from 'vue';
interface Props {
  id: string;
  label: string;
  modelValue: string;
}
defineProps<Props>();

defineEmits(['update:modelValue']);

const a = ref(1);
const b = ref(1);
const refA = ref<HTMLElement | null>(null);
const refB = ref<HTMLElement | null>(null);

onBeforeMount(() => {
  console.log('post a', a.value, refA.value?.innerText);
  console.log('before mount');
});
onMounted(() => {
  console.log('post a', a.value, refA.value?.innerText);
  console.log('mounted');
});
onBeforeUpdate(() => {
  console.log('post a', a.value, refA.value?.innerText);
  console.log('before update');
});
onUpdated(() => {
  console.log('post a', a.value, refA.value?.innerText);
  console.log('updated');
});

watchPostEffect(() => {
  console.log('post a', a.value, refA.value?.innerText);
});
watchSyncEffect(() => {
  console.log('sync a', a.value, refA.value?.innerText);
});
watchEffect(() => {
  console.log('pre a', a.value, refA.value?.innerText);
});
</script>

<style scoped></style>
