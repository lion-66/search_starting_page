<template>
   <div class="dateShowTop">
        <div id="dateShow" @click="showSearch" v-show="isTime" tabindex="0">
            <span class="big font-thin" >
                <span>{{nowTime}}</span>
            </span>
        </div>
   </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
    data() {
        return {
            nowTime:'',
           
        }
    },
    computed:{
    ...mapState(['isTime','isSearch','isShow'])
  },
   methods: {
    showSearch(){
        // 判断Search组件是否显示
        if(this.isSearch == true){
            this.updateIsSearch(false)
            
        }else{
             this.updateIsSearch(true)
        }
        if(this.isShow == false){
                this.updateIsShow(true)
        }else{
                this.updateIsShow(false)
        }
    },
    // 判断Search组件是否显示
    showSearch2(){
         if(this.isSearch == true){
            this.updateIsSearch(false)
            
        }else{
             this.updateIsSearch(true)
        }
        if(this.isShow == false){
                this.updateIsShow(true)
        }else{
                this.updateIsShow(false)
        }
    },
    ...mapMutations(['updateIsTime','updateIsSearch','updateIsShow'])
   },
    mounted() {
        const abc = ()=>{
            let date = new Date();
            let day = date.getDay()
            let sign2 = ':';
            let hour = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            let weekArr = ['星期一','星期二','星期三','星期四','星期五','星期六','星期日']
            let week = weekArr[day-1];
            if(minutes >=0 && minutes <= 9){
                minutes = '0'+minutes
            }
            if(seconds >=0 && seconds <= 9){
                seconds = '0'+seconds
            }
            
            this.nowTime = hour + sign2 +minutes + sign2+seconds
        }
        abc()
        this.timer = setInterval(abc,1000)
    },
    beforeDestroy() {
        if(this.timer){
        clearInterval(this.timer)
        }
    },

}
</script>

<style lang="less">
.dateShowTop{
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    #dateShow{
        width: 250px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: #fff;
        span{
            cursor: pointer;
            font-size: 28px;
            // display: flex;
            //     justify-content: space-around;
            // justify-content: center;
            align-items: center;
            transition: all .3s;
            text-align: center;
            .fontBig{
                font-size: 15px;
            }
        }
        span:hover{
            transform: scale(1.3);
        }
    }
}
</style>
