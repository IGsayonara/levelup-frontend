<template>
  <header class="app-header">
    <div class="container">
      <div class="app-header__wrapper">
        <div class="logo">
          <img src="/img/logo.png" alt="Level UP" />
        </div>
        <nav class="navigation">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Index',
};
</script>

<style scoped lang="scss">
.app-header {
  padding: 24px 0;

  .navigation {
    a {
      position: relative;
      color: black;
      font-size: 14px;
      font-weight: 500;
      text-transform: uppercase;
      text-decoration: none;
      margin-right: 35px;

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

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
