import { createStore } from 'vuex';
import UserModule from './modules/user';

export default createStore({
  modules: { UserModule },
});
