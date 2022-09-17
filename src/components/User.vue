<template>
    <div id="User">
        <router-link to="/Login">
          <div class="users">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-yonghu"></use>
            </svg>
         </div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: "User"
}
</script>

<style lang="less" scoped>
  #User{
    width: 30px;
    height: 30px;
    position: absolute;
    top: 3.1%;
    right: 7%;
    cursor: pointer;
    .users{
      width: 100%;
      height: 100%;
      .icon{
        width: 30px;
        height: 30px;
        fill: rgba(255,255,255,.5);
        }
    }
    .users:hover{
      .icon{
        width: 30px;
        height: 30px;
        fill: #fff;
        }
    }
    
  }
</style>