import { _SkillActions } from '@/store/modules/skill/action-types';
import { SkillMutations } from '@/store/modules/skill/mutation-types';
import { ActionTree } from 'vuex';
import { loadSkillById } from '@/api/skill';
import { State } from '@/store/modules/skill/state';
import { State as RootState } from '@/store/';
import { Skill } from '@/types/skill';
export const actions: ActionTree<State, RootState> = {
  [_SkillActions.SET_SKILL]: async ({ commit }, id: number) => {
    try {
      const skill = (await loadSkillById(id)) as Skill;
      commit(SkillMutations.SET_SKILL, skill);
      commit(SkillMutations.SET_ERROR, false);
    } catch {
      commit(SkillMutations.SET_ERROR, true);
    }
  },
};

export default actions;
