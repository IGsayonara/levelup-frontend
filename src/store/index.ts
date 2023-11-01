import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';
import { ProjectModule } from '@/store/modules/project';
import { ProjectsModule } from '@/store/modules/projects';
import { UserModule } from '@/store/modules/user';

// define your typings for the store state
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface State {}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {},
  modules: {
    ProjectsModule,
    ProjectModule,
    UserModule,
  },
});

export default store;
