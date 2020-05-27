import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const API_PROXY = '/api/cakelist';

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    show: true,
    num: 100,

    loading:true,
    listLi: []
  },
  getters: {
    noShow (state) {
      return !state.show
    }
  },
  mutations: {
    add (state, playload) {
      state.num += playload.n
    },
    getList (state, playload) {
      state[playload.type] = playload.res,
      state.loading = false
    }
  },
  actions: {
    getListLi ({commit}) {
    return axios.get(API_PROXY)
        .then(response => {
          commit('getList', {
            res: response.data,
            type :'listLi' 
          })
        }, response => {
          console.log('error')
        })
    }
  }
})
