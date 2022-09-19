<template>
    <div id="userOrindex">
        <Index/>
        <User/>
    </div>
</template>

<script>
import Index from "@/components/index.vue";
import User from "@/components/User.vue";
export default {
    name:'UserOrIndex',
    components: {
    Index,
    User,
  },
}
</script>

<style lang="less">
    #userOrindex{
       position: absolute;
       width: 100px;
       height: 50px;
       top: 3.2%;
       right: 3%;
    }
</style>