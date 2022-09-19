import { createStore } from "vuex";
import local from "@/localStrong";

const setContent = {
  yiyan:true,//是否显示一言
  weather:true//是否显示和风天气
}

export default createStore({
  state: {
    // 组件显示
    isShow: false, //控制图标
    isStop: false,
    isTime: true,
    isSearch: true, //显示影藏搜索框
    isDialog: false, //隐藏常规设置
    isWallapaer: false, //隐藏更换壁纸
    isOff: false, //显示或者隐藏添加网站页面
    isDel: false, //显示或者隐藏删除图标
    nameOrhttps: [], //接用户添加的数据 []
    wallpaper: {}, //存储壁纸
    setContent: setContent, //引入设置内容
  },
  getters: {},
  mutations: {
    updateIsShow(state, value) {
      state.isShow = value;
    },
    updateIsStop(state, value) {
      state.isShow = value;
    },
    updateIsTime(state, value) {
      state.isTime = value;
    },
    updateIsSearch(state, value) {
      state.isSearch = value;
    },
    updateIsDialog(state, value) {
      state.isDialog = value;
    },
    updateIsWallapaer(state, value) {
      state.isWallapaer = value;
    },
    //更新隐藏添加网站页面
    updateIsOff(state, value) {
      state.isOff = value;
    },
    //更新添加网址
    updateNameOrhttps(state, value) {
      state.nameOrhttps.push(value);
      console.log(value);
    },
    //更新删除图标显示或者隐藏
    updateIsDel(state, value) {
      state.isDel = value;
      console.log(value);
    },
    deleteNameOrhttps(state, index) {
      state.nameOrhttps.splice(index, 1);
    },
    setSetContent(state, val) {
      state.setContent = val || setContent
      local.set("setContent", state.setContent);
    },
    setWallpaper(state, val) {
      state.wallpaper = val;
      local.set("wallpaper", val);
      console.log(val);
    },
  },
  actions: {
    //保存配置
    initSetting(context) {
      const state = context.state;
      state.wallpaper = local.get("wallpaper") || "";
      state.setContent = local.get("setContent") || setContent;
    },
  },
  modules: {},
});
