import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';
import { ProjectModule } from '@/store/modules/project';
import { ProjectsModule } from '@/store/modules/projects';
import { SkillModule } from '@/store/modules/skill';
import { UserModule } from '@/store/modules/user';

// define your typings for the store state
export interface State {}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {},
  modules: {
    ProjectsModule,
    ProjectModule,
    SkillModule,
    UserModule,
  },
});

export default store;
