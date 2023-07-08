import { Project } from '@/types/project';

export interface State {
  projects: Array<Project>;
  isError: boolean;
  isLoading: boolean;
  next?: string;
}

export const state: State = {
  projects: [],
  isError: false,
  isLoading: false,
};
