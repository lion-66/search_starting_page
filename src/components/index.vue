<template>
  <div>
    <div class="index">
      <van-popover v-model:show="showPopover" placement="bottom" theme="light">
        <van-grid clickable column-num="1" style="width: 120px">
          <van-grid-item text="常规设置" @click="ShowDialog"/>
          <van-grid-item text="更换壁纸" @click="ShowWallapaer"/>
          <van-grid-item text="联系我们" @click="showPopover = false"/>
          <van-grid-item text="反馈" @click="showPopover = false"/>
          <van-grid-item text="浏览器设置" @click="showPopover = false"/>
        </van-grid>
        <template #reference>
          <van-icon color="rgba(255,255,255,.35)" name="setting" size="22"/>
        </template>
      </van-popover>
    </div>
    <Tool/>
    <Wallpaper/>
  </div>
</template>

<script>
import {ref} from "vue";
import {mapMutations, mapState} from "vuex";
import Tool from "./setting/tool.vue";
import Wallpaper from "./setting/wallpaper.vue";

export default {
  setup() {
    const showPopover = ref(false);
    return {
      showPopover,
    };
  },
  computed: {
    ...mapState(["isDialog", "isWallapaer"]),
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
    ...mapMutations(["updateIsDialog", "updateIsWallapaer"]),
  },
  components: {Tool, Wallpaper},
};
</script>

<style scoped>
.index {
  animation: fadeIn 0.25s;
  position: fixed;
  top: 15px;
  right: 40px;
  padding: 10px;
  font-size: 0;
  transition: 0.25s;
  cursor: pointer;
}

.index:hover {
  transform: rotate(60deg);

}

</style>
