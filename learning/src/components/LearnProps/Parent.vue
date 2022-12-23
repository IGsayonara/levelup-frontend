<!--<template>-->
<!--  <Child title="meow" :counter="count" />-->
<!--  <button @click="count++">Increment</button>-->
<!--</template>-->

<script lang="ts">
import Child from './Child.vue';
import { h, reactive } from 'vue';

export default {
  setup() {
    const count = reactive({ count: 0 });
    return () => [
      h(Child, { title: 'meow', modelValue: count.count, 'onUpdate:modelValue': (value) => (count.count = value) }),
      h('button', { onClick: () => count.count++ }, 'Increment'),
      h('div', count.count),
      h('input', { onInput: (e) => (count.count = e.target.value), value: count.count }),
    ];
  },
};
</script>

<style scoped></style>
