import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users:[],
    active_user: 0
  },
  getters: {
    users_length(state){
      return state.users.length
    },
    active_user(state){
      for(let user in state.users){
        if(state.users[user].id == state.active_user){
          return state.users[user]
        }
      }
    }
  },
  mutations: {
    setUsers(state, users){
      if(users){
        state.users = users
      }
    },
    setActiveUser(state,id){
      if(id){
        localStorage.setItem("active_user", id)
        state.active_user = id
      }
    }
  },
  actions: {
    setUsers(context,users){
      context.commit('setUsers',users)
    },
    setActiveUser(context,id){
      context.commit("setActiveUser",id)
    }
  },
  modules: {
  }
})
