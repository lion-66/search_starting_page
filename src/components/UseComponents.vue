<template>
  <div id="apply">
    <div class="useApp">
      
        <div class="useAppList" v-for="item in appList" :key="item">
            <!-- <svg aria-hidden="true" class="icon">
              <use :xlink:href="item.icon"></use>
            </svg> -->
            {{item}}
        </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "UseComponents",
  data() {
    return {
      appList:[1,2,3,4,5,6,7,8,9,10]
    }
  },
};
</script>

<style lang="less">
#apply {
  color: #000;
  width: 660px;
  height: 312px;
  padding-left: 10px;
  // background-color: #ccc;
  .useApp{
      width: 660px;
      height: 312px;
      overflow-y: auto;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      .useAppList{
        width: 16%;
        height: 100px;
        background-color: #fff;
        margin: 10px;
        // display: flex;
        // justify-content: center;
        // text-align: center;
      }

  }
}
</style>