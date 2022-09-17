<template>
  <div class="tool-box">
    <div v-show="isDialog" class="dialog">
      <span class="dClose" @click="CloseDialog">
        <van-icon color="rgba(0,0,0,.5)" name="cross" size="25"/>
      </span>
      <div class="dTop"></div>
      <div class="dContent">
        <div class="dTitle">常规设置</div>
        <div class="dGroupOne">搜索</div>
        <div class="dSetGroup">
          <div class="dOptBox">
            <span class="dOptCaption">清空搜索历史</span>
            <van-switch v-model="checked" size="20px"/>
          </div>
          <div class="dOptBox">
            <span class="dOptCaption">清空搜索历史</span>
            <van-switch v-model="checked" size="20px"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import {mapMutations, mapState} from 'vuex'

export default {
  setup() {
    const checked = ref(false);
    return {
      checked
    };
  },
  computed: {
    ...mapState(['isDialog'])
  },
  methods: {
    CloseDialog() {
      this.updateIsDialog(false);
    },
    ...mapMutations(['updateIsDialog']),
  }
};
</script>

<style lang="css">

.dialog {
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

.dClose {
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

.dClose:hover {
  background-color: rgb(0, 0, 0, 0.08);

}

.dTop {
  padding: 13px 20px;
  width: 600px;
  height: 50px;
}

.dContent {
  padding: 0 30px 30px;
}

.dTitle {
  padding-bottom: 30px;
  color: black;
  font-size: 26px;
}

.dGroupOne {
  margin-left: 10px;
  padding-bottom: 5px;
  font-weight: bold;
  font-size: 14px;
}

.dSetGroup {
  padding-top: 10px;
  padding-bottom: 3px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 15px;
  background-color: #fff;
  border-radius: 5px;
  transition: 0.25s;
  width: 540px;
  height: 148px;
}

.dOptBox {
  padding-bottom: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dOptCaption {
  top: 8px;
  color: black;
  font-size: 15px;
}
</style>
