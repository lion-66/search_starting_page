<template>
  <div>
    <img src="./assets/fengjing1.jpeg" alt=""  class="img" :class="{isblur:isShow}">
    <DateShow/>
    <Search :list="list"/>
  </div>
</template>
<script>
import DateShow from '@/components/DateShow'
import Search from '@/components/Search'
import {mapState} from 'vuex'

export default {
  components:{DateShow,Search},
  data() {
    return {
      list:[]
    }
  },
  computed:{
    ...mapState(['isShow'])
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
  width: 100%;
  height: 100%;
  overflow: hidden;
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

</style>



