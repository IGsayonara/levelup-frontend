import { Project } from '@/types/project';

export interface State {
  project: Project | null;
  isError: boolean;
}

export const state: State = {
  project: null,
  isError: false,
};
