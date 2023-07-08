/* eslint-disable no-unused-vars */
export enum _UserActions {
  SET_USER = 'SET_USER',
}

// @ts-ignore
export const UserActions: typeof _UserActions = Object.fromEntries(
  Object.entries(_UserActions).map(([key, value]) => {
    return [key, 'UserModule/' + value];
  })
);
