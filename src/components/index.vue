<template>
  <div>
    <div class="index">
      <van-popover v-model:show="showPopover" placement="bottom" theme="light">
        <van-grid clickable column-num="1" style="width: 120px">
          <van-grid-item text="常规设置" @click="ShowDialog"/>
          <van-grid-item text="更换壁纸" @click="ShowWallapaer"/>
          <van-grid-item text="联系我们" @click="ShowContact"/>
          <van-grid-item text="bug反馈" @click="showPopover = false"/>
          
        </van-grid>
        <template #reference>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shezhitianchong"></use>
            </svg>
        </template>
      </van-popover>
    </div>
    <!-- <Tool/>
    <Wallpaper/> -->
  </div>
</template>

<script>
import {ref} from "vue";
import {mapMutations, mapState} from "vuex";
// import Tool from "@/components/tool.vue";
// import Wallpaper from "@/components/wallpaper.vue";

export default {
  setup() {
    const showPopover = ref(false);
    return {
      showPopover,
    };
  },
  computed: {
    ...mapState(["isDialog", "isWallapaer","isContact"]),
  },

  methods: {
    ShowDialog() {
      this.updateIsDialog(true);
      this.showPopover = false;
    },
    ShowWallapaer() {
      this.updateIsWallapaer(true);
      this.showPopover = false;
    },
    ShowContact(){
      this.updateIsContact(true);
      this.showPopover = false;
    },
    ...mapMutations(["updateIsDialog", "updateIsWallapaer","updateIsContact"]),
  },
  // components: {Tool, Wallpaper},
};
</script>

<style lang="less" scoped>
.index {
  animation: fadeIn 0.25s;
  position: absolute;
  top: 3.2%;
  right: 3%;
  font-size: 0;
  transition: 0.25s;
  cursor: pointer;
      .icon{
    width: 27px;
    height: 27px;
    fill: rgba(255, 255, 255, 0.505);
    }
}

.index:hover {
  transform: rotate(60deg);
  color: #fff;
  .icon{
    width: 25px;
    height: 25px;
    fill: #fff;
    }
}

</style>
