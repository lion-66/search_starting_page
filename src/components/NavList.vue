<template>
    <div id="NavList">
       <div class="showNavList">
            <div class="appletList">
                <div class="contentList" v-for="(item, index) in getList" :key="item" @contextmenu.prevent="delet">
                     <div class="contentListChild">
                        <svg class="icon" aria-hidden="true">
                            <use :xlink:href="item.icon"></use>
                        </svg>
                        <div class="del" v-if="isDel" @click.stop="handleDel(index)">x</div>
                        <span>{{item.name}}</span>
                        <a target="_blank" :href="item.Url"></a>
                     </div>
                </div>
                <div class="contentList" @click="listCount">
                    <div class="contentListChild middle">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-jiahao"></use>
                        </svg>
                    </div>
                </div>
            </div>
            
       </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
    data() {
        return {
            arrList:[
                {Url:'https://www.baidu.com/s',name:'百度',icon:'#icon-baidu'},
                {Url:'https://www.bilibili.com',name:'B站',icon:'#icon-bilibili'},
                {Url:'https://github.com',name:'GitHub',icon:'#icon-GitHub'},
                {Url:'https://music.163.com/',name:'网易云音乐',icon:'#icon-wangyiyunyinle'},
                {Url:'https://cn.vuejs.org/',name:'Vue',icon:'#icon-Vue'},
            ]
        }
    },
    methods: {
        listCount(){
            if(this.isOff==false){
                this.updateIsOff(true)
            }
        },
        delet(){
           if(this.isDel == false){
             this.updateIsDel(true)
           }else
           {
             this.updateIsDel(false)
           }
        },
        handleDel(index) {
            if(index >= this.arrList.length) {
                console.log('删vuex的，索引为 ', index - this.arrList.length)
                this.$store.commit('deleteNameOrhttps', index - this.arrList.length)
            } else {
                console.log('删组件的，索引为 ', index)
                this.arrList.splice(index, 1)
            }
        },
        ...mapMutations(['updateIsOff','updateNameOrhttps','updateIsDel'])
    },
    computed:{
        getList(){
            return [...this.arrList,...this.nameOrhttps]
        },
        ...mapState(['isOff','nameOrhttps','isDel'])
    }
}
</script>

<style lang="less">
#NavList{
     width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    .showNavList{
        color: #fff;
        width: 660px;
        height: 312px;
        padding-left: 10px;
        .appletList{
            width: 660px;
            height: 312px;
            overflow-y: auto;
            display: flex;
            flex-wrap: wrap;
            align-content: flex-start;
           .contentList{
                width: 16%;
                height: 100px;
                margin: 10px;
                display: flex;
                justify-content: center;
                text-align: center;
                .contentListChild{
                    position: relative;
                    width: 90px;
                    height: 90px;
                    margin-left: 8px;
                    background-color: #fff;
                    border-radius: 10px;
                    display: flex;
                    justify-content: space-around;
                    flex-direction: column;
                    align-items: center;

                    span{
                        color: #000;
                    }
                    .del{
                        z-index: 2;
                        cursor: pointer;
                        position: absolute;
                        right: -5px;
                        top: -5px;
                        display: block;
                        width: 20px;
                        height: 20px;
                        border-radius: 50%;
                        text-align: center;
                        line-height: 20px;
                        background-color: red;
                    }
                    .icon{
                        width: 40px;
                        height: 40px;
                        fill: #99979785;
                    }
                     a{
                        cursor: default;
                    position: absolute;
                    top: 0;
                    left: 0;  
                    display: block;
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                    }
                }
                
                
            }
            .contentListChild:hover{
                background-color: #c7c4c4c1;
            }
           
            .middle{
                // width: 90px;
                // height: 90px;
                // border-radius: 10px;
                background-color: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
                .icon{
                    width: 50px;
                    height: 50px;
                    fill: #a3a2a2;
                }
            }
            .middle>.icon:hover{
                    fill: #000;
            }
        }
        .appletList::-webkit-scrollbar{
            display: none;
        }
    }
}
</style>