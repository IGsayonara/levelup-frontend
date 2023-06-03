import { ProjectMutations } from '@/store/modules/project/mutation-types';
import { MutationTree } from 'vuex';
import { State } from '@/store/modules/project/state';
import { Project } from '@/types/project';
export const mutations: MutationTree<State> = {
  [ProjectMutations.SET_PROJECT]: (state, payload: Project) => {
    state.project = payload;
  },
  [ProjectMutations.SET_ERROR]: (state, payload: boolean) => {
    state.isError = payload;
  },
};

export default mutations;
