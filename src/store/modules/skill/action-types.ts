/* eslint-disable no-unused-vars */
export enum _SkillActions {
  SET_SKILL = 'SET_SKILL',
}

// @ts-ignore
export const SkillActions: typeof _SkillActions = Object.fromEntries(
  Object.entries(_SkillActions).map(([key, value]) => {
    return [key, 'SkillModule/' + value];
  })
);
