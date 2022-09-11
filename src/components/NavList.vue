<template>
    <div id="NavList">
       <div class="showNavList">
            <ul class="appletList">
                <li class="contentList" v-for="item in arrList" :key="item">
                    <a target="_blank" :href="item.Url">{{item.name}}</a>
                </li>
            </ul>
       </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arrList:[
                {Url:'https://www.baidu.com/s',name:'百度'},
                {Url:'https://www.bilibili.com',name:'B站'},
                {Url:'https://github.com',name:'GitHub'},
                {Url:'https://music.163.com/',name:'网易云音乐'},
                {Url:'https://cn.vuejs.org/',name:'Vue'},
                {Url:'https://cn.vuejs.org/',name:'Vue'},
                {Url:'https://cn.vuejs.org/',name:'Vue'},
                {Url:'https://cn.vuejs.org/',name:'Vue'},
                {Url:'https://cn.vuejs.org/',name:'Vue'},
                {Url:'https://cn.vuejs.org/',name:'Vue'},
                {Url:'https://cn.vuejs.org/',name:'Vue'},
                {Url:'https://cn.vuejs.org/',name:'Vue'},
                {Url:'https://cn.vuejs.org/',name:'Vue'},
                {Url:'https://cn.vuejs.org/',name:'Vue'},
                {Url:'https://cn.vuejs.org/',name:'Vue'},
                {Url:'https://cn.vuejs.org/',name:'Vue'},
                {Url:'https://cn.vuejs.org/',name:'Vue'},
                {Url:'https://cn.vuejs.org/',name:'Vue'},
                {Url:'https://cn.vuejs.org/',name:'Vue'},
                {Url:'https://cn.vuejs.org/',name:'Vue'},
                
            
            ]
        }
    },
    mounted() {
       
    },
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
        overflow: hidden;
        // border: 1px solid #fff;
        .appletList{
            width: 100%;
            height: 100%;
            overflow-y: auto;
            // overflow-y: hidden;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
           .contentList{
                width: 16%;
                height: 100px;
                margin: 10px;
                border-radius: 10px;
                background-color: #fff;
                a{
                    display: block;
                    width: 100px;
                    height: 100px;
                    color: #000;
                    text-align: center;
                    line-height: 100px;
                }
            }
        }
        .appletList::-webkit-scrollbar{
            display: none;
        }
    }
}
</style>