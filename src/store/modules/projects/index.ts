import { state, State } from '@/store/modules/projects/state';
import actions from '@/store/modules/projects/actions';
import mutations from '@/store/modules/projects/mutations';
import { Module } from 'vuex';
import { State as RootState } from '@/store/';

export const ProjectsModule: Module<State, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default ProjectsModule;
