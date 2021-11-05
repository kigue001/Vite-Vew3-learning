import { PERSON } from '../mutation-types';

const state = {
  name: '',
  age: 0,
};

const getters = {
  personInfo: (state: any) => {
    return `이름 : ${state.name}, 나이 : ${state.age}`;
  },
};

// const actions = {
//     changeName({ commit: any }, name: any){
//         commit(PERSON.SET_NAME, name);
//     },
// }

const mutations = {
  [PERSON.SET_NAME](state: any, name: any) {
    state.name = name;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  // actions,
  mutations,
};
