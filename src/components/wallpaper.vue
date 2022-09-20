<template>
  <div v-show="isWallapaer" class="bgallapaer">
    <span class="bgClose" @click="CloseWallpaper">
      <van-icon color="rgba(0,0,0,.5)" name="cross" size="25" />
    </span>
    <div class="bgTop"></div>
    <div class="bgContent">
      <div class="bgTitle">壁纸偏好</div>
      <div class="bgGroupOne">默认壁纸</div>
      <div v-for="(item, index) of dataList" :key="index" class="bgSetGroup">
        <div v-for="(row, index) of item.data" :key="index" class="bgBox">
          <div @click="selWallpaper(row, 0)" class="wallpaper-item">
            <img class="wallpaper-img" :src="row.src" />
          </div>
        </div>
      </div>
      <div class="bgGroupOne">动态壁纸</div>
      <div class="bgSetGroup">
        <div
          class="bgBox"
          @click="selWallpaper(row, 2)"
          v-for="(row, index) of videoList"
          :key="index"
        >
          <div class="wallpaper-item">
            <video
              :alt="row.title"
              :src="row.src"
              class="wallpaper-img"
            ></video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

import { videoList, imgList } from "@/wallpaperApi";
export default {
  data() {
    return {
      dataList: [
        {
          data: imgList,
        },
      ],
      imgList: imgList,
      videoList: videoList,
      activeSrc: "",
    };
  },
  mounted() {
    this.activeSrc = this.$local.get("wallpaper").src;
  },

  computed: {
    ...mapState(["isWallapaer"]),
  },

  methods: {
    CloseWallpaper() {
      this.updateIsWallapaer(false);
    },
    selWallpaper(row, type) {
      this.activeSrc = row.src;
      this.$store.commit("setWallpaper", row);
      console.log(this.activeSrc);
    },
    ...mapMutations(["updateIsWallapaer"]),
  },
};
</script>

<style lang="css">
.bgallapaer {
  position: absolute;
  z-index: 100;
  overflow: auto;
  height: 500px;
  top: calc(50% - 250px);
    left: calc(50% - 300px);
  background-color: rgb(245, 245, 245);
  font-size: small;
  border-radius: 10px;
  /* overflow: hidden; */
  box-shadow: rgb(0 0 0 / 5%) 0 10px 20px;
  transition: 0.25s;
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
  display: flex;
  flex-wrap: wrap;
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
.wallpaper-img {
  overflow: hidden;
  width: 100%;
  object-fit: cover;
  height: 90px;
  transition: 0.2s;
  display: block;
}
.wallpaper-img:hover {
  transform: scale(1.15);
  transition: 1s;
}
.wallpaper-item {
  overflow: hidden;
  border-radius: 5px;
}
.bgBox {
  width: 33.3%;
  overflow: auto;
  cursor: pointer;
  padding: 5px 5px 5px 5px;
}
</style>
