//封装localStrong
const local = {
    // 保存数据 params: 1:key  2:value #
    set(key = '', value = '') {
      localStorage.setItem(key, JSON.stringify(value))
    },//end
    // 获取数据  params: 1:key#
    get(key = null) {
      return JSON.parse(localStorage.getItem(key) || null) || ''
    },//end
    // 清空localStrong #
    clear() {
      localStorage.clear()
    },//end
    // 移除localStrong某一项 params: 1:key#
    remove(key = '') {
      return localStorage.removeItem(key)
    }
  }
  
  export default local