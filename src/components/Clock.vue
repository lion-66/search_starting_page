<template>
  <div class="clock">
    <canvas id="can" width="105" height="105"></canvas>
  </div>
</template>

<script>
export default {
    name:'Clock',
    mounted(){
        const can = document.querySelector('#can')
        const c = can.getContext('2d')
        console.log(c);
        reder()
        function reder() {

            c.clearRect(0,0,103,103)
            // 保存之前状态
            c.save();
            c.beginPath()//开始画
            c.translate(52, 54)
            c.rotate(-Math.PI / 2)
            c.save()
            c.arc(0, 0, 50, 0, 2 * Math.PI)
            c.strokeStyle = '#fff'
            c.lineWidth = 0
            c.stroke()
            c.closePath()//结束画

            c.restore();
            // 绘制刻度表
            c.save()
            for (let i = 0; i < 12; i++) {
                c.rotate(Math.PI / 6)
                c.beginPath()//开始画
                c.moveTo(40, 0)
                c.lineTo(50, 0)
                c.strokeStyle = '#fff'
                c.lineWidth = 5
                c.stroke()
                c.closePath()//结束画
            }

            c.restore();


            c.save()
            // 获取时分秒
            const time = new Date()
            let hour = time.getHours()
            const minute = time.getMinutes()
            const second = time.getSeconds()
            // console.log(hour + ':', minute, ":", second)
            hour = hour > 12 ? hour - 12 : hour
            // console.log(hour)


            // 绘制秒针
            c.beginPath()//开始画
            c.rotate(Math.PI / 30 * second)
            c.moveTo(-15, 0)
            c.lineTo(40, 0)
            c.strokeStyle = '#000'
            c.lineWidth = 2
            c.stroke()
            c.closePath()//结束画

            c.restore();


            // 绘制分针针
            c.save()
            c.beginPath()//开始画
            c.rotate(2 * Math.PI / 60 * minute + 2 * Math.PI / 3600 * second)
            c.moveTo(-10, 0)
            c.lineTo(34, 0)
            c.strokeStyle = '#fff'
            c.lineWidth = 2
            c.stroke()
            c.closePath()//结束画

            c.restore();

            // 绘制时针
            c.save()
            c.beginPath()//开始画
            c.rotate(2 * Math.PI / 12 * hour + 2 * Math.PI / 60 / 12 * minute + 2 * Math.PI / 12 / 60 / 60 * second)
            c.moveTo(-8, 0)
            c.lineTo(27, 0)
            c.strokeStyle = '#fff'
            c.lineWidth = 2
            c.stroke()
            c.closePath()//结束画
            // c.restore();


            c.beginPath()//开始画
            c.arc(0, 0, 5, 0, 2 * Math.PI)
            c.fillStyle = '#fff'
            c.fill()
            c.closePath()//结束画


            c.restore();
            // c.restore();
            c.restore();
        }
        setInterval(reder,1000)
    }
}
</script>

<style lang="less">
    .clock{
        width: 105px;
        height: 105px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: .3s;
        
    }
    // .clock:hover{
    .clock:hover{
            transform: scale(1.1);
        }
    // }
</style>