import { createStore } from 'vuex'

export default createStore({
  state: {
    // 组件显示
            isShow:false,//控制图标
            isStop:false,
            isTime:true,
            isSearch:true,//显示影藏搜索框
            isDialog: false,//隐藏常规设置
            isWallapaer: false,//隐藏更换壁纸
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
    updateIsSearch(state,value){
      state.isSearch = value

    },
    updateIsDialog(state, value) {
      state.isDialog = value;
    },
    updateIsWallapaer(state, value) {
      state.isWallapaer = value;
    },
  },
  actions: {
  },
  modules: {
  }
})
