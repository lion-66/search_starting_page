<template>
  <div v-if="isOff" id="AddUrl">
    <div class="loading">
            <span class="off" @click="showOff">
                <svg aria-hidden="true" class="icon">
                    <use xlink:href="#icon-guanbi"></use>
                </svg>
            </span>
      <div class="uploadContent">
        <input v-model="enterName" class="uploadName" placeholder="输入网站名称" type="text">
        <input v-model="enterHttps" class="uploadHttps" placeholder="输入网址" type="url">
        <button class="btn" @click="addCotents">添加</button>
        <p v-show="isHefa">网址合法</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'

export default {
  name: 'AddUrl',
  data() {
    return {
      enterName: '',
      enterHttps: 'https://',
      isHefa: false
    }
  },
  methods: {
    showOff() {
      this.updateIsOff(false)
    },
    addCotents() {
      if (this.enterName != '' && this.enterHttps != '') {
        this.updateIsOff(false)
        let obj = {Url: this.enterHttps, name: this.enterName, icon: '#icon-wangzhi'}
        this.$store.commit('updateNameOrhttps', obj)

      } else {
        alert('网址名称和网址不能为空！！！请重新操作')
      }
      this.enterName = ''
      this.enterHttps = ''

    },
    ...mapMutations(['updateIsOff', 'updateNameOrhttps'])
  },
  computed: {
    ...mapState(['isOff'])
  },
  watch: {
    enterHttps: {
      handler() {
        // console.log('输入的网址改变了')

        if (isUrl(this.enterHttps)) {
          // console.log('合法')
          this.isHefa = true
        } else {
          // console.log('不合法')
          this.isHefa = false
        }

        function isUrl(url) {
          try {
            new URL(url)
            return true
          } catch (err) {
            return false
          }
        }
      }
    }
  }

}
</script>

<style lang="less">
#AddUrl {
  width: 500px;
  height: 300px;
  position: absolute;
  top: calc(50% - 250px);
    left: calc(50% - 300px);
  padding: 10px;
  margin-left: -250px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0.1px 1.2px 9.2px hsl(0deg 0% 0% / 0.40);

  .loading {
    width: 100%;
    height: 100%;
    position: relative;

    .off {
      display: block;
      width: 27px;
      height: 27px;
      position: absolute;
      top: 0;
      right: 5px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-content: center;
      transition: all .2s;

      .icon {
        width: 25px;
        height: 25px;
      }
    }

    .off:hover {
      background-color: #ccccccb3;
    }

    .uploadContent {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      // border:1px solid #ccc;
      .uploadName, .uploadHttps {
        // background-color: #ccc;
        // outline: none;
        width: 200px;
        height: 40px;
        border: none;
        border-bottom: 1px solid #ccc !important;
      }

      .btn {
        border: none;
        letter-spacing: 4px;
        width: 20vh;
        height: 30px;
        border-radius: 8px;
        background-color: #fcbe61;
        line-height: 30px;
      }

      .btn:hover {
        background-color: #50f8b5;
        transition: background-color 0.5s ease;
      }
    }

  }
}
</style>