<template>
  <div id="login">
    <div class="loginList">
      <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-zuojiantou-"></use>
      </svg>
      <div class="from_box" :class="{from_box2:hhh1}">
        <!-- 注册界面 -->
            <div class="register-box" v-if="hhh1">
                <h1>欢迎注册</h1>
                <!-- <input type="text" placeholder="用户名"> -->
                <input type="email" placeholder="邮箱">
                <input type="password" placeholder="密码">
                <input type="password" placeholder="确认密码">
                <button>注册</button>
            </div>
        <!-- 登录界面 -->
        <div class="login-box" v-else>
          <h1>欢迎登录</h1>
          <input type="text" placeholder="邮件" />
          <input type="password" placeholder="密码" />
          <button>登录</button>
        </div>
        
      </div>
      <!-- 左边 -->
      <!-- <div class="con-box left"> -->
      <!-- <h2>欢迎来到<span>狗熊之家</span></h2> -->
      <!-- <img src="@/assets/fengjing.jpeg" alt=""> -->
      <!-- <p>已有账号</p> -->
      <!-- <button id="login">去登录</button> -->
      <!-- </div> -->
      <!-- 右边 -->
      <!-- <div class="con-box right"> -->
      <!-- <h2>欢迎来到<span>狗熊之家</span></h2> -->
      <!-- <img src="@/assets/fengjing.jpeg" alt=""> -->
      <!-- <p>没有账号?</p> -->
      <!-- <button id="register">去注册</button> -->
      <!-- </div> -->
      <span style="background-color:red;" @click="hhh">哈哈哈</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      hhh1:false
    }
  },
  methods: {
    hhh(){
      if(this.hhh1 == false){
        this.hhh1 = true
      }else{
        this.hhh1 = false

      }
    }
  },
};
</script>

<style lang="less" scoped>
#login {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  .loginList {
    position: relative;
    width: 700px;
    height: 400px;
    color: #000;
    background-color: #fff;
    z-index: 999;
    .icon {
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
    .from_box {
      position: absolute;
      // transform:translate(100px,-30px);
      width: 280px;
      height: 400px;
      border-radius: 10px;
      border: 1px solid #000;
      top: 0px;
      left: 30px;
      display: flex;
      z-index: 9991;
      align-items: center;
      justify-content: center;
      transition: .5s;
      .login-box,.register-box {
        background-color: skyblue;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        input {
          width: 200px;
          height: 30px;
          border-radius: 20px;
          padding: 8px 0;
          margin: 10px 0;
          letter-spacing: 3px;
          font-size: 16px;
          text-indent: 8px;
        }
        input:focus{
          border: 2px solid #ffae00;
          width: 210px;
          height: 35px;

        }
        h1 {
          text-align: center;
          color: #000;
          margin-bottom: 25px;
          font-size: 20px;
          letter-spacing: 5px;
        }
        button {
          width: 100px;
          height: 30px;
          background-color: #ffae00;
          border-radius: 20px;
          text-align: center;
          transition: .3s;
        }
        button:hover{
           background-color: #00ff11;
        }
      }
      
    }
     
        .from_box2{
           transform:translate(350px)
        }
     
    
  }
}
</style>