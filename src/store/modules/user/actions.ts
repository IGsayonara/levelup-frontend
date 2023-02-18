import { _UserActions } from '@/store/modules/user/action-types';
import { UserMutations } from '@/store/modules/user/mutation-types';
import { ActionTree } from 'vuex';
import { State } from '@/store/modules/user/state';
import { State as RootState } from '@/store/';
import { loadCurrentUser } from '@/api/user';

export const actions: ActionTree<State, RootState> = {
  [_UserActions.SET_USER]: async ({ commit }) => {
    try {
      const user = await loadCurrentUser();
      commit(UserMutations.SET_USER, user.username);
      commit(UserMutations.SET_PROJECTS, user.projects);
      commit(UserMutations.SET_SKILLS, user.skills);
    } catch (err) {
      console.error('Error loading projects', err);
    }
  },
};

export default actions;
