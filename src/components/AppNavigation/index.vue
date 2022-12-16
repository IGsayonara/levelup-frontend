<template>
  <nav class="navigation">
    <router-link to="/">Home</router-link>
    <router-link :to="{ path: '/project/123' }">Project</router-link>
    <router-link :to="{ path: '/project/meow' }">Guard</router-link>
    <router-link :to="{ path: '/smth' }">Not found</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Index',
};
</script>

<style scoped lang="scss">
.navigation {
  margin-left: auto;
  a {
    position: relative;
    color: black;
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
    margin-left: 4.5rem;

    &:hover {
      border-bottom: none;
    }

    &::after {
      content: '';
      position: absolute;
      top: calc(100% + 2px);
      width: 0;
      left: 0;
      height: 2px;
      background-color: $orange;
      transition: all 0.3s ease-in;
    }

    &:hover::after {
      width: 100%;
    }
  }
}
</style>
