<template>
  <div>
    <video
      v-if="wallpaper.src.slice(-4) === '.mp4'"
      class="video"
      autoplay="true"
      loop="true"
      muted="true"
      :src="wallpaper.src"
    ></video>
    <img
      v-else
      :src="wallpaper.src"
      alt=""
      class="img"
      :class="{ isblur: isShow }"
    />
    <Weather v-if="weather" />
    <DateShow />
    <Search v-if="isSearch" :list="list" />
    <NavList v-else />
    <AddUrl />
    <SwitchingMode/>
    <Footer v-if="yiyan" />
    <Tool />
    <Wallpaper />
    <Contact />
    <UserOrIndex />

    <router-view></router-view>
  </div>
</template>
<script>
import { imgList, videoList } from "@/wallpaperApi";
import DateShow from "@/components/DateShow";
import Search from "@/components/Search";
import NavList from "@/components/NavList";
import AddUrl from "@/components/AddUrl";
import { mapState } from "vuex";
import SwitchingMode from "@/components/SwitchingMode";
import Footer from "@/components/Footer.vue";
import Weather from "@/components/Weather.vue";
import UserOrIndex from "@/components/UserOrIndex.vue";
import Tool from "@/components/tool.vue";
import Wallpaper from "@/components/wallpaper.vue";
import Contact from "@/components/contact.vue";

export default {
  components: {
    DateShow,
    Search,
    NavList,
    AddUrl,
    SwitchingMode,
    Footer,
    Weather,
    UserOrIndex,
    Tool,
    Wallpaper,
    Contact,

  },
  data() {
    return {
      list: [],
      imgList: imgList,
      videoList: videoList,
    };
  },
  computed: {
    wallpaper() {
      let wallpaper = this.videoList[0];
      wallpaper.type = 2;
      return this.$store.state.wallpaper || wallpaper;
    },
    yiyan() {
      return this.$store.state.setContent.yiyan;
    },
    weather() {
      return this.$store.state.setContent.weather;
    },
    ...mapState(["isShow", "isSearch"]),
  },
  created() {
    this.$store.dispatch("initSetting");
  },
  mounted() {
    window.baidu = {
      sug: (data) => {
        this.list = data.s;
      },
    };
  },
};
</script>
<style lang="less">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

*::-webkit-scrollbar {
  /*滚动条整体样式*/
  width : 6px;
  height: 1px;
}
*::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  box-shadow : inset 0 0 5px rgba(0, 0, 0, 0.2);
  background : #535353;
}
*::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow : inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background : #ededed;
}

a {
  color: #000;
}

.img,
.video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: -1;
  position: absolute;
  transition: all 0.3s;
}

.isblur {
  transform: scale(1.09);
  filter: blur(10px);
}

body {
  overflow: hidden;
  width: 100%;
  height: 100%;
}

//全局字体
@font-face {
  font-family: FontStyle;
  src: url("~@/assets/font/one.woff2");
}

* {
  font-family: FontStyle;
}
</style>
