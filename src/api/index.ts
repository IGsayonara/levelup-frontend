const BASE_URL = process.env.VUE_APP_API_URL;
console.log(BASE_URL);

export const test = async () => {
  const r = await fetch(BASE_URL).then((data) => {
    return data.text();
  });
  console.log(r);
  return r;
};
