import { SkillMutations } from '@/store/modules/skill/mutation-types';
import { MutationTree } from 'vuex';
import { State } from '@/store/modules/skill/state';
import { Skill } from '@/types/skill';

export const mutations: MutationTree<State> = {
  [SkillMutations.SET_SKILL]: (state, payload: Skill) => {
    state.title = payload.title;
    state.id = payload.id;
  },
  [SkillMutations.SET_ERROR]: (state, payload: boolean) => {
    state.isError = payload;
  },
};

export default mutations;
