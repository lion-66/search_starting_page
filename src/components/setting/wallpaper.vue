<template>
  <div v-show="isWallapaer" class="bgallapaer">
    <span class="bgClose" @click="CloseWallpaper">
      <van-icon color="rgba(0,0,0,.5)" name="cross" size="25"/>
    </span>
    <div class="bgTop"></div>
    <div class="bgContent">
      <div class="bgTitle">壁纸偏好</div>
      <div class="bgGroupOne">默认</div>
      <div class="bgSetGroup">
        <div class="bgPreviewBox"></div>
        <div class="bgPreviewBox"></div>
        <div class="bgPreviewBox"></div>
        <div class="bgPreviewBox"></div>
        <div class="bgPreviewBox"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import {mapMutations, mapState} from "vuex";

export default {
  setup() {
    const checked = ref(false);
    return {
      checked,
    };
  },


  computed: {

    ...mapState(["isWallapaer"]),
  },

  methods: {
    CloseWallpaper() {
      this.updateIsWallapaer(false);
    },

    ...mapMutations(["updateIsWallapaer"]),
  },
};
</script>

<style lang="css">
.bgallapaer {
  position: absolute;
  z-index: 100;
  width: 600px;
  height: 500px;
  top: calc(50% - 250px);
  left: calc(50% - 300px);
  background-color: rgb(245, 245, 245);
  font-size: small;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 5%) 0 10px 20px;
  transition: 0.25s;
  /* display: none; */
}

.bgClose {
  z-index: 99;
  position: absolute;
  top: 5px;
  right: 5px;
  width: 50px;
  height: 40px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.25s;
  text-align: center;
  line-height: 50px;
}

.bgClose:hover {
  background-color: rgb(0, 0, 0, 0.08);
}

.bgTop {
  padding: 13px 20px;
  width: 600px;
  height: 50px;
}

.bgContent {
  padding: 0 30px 30px;
}

.bgTitle {
  padding-bottom: 30px;
  color: black;
  font-size: 26px;
}

.bgGroupOne {
  margin-left: 10px;
  padding-bottom: 5px;
  font-weight: bold;
  font-size: 14px;
}

.bgSetGroup {
  padding-left: 10px;
  width: 540px;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
  /* margin-top: 8px; */
}

.bgPreviewBox {
  margin-right: 8px;
  margin-bottom: 8px;
  width: 135px;
  height: 90px;
  border-radius: 6px;
  overflow: hidden;
  background-color: aquamarine;
}
</style>
