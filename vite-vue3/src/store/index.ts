import { createStore } from 'vuex';
import user from './modules/user';
import person from './modules/person';

export interface RootState {
  ModuleUser: user;
  ModulePerson: ModuleBState;
}

export default createStore({
  modules: { user, person },
});
