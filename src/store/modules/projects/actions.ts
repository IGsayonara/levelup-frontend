import { _ProjectsActions } from '@/store/modules/projects/action-types';
import { ProjectsMutations } from '@/store/modules/projects/mutation-types';
import { ActionTree } from 'vuex';
import { Project } from '@/types/project';
import { State } from '@/store/modules/projects/state';
import { State as RootState } from '@/store/';
import { loadAllProjects, loadSearchedProjects } from '@/api/project';

export const actions: ActionTree<State, RootState> = {
  [_ProjectsActions.SEARCH_PROJECTS]: async ({ commit, state }, payload) => {
    try {
      if (state.isLoading) return;

      commit(ProjectsMutations.SET_LOADING, true);

      const data = await loadSearchedProjects(payload);
      commit(ProjectsMutations.SET_PROJECTS, data.data as Project[]);
      commit(ProjectsMutations.SET_NEXT, data.links.next);

      commit(ProjectsMutations.SET_LOADING, false);
      commit(ProjectsMutations.SET_ERROR, false);
    } catch {
      commit(ProjectsMutations.SET_LOADING, false);
      commit(ProjectsMutations.SET_ERROR, true);
    }
  },
  [_ProjectsActions.LOAD_MORE_PROJECTS]: async ({ commit, state }) => {
    try {
      if (state.isLoading) return;
      if (!state.next) return;

      commit(ProjectsMutations.SET_LOADING, true);

      const data = await loadAllProjects(state.next);
      commit(ProjectsMutations.ADD_PROJECTS, data.data as Project[]);
      commit(ProjectsMutations.SET_NEXT, data.links.next);

      commit(ProjectsMutations.SET_LOADING, false);
      commit(ProjectsMutations.SET_ERROR, false);
    } catch {
      commit(ProjectsMutations.SET_LOADING, false);
      commit(ProjectsMutations.SET_ERROR, true);
    }
  },
};

export default actions;
