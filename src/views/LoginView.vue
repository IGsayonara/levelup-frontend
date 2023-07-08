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
import AppButton from '@/components/AppButton/index.vue';
import { useRouter } from 'vue-router';
import { authLogin } from '@/api/auth';

const router = useRouter();

const login = async () => {
  try {
    await authLogin('IG', '123');
    await router.push('/');
  } catch {
    alert('smth went wrong');
  }
};
</script>

<style scoped></style>
