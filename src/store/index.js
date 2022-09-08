import { createStore } from 'vuex'

export default createStore({
  state: {
    // 组件显示
            isShow:false,
            isStop:false,
            isTime:true,
  },
  getters: {
  },
  mutations: {
    updateIsShow(state,value){
      state.isShow = value
    },
    updateIsStop(state,value){
      state.isShow = value
    },
    updateIsTime(state,value){
      state.isTime = value
    },
  },
  actions: {
  },
  modules: {
  }
})
