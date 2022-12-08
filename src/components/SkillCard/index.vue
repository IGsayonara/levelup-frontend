<template>
  <div class="skill-card">
    <h4 class="skill-card__title">{{ title }}</h4>
    <img class="skill-card__image" :src="imageUrl" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  imageUrl?: string;
}

withDefaults(defineProps<Props>(), {
  imageUrl: '/img/404.jpg',
});
</script>

<style scoped lang="scss">
.skill-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7rem;
  padding: 2em 1.5em;
  border: 1px solid #e5e5e5;
  border-radius: 4rem;
  background-color: white;
  transition: all 0.3s ease-in;
  cursor: pointer;

  &__title {
    width: 100%;
    font-weight: 500;
    transition: all 0.3s ease-in;
  }

  &__image {
    width: 4.5rem;
    height: 4.5rem;
  }

  &:hover {
    border-color: $orange;
    filter: drop-shadow(1px 1px 6px $orange);
  }
  &:hover & {
    &__title {
      color: $orange;
    }
  }
}
</style>
