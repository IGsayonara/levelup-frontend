import { ProjectsMutations } from '@/store/modules/projects/mutation-types';
import { MutationTree } from 'vuex';
import { State } from '@/store/modules/projects/state';
import { Project } from '@/types/project';
export const mutations: MutationTree<State> = {
  [ProjectsMutations.SET_PROJECTS]: (state, payload: Project[]) => {
    state.projects = payload;
  },
  [ProjectsMutations.ADD_PROJECTS]: (state, payload: Project[]) => {
    state.projects = [...state.projects, ...payload];
  },
  [ProjectsMutations.SET_NEXT]: (state, payload: string) => {
    state.next = payload;
  },
  [ProjectsMutations.SET_ERROR]: (state, payload: boolean) => {
    state.isError = payload;
  },
  [ProjectsMutations.SET_LOADING]: (state, payload: boolean) => {
    state.isLoading = payload;
  },
};

export default mutations;
