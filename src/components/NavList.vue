<template>
  <div id="NavList">
    <div class="showNavList" :class="{currents:isApp, openList: isApp}">
      <div class="appletList">
        <div v-for="(item, index) in getList" :key="item" class="contentList" @contextmenu.prevent="delet">
          <div class="contentListChild">
            <svg aria-hidden="true" class="icon">
              <use :xlink:href="item.icon"></use>
            </svg>
            <div v-if="isDel" class="del" @click.stop="handleDel(index)">x</div>
            <span>{{ item.name }}</span>
            <a :href="item.Url" target="_blank"></a>
          </div>
        </div>
        <div class="contentList" @click="listCount">
          <div class="contentListChild middle">
            <svg aria-hidden="true" class="icon">
              <use xlink:href="#icon-jiahao"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <UseComponents class="showAppList" :class="{openList: !isApp}"/>
  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex';
import UseComponents from '@/components/UseComponents.vue'
export default {
  components:{UseComponents},
  data() {
    return {
      arrList: [
        {Url: 'https://www.baidu.com/s', name: '百度', icon: '#icon-baidu'},
        {Url: 'https://www.bilibili.com', name: 'B站', icon: '#icon-bilibili'},
        {Url: 'https://github.com', name: 'GitHub', icon: '#icon-GitHub'},
        {Url: 'https://music.163.com/', name: '网易云音乐', icon: '#icon-wangyiyunyinle'},
        {Url: 'https://cn.vuejs.org/', name: 'Vue', icon: '#icon-Vue'},
        {Url: 'https://www.douyin.com/', name: '抖音', icon: '#icon-douyin'},
        {Url: 'https://www.taobao.com/', name: '淘宝', icon: '#icon-shejiaotubiao-08'},
        {Url: 'https://www.jd.com/', name: '京东', icon: '#icon-jingdong_'},
        {Url: 'https://www.amap.com/', name: '高德地图', icon: '#icon-mapOfGaud'},
        {Url: 'https://www.xuexi.cn/', name: '学习强国', icon: '#icon-xuexi'},
      ]
    }
  },
  methods: {
    listCount() {
      if (this.isOff == false) {
        this.updateIsOff(true)
      }
    },
    delet() {
      if (this.isDel == false) {
        this.updateIsDel(true)
      } else {
        this.updateIsDel(false)
      }
    },
    handleDel(index) {
      if (index >= this.arrList.length) {
        console.log('删vuex的，索引为 ', index - this.arrList.length)
        this.$store.commit('deleteNameOrhttps', index - this.arrList.length)
      } else {
        console.log('删组件的，索引为 ', index)
        this.arrList.splice(index, 1)
      }
    },
    ...mapMutations(['updateIsOff', 'updateNameOrhttps', 'updateIsDel'])
  },
  computed: {
    getList() {
      return [...this.arrList, ...this.nameOrhttps]
    },
    ...mapState(['isOff', 'nameOrhttps', 'isDel','isApp'])
  }

}
</script>

<style lang="less">
#NavList {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  .openList {
    position: absolute;
    top: 0;
    left: calc(50% - 330px);
    transform: scale(1)!important;
    opacity: 1!important;
  }
  .showAppList {
    transform: scale(0);
    transition: .35s;
    opacity: 0;
  }
  .showNavList {
    transform: scale(0);
    opacity: 0;
    color: #fff;
    width: 660px;
    height: 312px;
    padding-left: 10px;
    transition: .35s;

    .appletList {
      width: 660px;
      height: 312px;
      overflow-y: auto;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;

      .contentList {
        width: 16%;
        height: 100px;
        margin: 10px;
        display: flex;
        justify-content: center;
        text-align: center;

        .contentListChild:hover {
          .icon {
            fill: #000;
          }
        }

        .contentListChild {
          position: relative;
          width: 90px;
          height: 90px;
          margin-left: 8px;
          background-color: #fff;
          border-radius: 10px;
          display: flex;
          justify-content: space-around;
          flex-direction: column;
          align-items: center;
          transition: .3s;

          span {
            color: #000;
          }

          .del {
            z-index: 2;
            cursor: pointer;
            position: absolute;
            right: -5px;
            top: -5px;
            display: block;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            text-align: center;
            line-height: 20px;
            background-color: red;
          }

          .icon {
            width: 40px;
            height: 40px;
            fill: #99979785;
          }

          a {
            cursor: default;
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 100%;
            height: 100%;
            opacity: 0;
          }
        }


      }

      .contentListChild:hover {
        background-color: #c7c4c4c1;
      }

      .middle {
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        .icon {
          width: 50px;
          height: 50px;
          fill: #a3a2a2;
        }
      }

    }

    .appletList::-webkit-scrollbar {
      display: none;
    }
  }
  .currents{
    transform: scale(1);
  }
}
</style>