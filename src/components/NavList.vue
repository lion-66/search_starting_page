<template>
    <div id="NavList">
       <div class="showNavList">
            <ul class="appletList">
                <li class="contentList"></li>
                <li class="contentList"></li>
                <li class="contentList"></li>
                <li class="contentList"></li>
                <li class="contentList"></li>
                
            </ul>
       </div>
    </div>
</template>

<script>
export default {

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
        border: 1px solid #fff;
        .appletList{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
           .contentList{
                width: 80px;
                height: 80px;
                border-radius: 10px;
                background-color: #fff;
            }
        }
    }
}
</style>