export const isIdValid = (_id: any) => {
  return true;
};
export const getValidatedId = (id: any) => {
  return isIdValid(id) ? parseInt(id) : null;
};
