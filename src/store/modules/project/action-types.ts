/* eslint-disable no-unused-vars */
export enum _ProjectActions {
  SET_PROJECT = 'SET_PROJECT',
}

// @ts-ignore
export const ProjectActions: typeof _ProjectActions = Object.fromEntries(
  Object.entries(_ProjectActions).map(([key, value]) => {
    return [key, 'ProjectModule/' + value];
  })
);
