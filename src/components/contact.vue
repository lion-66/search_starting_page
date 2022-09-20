<template>
  <div class="tool-box">
    <div class="dialog" v-show="isContact">
      <span class="dClose" @click="CloseContact">
        <van-icon name="cross" size="25" color="rgba(0,0,0,.5)" />
      </span>
      <div class="dTop"></div>
      <div class="dContent">
        <div class="dTitle">联系我们</div>
        <P>我们团队成员都是在校大学生，起始页每月都会产生高昂的服务器费用，大部分都由我们从生活费中自费。<br/>
          如果您对这个项目感兴趣的话可以捐助我们。
        </P>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["isContact"]),
  },
  methods: {
    CloseContact() {
      this.updateIsContact(false);
    },

    ...mapMutations(["updateIsContact"]),
  },
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
  background-color: var(--fill-1);
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
</style>
