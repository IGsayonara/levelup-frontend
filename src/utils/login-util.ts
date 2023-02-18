export const checkAuthPromise = async () => {
  if (localStorage.getItem('jwt_token')) return true;
  const isLogin = new Promise<boolean>((resolve) => {
    setTimeout(() => {
      if (localStorage.getItem('jwt_token')) {
        resolve(true);
      }
      resolve(false);
    }, 300);
  });
  return await isLogin;
};
