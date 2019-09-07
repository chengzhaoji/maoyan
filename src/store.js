import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name:""
  },
  mutations: {
    changename(state){
      state.name="movie"
    },
    changecinema(state){
      state.name="cinema"
    }
  },
  getters:{
    getname(state){
      return state.name;
    }
  },
  actions: {

  }
})
