import { state, State } from '@/store/modules/user/state';
import actions from '@/store/modules/user/actions';
import mutations from '@/store/modules/user/mutations';
import { Module } from 'vuex';
import { State as RootState } from '@/store/';

export const UserModule: Module<State, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default UserModule;
