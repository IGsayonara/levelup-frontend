import { Skill } from '@/types/skill';
import { Project } from '@/types/project';

export interface State {
  username: string | null;
  skills: Skill[];
  projects: Project[];
}

export const state: State = {
  username: null,
  projects: [],
  skills: [],
};
