import { state, State } from '@/store/modules/skill/state';
import actions from '@/store/modules/skill/actions';
import mutations from '@/store/modules/skill/mutations';
import { Module } from 'vuex';
import { State as RootState } from '@/store/';

export const SkillModule: Module<State, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default SkillModule;
