import { ref } from 'vue';

export const useAuth = () => {
  const isAuth = ref(true);
  return {
    isAuth,
  };
};
