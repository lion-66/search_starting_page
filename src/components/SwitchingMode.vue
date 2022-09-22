<template>
  <div id="toggle" v-show="!isSearch">
        <div class="switch">
            <span class="cut1" @click="networkPage" :class="{current:isApp}"></span>
            <span class="cut2"  @click="appPage" :class="{current:!isApp}"></span>
        </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
    name:'SwitchingMode',
    methods: {
        networkPage(){
            if(!this.isApp){
                this.updateIsApp(true)
            }
    },
        appPage(){
            if(this.isApp){
                this.updateIsApp(false)
            }
        },
        ...mapMutations(['updateIsApp'])
    },
    computed:{
        ...mapState(['isSearch','isApp'])
    },
    mounted() {
        console.log(this.isApp);
    },

}
</script>

<style lang="less">
    #toggle{
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top:20px;
        .switch{
            width: 100px;
            height: 25px;
            border-radius: 20px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            cursor: pointer;
            .cut1,.cut2{
                display: block;
                width: 30px;
                height: 10px;
                background-color: #ffffff84;
                border-radius: 10px;
                cursor: pointer;
            }
            .cut1:hover,.cut2:hover{
                background-color: #fff;
                
            }
            .current{
                background-color: #fff;
            }
        }
        .switch:hover{
            background-color: #cccccc7b;
            
        }
    }
</style>