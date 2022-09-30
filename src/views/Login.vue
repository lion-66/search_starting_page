<template>
  <div id="login" v-show="isLoginPage">
    <div class="loginList">
      <div class="from_box" :class="{ from_box2: hhh1 }">
        <div class="register-box" v-if="hhh1">
          <h1>欢迎注册</h1>
          <input type="email" placeholder="邮箱" />
          <input type="password" placeholder="密码" />
          <input type="password" placeholder="确认密码" />
          <button>注册</button>
        </div>
        <div class="login-box" v-else>
          <h1>欢迎登录</h1>
          <input type="text" placeholder="邮箱" />
          <input type="password" placeholder="密码" />
          <button>登录</button>
        </div>
      </div>
      <div class="leftOrright">
        <div class="con-box left">
          <h2>欢迎来到<span>熊猫起始页</span></h2>
          <p>已有账号</p>
          <button @click="hhh">去登录</button>
        </div>
        <div class="con-box right">
          <h2>欢迎来到<span>熊猫起始页</span></h2>
          <p>没有账号?</p>
          <button @click="hhh">去注册</button>
        </div>
      </div>
    </div>
  </div>
  <div class="loginOrUp" v-show="!isLoginPage">
    <!-- <div class="masked"> -->
      <div class="loginPage">
        <div class="loginTop">
          <button class="leftBtn" @click="isSwitchPage1">注册</button>
          <button class="leftBtn" @click="isSwitchPage2">登陆</button>
        </div>
        <div class="loginBottom">
          <div class="register-box" v-show="isSwitch">
            <h1>欢迎注册</h1>
            <input type="email" placeholder="邮箱" />
            <input type="password" placeholder="密码" />
            <input type="password" placeholder="确认密码" />
            <button>注册</button>
          </div>
          <div class="login-box" v-show="!isSwitch">
            <h1>欢迎登录</h1>
            <input type="text" placeholder="邮箱" />
            <input type="password" placeholder="密码" />
            <button>登录</button>
          </div>

        </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      hhh1: false,
      isLoginPage:false,
      isSwitch:true
    };
  },
  methods: {
    hhh() {
      if (this.hhh1 == false) {
        this.hhh1 = true;
      } else {
        this.hhh1 = false;
      }
    },
    isSwitchPage1(){
      if(this.isSwitch){
        this.isSwitch = true
      }else{
        this.isSwitch = true

      }
    },
    isSwitchPage2(){
      if(this.isSwitch = true){
        this.isSwitch = false
      }else{
        this.isSwitch = false

      }
    }
  },
  mounted() {
        let fullWidth =  document.documentElement.clientWidth;
         if(fullWidth <= 700){
            this.isLoginPage = false
          }else{
            this.isLoginPage = true
          }
        window.onresize = ()=>{
          let fullWidth =  document.documentElement.clientWidth;
          if(fullWidth <= 700){
            this.isLoginPage = false
          }else{
            this.isLoginPage = true
          }
        }
        // console.log(fullWidth);
        // console.log(11);
        // console.log(this.isLoginPage);
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
    display: flex;
    justify-content: center;
    color: #000;
    // background-color: #fff;
    z-index: 999;
    .icon {
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
    .from_box {
      position: absolute;
      width: 280px;
      height: 400px;
      border-radius: 10px;
      top: 0px;
      left: 36px;
      display: flex;

      z-index: 9991;
      align-items: center;
      justify-content: center;
      transition: 0.5s;
      .login-box,
      .register-box {
        
        border-radius: 10px;
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
          transition: 0.3s;
        }
        input:focus {
          border: 2px solid #ffae00;
          // width: 210px;
          // height: 35px;
          transform: scale(1.08);
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
          transition: 0.3s;
        }
        button:hover {
          background-color: #00ff11;
        }
      }
      .con-box {
        color: #000;
      }
    }
    .from_box2 {
      transform: translate(350px);
    }
    .leftOrright {
      width: 628px;
      height: 100%;
      border-radius: 10px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      // background-color: orchid;
      background-color: #fff;
      .con-box {
        width: 280px;
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        span{
          font-size: 30px;
          // font-weight: 600;
        }
        // background-color: #ffae00;
      }
         button {
          width: 100px;
          height: 30px;
          background-color: #ffae00;
          border-radius: 20px;
          text-align: center;
          transition: 0.3s;
        }
        button:hover {
          background-color: #00ff11;
        }
    }
  }
}
.loginOrUp{
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
  .loginPage{
      width: 280px;
      height: 400px;
      border-radius: 10px;
      top: 0px;
      left: 36px;
      background-color: skyblue;
      padding: 10px;
      .loginTop{
          width: 100%;
          height: 50px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          .leftBtn{
            width: 100px;
            height: 30px;
            background-color: #00ff11;
            border-radius: 20px;
          }
      }
      .loginBottom{
        width: 100%;
        height: 330px;
        padding: 20px 0;
        .register-box,.login-box{
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          // background-color: orange;
          input {
          width: 200px;
          height: 30px;
          border-radius: 20px;
          padding: 8px 0;
          margin: 10px 0;
          letter-spacing: 3px;
          font-size: 16px;
          text-indent: 8px;
          transition: 0.3s;
        }
        input:focus {
          border: 2px solid #ffae00;
          // width: 210px;
          // height: 35px;
          transform: scale(1.08);
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
          transition: 0.3s;
        }
        button:hover {
          background-color: #00ff11;
        }
        }
      }
  }
}
</style>