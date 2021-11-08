import { Module, ActionContext } from 'vuex';

export interface User {
  name: string;
  age: number;
}

// state로 사용할 클래스
export class State implements User {
  name: string = '';
  age: number = 0;
}

// module간 state, getters, mutations, actions 따로 관리 가능하다.
const UserModule: Module<State, any> = {
  namespaced: true,
  state: new State(),
  getters: {
    doubleCount(state: State): number {
      return state.age;
    },
  },
  mutations: {
    increment(state: State, step: number): void {
      state.age += step;
    },
  },
  actions: {
    incrementIfOddOnRootSum(state: ActionContext<State, any>, step: number): void {
      state.commit(`increment`, step);
    },
  },
};

export default UserModule;
