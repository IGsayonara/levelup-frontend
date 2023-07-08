import { UserMutations } from '@/store/modules/user/mutation-types';
import { MutationTree } from 'vuex';
import { State } from '@/store/modules/user/state';
import { Project } from '@/types/project';
import { Skill } from '@/types/skill';

export const mutations: MutationTree<State> = {
  [UserMutations.SET_PROJECTS]: (state, payload: Project[]) => {
    state.projects = payload;
  },
  [UserMutations.SET_SKILLS]: (state, payload: Skill[]) => {
    state.skills = payload;
  },
  [UserMutations.SET_USER]: (state, payload: string) => {
    state.username = payload;
  },
};

export default mutations;
