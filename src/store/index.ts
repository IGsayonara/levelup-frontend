import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';
import { ProjectModule } from '@/store/modules/project';
import { SkillModule } from '@/store/modules/skill';

// define your typings for the store state
export interface State {}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {},
  modules: {
    ProjectModule,
    SkillModule,
  },
});

export default store;
