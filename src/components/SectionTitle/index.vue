<template>
  <div class="section-title">
    <h2 class="section-title__heading">{{ title }}</h2>
    <a
      v-if="linkText"
      class="section-title__link"
      @click="$emit('linkClick')"
      >{{ linkText }}</a
    >
  </div>
</template>

<script lang="ts">
export default {
  name: 'SectionTitle',
};
</script>

<script setup lang="ts">
interface Props {
  title: string;
  linkText: string;
}

withDefaults(defineProps<Props>(), {});

defineEmits(['linkClick']);
</script>

<style scoped lang="scss">
.section-title {
  display: flex;
  align-items: baseline;
  width: 100%;

  &__heading {
    font-size: 4.5rem;
    font-weight: bold;
    margin-right: 1rem;
  }

  &__link {
    font-size: 2rem;
    line-height: 2rem;
    font-weight: 500;
    cursor: pointer;

    &::after {
      content: '';
      left: 0;
      bottom: calc(100% + 2px);
      width: 0;
      transition: all 0.3s ease-in;
    }

    &:hover {
      position: relative;
      border-bottom: none;
      content: '';
    }

    &:hover::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: $green;
    }
  }
}
</style>
