<template>
  <button class="app-button">
    <slot>{{ text }}</slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'AppButton',
};
</script>

<script setup lang="ts">
interface Props {
  text: string;
  primaryColor?: string;
  secondaryColor?: string;
}

withDefaults(defineProps<Props>(), {
  primaryColor: '#ff8c00',
  secondaryColor: 'white',
});
</script>

<style scoped lang="scss">
.app-button {
  padding: 1em;
  font-weight: 500;
  border-radius: 4rem;
  border: 1px solid $orange;
  border: 1px solid v-bind(primaryColor);
  color: $orange;
  color: v-bind(primaryColor);
  background-color: white;
  background-color: v-bind(secondaryColor);
  transition: all 0.3s ease-in;

  &:hover {
    color: white;
    color: v-bind(secondaryColor);
    background-color: $orange;
    background-color: v-bind(primaryColor);
  }
}
</style>
