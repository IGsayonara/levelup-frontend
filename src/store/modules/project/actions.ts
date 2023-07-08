import { _ProjectActions } from '@/store/modules/project/action-types';
import { ProjectMutations } from '@/store/modules/project/mutation-types';
import { ActionTree } from 'vuex';
import { loadProjectById } from '@/api/project';
import { Project } from '@/types/project';
import { State } from '@/store/modules/project/state';
import { State as RootState } from '@/store/';

export const actions: ActionTree<State, RootState> = {
  [_ProjectActions.SET_PROJECT]: async ({ commit }, id: number) => {
    try {
      const project = (await loadProjectById(id)) as Project;
      commit(ProjectMutations.SET_PROJECT, project);
      commit(ProjectMutations.SET_ERROR, false);
    } catch {
      commit(ProjectMutations.SET_ERROR, true);
    }
  },
};

export default actions;
