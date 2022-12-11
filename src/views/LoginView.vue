<template>
  <section>
    <div class="container">
      <div>
        <AppButton text="Log in" @click="login" />
      </div>
    </div>
  </section>
</template>

<script setup>
import AppButton from '@/components/AppButton';
import { useRouter } from 'vue-router';

const router = useRouter();

const login = async () => {
  localStorage.setItem('jwe_token', 'true');
  await router.push('/');
};
</script>

<style scoped></style>
