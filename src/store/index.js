import {createStore} from 'vuex'

export default createStore({
    state: {
        // 组件显示
        isShow: false,//控制图标
        isStop: false,
        isTime: true,
        isSearch: true,//显示影藏搜索框
        isDialog: false,//隐藏常规设置
        isWallapaer: false,//隐藏更换壁纸
        isOff: false,//显示或者隐藏添加网站页面
        nameOrhttps: [],//接用户添加的数据 []
        isDel: false,//显示或者隐藏删除图标
    },
    getters: {},
    mutations: {
        updateIsShow(state, value) {
            state.isShow = value
        },
        updateIsStop(state, value) {
            state.isShow = value
        },
        updateIsTime(state, value) {
            state.isTime = value
        },
        updateIsSearch(state, value) {
            state.isSearch = value

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
            state.nameOrhttps.splice(index, 1)
        }
    },
    actions: {},
    modules: {}
})
