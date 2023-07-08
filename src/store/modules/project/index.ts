import { state, State } from '@/store/modules/project/state';
import actions from '@/store/modules/project/actions';
import mutations from '@/store/modules/project/mutations';
import { Module } from 'vuex';
import { State as RootState } from '@/store/';

export const ProjectModule: Module<State, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default ProjectModule;
