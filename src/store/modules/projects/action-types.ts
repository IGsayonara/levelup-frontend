/* eslint-disable no-unused-vars */
export enum _ProjectsActions {
  SEARCH_PROJECTS = 'SEARCH_PROJECTS',
  LOAD_MORE_PROJECTS = 'LOAD_MORE_PROJECTS',
}

// @ts-ignore
export const ProjectsActions: typeof _ProjectActions = Object.fromEntries(
  Object.entries(_ProjectsActions).map(
    ([
      key,
      value,
    ]) => {
      return [
        key,
        'ProjectsModule/' + value,
      ];
    }
  )
);
