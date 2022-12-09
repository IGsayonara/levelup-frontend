export const isIdValid = (id: any) => {
  const isCorrectType = typeof id === 'string' || typeof id === 'number';
  if (isCorrectType) {
    return parseInt(id).toString() === id.toString();
  }
  return false;
};
export const getValidatedId = (id: any) => {
  return isIdValid(id) ? parseInt(id) : null;
};
