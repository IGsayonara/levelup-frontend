<script lang="ts">
import { h, reactive } from 'vue';
import LearnVModel from '../LearnVModel/index.vue';

export default {
  setup() {
    const inputProps = reactive({ props: { modelValue: 'initial', label: 'Some label', id: '54' } });
    const input = h('input', { 'onInput': (e) => (inputProps.props.modelValue = e.target.value) });

    const inputVNode = h(LearnVModel, {
      ...inputProps,
      'onUpdate:modelValue': (value) => (inputProps.props.modelValue = input.el.value = value),
    });

    return () =>
      h('div', [
        inputVNode,
        h('div', inputProps.props.modelValue),
        input,
        h('button', { onClick: () => (inputProps.props.label = 'new Label') }, 'click me'),
      ]);
  },
};
</script>

<!--<template>-->
<!--  <LearnVModel v-model="inputProps.modelValue" />-->
<!--  <input v-model="inputProps.modelValue" type="text" />-->
<!--</template>-->

<!--<script setup>-->
<!--import { reactive } from 'vue';-->
<!--import LearnVModel from '../LearnVModel/index.vue';-->
<!--const inputProps = reactive({ modelValue: 'fdfd', label: 'Some label', id: '54' });-->
<!--</script>-->
