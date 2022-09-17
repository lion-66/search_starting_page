<template>
  <div id="login">
      <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-zuojiantou-"></use>
      </svg>
      
  </div>
</template>

<script>
export default {
name:'Login'
}
</script>

<style lang="less" scoped>
    #login{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        color: #000;
        background-color: #fff;
        z-index: 999;
        .icon{
          width: 30px;
          height: 30px;
          cursor: pointer;
        }
        
    }
</style>