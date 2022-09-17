<template>
  <div class="yiyan">
    <div class="yiyan-box">
      <span class="yiyan-mask"></span>
      <div class="yiyan-text">「 {{ yiyan.hitokoto }} 」</div>
      <div class="yiyan-from">—— {{ yiyan.from_who }} / {{ yiyan.from }}</div>
      <div class="yiyan-more">
        <van-popover
            v-model:show="showPopover"
            placement="left-start"
            theme="light"
        >
          <van-grid clickable column-num="1" style="width: 100px">
            <span
                v-clipboard:copy="yiyan.hitokoto"
                v-clipboard:success="onCopy"
            >
              <van-grid-item
                  style="width: 100px"
                  text="复制"
                  @click="showPopover = false"
              />
            </span>
            <van-grid-item text="搜索" @click="search"/>
            <van-grid-item text="收藏" @click="showPopover = false"/>
          </van-grid>
          <template #reference>
            <van-icon name="ellipsis" size="25"/>
          </template>
        </van-popover>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import axios from "axios";

export default {
  name: "Footer",
  data() {
    //这里存放数据
    return {
      yiyan: {},
    };
  },
  setup() {
    const showPopover = ref(false);

    return {
      showPopover,
    };
  },

  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    // 获取一言
    this.getYiyan();
  },

  //方法集合
  methods: {
    //获取一言
    getYiyan() {
      axios
          .get("https://v1.hitokoto.cn/?c=d&c=i&encode=json") //文件相对路径
          .then((res) => {
            this.yiyan = res.data;
            // console.log(this.yiyan);
          })
          .catch((error) => {
            console.log(error);
          });
    },
    search() {
      window.open(`https://www.baidu.com/s?wd=${this.yiyan.hitokoto}`);
      console.log(this.yiyan.hitokoto);
      this.showPopover = false;
    },
    onCopy(value) {
      this.$toast("一言复制成功(*^▽^*) !");
      // console.log("success", value);
    },
  },
};
</script>

<style lang="less">
.yiyan {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75px;
  position: absolute;
  bottom: 7%;
  left: 50%;
  transform: translateX(-50%);

  .yiyan-box {
    width: 530px;
    padding: 15px 50px;
    border-radius: 15px;
    color: rgba(255, 255, 255, 0.9);
    font-size: small;
    text-align: center;
    cursor: pointer;

    transition: 0.5s;

    .yiyan-mask {
      z-index: -1;
      opacity: 0;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.3);
      transition: 0.5s;
      border-radius: 10px;
    }

    .yiyan-text {
      text-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
      transition: 0.25s;
    }

    .yiyan-from {
      opacity: 0;
      transition: 0.25s;
      text-align: center;
      margin-top: 10px;
    }

    .yiyan-more {
      opacity: 0;
      position: absolute;
      top: 6px;
      right: 6px;
      padding: 0 10px;
      border: none;
      border-radius: 10px;
      background-color: transparent;
      color: rgba(255, 255, 255, 1.8);
      cursor: pointer;
      transition: 0.25s;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.02);
      backdrop-filter: blur(1px);

      .yiyan-from,
      .yiyan-mask,
      .yiyan-more {
        opacity: 1;
      }
    }

    .yiyan-more:hover {
      background-color: rgba(255, 255, 255, 0.06);
      color: #70c000;
    }
  }
}

.van-toast__text {
  width: 240px;
  height: 50px;
  text-align: center;
  background-color: #fff;
  line-height: 50px;
}

.van-popup {
  border-radius: 25px !important;
  position: absolute;
  top: 50px;
}
</style>
