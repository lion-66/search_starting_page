<template>

  <div id="searchContent">
    <div id="search" :class="{stop:isShow}" tabindex="0" @blur="showIcons1" @focus="dianji1">
      <div v-show="isShow" class="left">
        <svg v-show="isShow" aria-hidden="true" class="icon">
          <use xlink:href="#icon-dasuolvetuliebiao"></use>
        </svg>
      </div>
      <div class="search-box">
        <input ref="search" v-model="content" class="ipt" placeholder="搜索"
               type="text"
               @blur="showIcons"
               @click="showIcon"
               @focus="dianji"
               @input="searchContent"
               @keyup.enter="handleSearch"
        >
      </div>
      <div v-show="isShow" class="right">
        <svg v-show="isShow" aria-hidden="true" class="icon" @click="handleSearch">
          <use xlink:href="#icon-sousuo1"></use>
        </svg>
      </div>
    </div>
    <!-- <searchList/> -->
    <!-- 搜索列表 -->
    <div v-if="content" class="searchList">
      <ul>
        <li v-for="item in list"
            :key="item" class="listContent">
          <a :href="`https://www.baidu.com/s?wd=${item}`" target="_blank">
            {{ item }}
          </a></li>
      </ul>
    </div>

  </div>
</template>

<script>
import jsonp from 'jsonp'
import {mapMutations, mapState} from 'vuex'

export default {
  data() {
    return {
      content: '',
      refreshSuggestion: null
    }
  },
  props: ['list'],
  created() {
    const refreshSuggestion = this.debounce(() => {
      jsonp(`http://suggestion.baidu.com/su?wd=${this.content}`, null)
    }, 250)

    this.refreshSuggestion = refreshSuggestion
  },
  methods: {
    // 防抖
    debounce(fn, delay=50) {
      let timer = null
      return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          fn.apply(this, args)
        }, delay)
      }
    },
    searchContent() {
      // jsonp(`http://suggestion.baidu.com/su?wd=${this.content}`, null)
      this.refreshSuggestion()
    },
    dianji() {
      this.updateIsStop(true)
    },
    showIcon() {
      this.updateIsShow(true)
    },
    showIcons() {
      this.updateIsStop(false)
      this.updateIsShow(false)
    },
    dianji1() {
      this.updateIsShow(true)
      this.$refs.search.focus();
    },
    showIcons1() {
      this.updateIsShow(false)
    },
    handleSearch() {
      if (this.content != '') {
        window.open(`https://www.baidu.com/s?wd=${this.content}`)
      }
    },
    // handleEnterSearch() {
    //   console.log(123)
    // },
    ...mapMutations(['updateIsShow', 'updateIsStop']),

  },
  computed: {
    ...mapState(['isShow', 'isStop'])
  }
}
</script>


<style lang="less">
#searchContent {
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  #search {
    height: 40px;
    width: 300px;
    //background: rgba(255, 255, 255, .7);
    display: flex;
    padding: 0 10px;
    justify-content: space-around;
    // justify-content: space-between;
    align-items: center;
    border-radius: 30px;
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, .25);
    box-shadow: rgb(0 0 0 / 20%) 0 0 10px;
    transition: all 0.3s ease-in-out;

    .icon {
      width: 20px;
      height: 20px;
      position: relative;
    }

    .left, .right {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all .2s ease-in-out;
    }

    .left:hover, .right:hover {
      background-color: #fff;
    }

    .search-box {
      width: 200px;
      height: 30px;
      overflow: hidden;
      line-height: 30px;

      .ipt {
        width: 100%;
        height: 25px;
        outline: none;
        text-align: center;
        border: 0;
        background: transparent;
        transition: all 0.3s ease-in-out;
      }

      .ipt::placeholder {
        transition: .15s;
        color: #ffffff91
      }

      .ipt:hover::placeholder {
        color: #000;
      }

      .ipt:focus::placeholder {
        color: #ff000055;
      }

      .ipt:hover {
        width: 200px;

      }
    }

  }

  #search:hover {
    .ipt::placeholder {
      color: #000;
    }
  }

  .stop {
    width: 460px !important;
    background-color: #eaebec !important;
    color: #000 !important;
  }

  #search:hover {
    width: 460px;
    background-color: rgba(255, 255, 255, .25);
    color: #000;
  }

  #search:hover::placeholder {
    color: #000;
  }

  .searchList {
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    width: 300px;
    height: 270px;
    padding: 10px;
    border-radius: 15px;
    background: rgba(255, 255, 255, .7);
    color: #000;
    cursor: pointer;

    .listContent {
      height: 20px;
      width: 100%;
      font-size: 15px;
      margin: 5px 0;
      transition: all .3s;
    }

    .listContent:hover {
      padding-left: 10px;
      // background: #c7c3c3a5;
    }
  }
}
</style>
