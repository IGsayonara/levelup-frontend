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
        <div class="git-button">
          <AppButton text="View on Github" primary-color="black" secondary-color="white" @click="redirectToGithub" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import AppButton from '@/components/AppButton/index.vue';
const redirectToGithub = () => {
  window.open('https://github.com/IGsayonara/levelup-frontend', '_blank');
};
</script>

<style scoped lang="scss">
.app-header {
  padding: 3rem 0;

  .logo {
    img {
      width: 23rem;
    }
  }

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

  .git-button {
    margin-left: 4.5rem;
  }

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
