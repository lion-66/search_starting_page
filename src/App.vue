<template>
  <div>
    <img src="./assets/fengjing.jpeg" alt=""  class="img" :class="{isblur:isShow}">
    <Weather/>
    <DateShow/>
    <Search :list="list" v-if="isSearch"/>
    <NavList v-else/>
    <AddUrl/>
    <Footer/>
    <index/>
  </div>
</template>
<script>
import DateShow from '@/components/DateShow'
import Search from '@/components/Search'
import NavList from '@/components/NavList'
import AddUrl from '@/components/AddUrl'
import {mapState} from 'vuex'
import Footer from '@/components/Footer.vue'
import Weather from '@/components/Weather.vue'
import Index from '@/components/index.vue'
export default {
  components:{ DateShow, Search, NavList,AddUrl, Footer, Weather, Index },
  data() {
    return {
      list:[]
    }
  },
  computed:{
    ...mapState(['isShow','isSearch'])
  },
  mounted() {
      //  let self = this
       window.baidu = {
         sug: (data) => {
          //  console.log(data.s);
          // console.log(self)
           this.list = data.s;
          }
      }
  },

}
</script>
<style lang="less">
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
a{
  color: #000;
}
.img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: -1;
  position: absolute;
  transition: all .3s;
}
.isblur{
  transform: scale(1.09);
  filter: blur(10px);
}
body {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
//全局字体
@font-face{
  font-family: FontStyle;
  src: url("~@/assets/font/one.woff2");
}
*{
  font-family: FontStyle;
}
</style>
