<template>
  <div>
    <header class="loginHeader">
      <div class="login_bg">
        <div class="head-top">
          <a href="javascript:void(0)" onclick="history.go(-1)" class="aback page-top"></a>
          <div class="zfont">
            <router-link to="/myepet/register">注册</router-link>
          </div>
        </div>
        <div class="mlogo">
          <img src="./logo.png">
        </div>
        <div class="es_por4">
          <ul id="tags4" class="login_style">
            <li class="selectTag4" @click="changeLogin(true)">普通登录<i v-show="isShow"></i></li>
            <li class="selectTag4" @click="changeLogin(false)">手机动态密码登录<i v-show="!isShow"></i></li>
          </ul>
        </div>
      </div>
    </header>
    <div>
      <div class="commomLogin" v-show="isShow">
        <div class="Login">
          <form method="post" action="###">
            <ul class="mform">
              <li><span class="mNameIco"></span><input type="text" placeholder="手机号/邮箱/用户名" class="text" name="username" id="username"></li>
              <li><span class="mpasswordIco"></span><input type="password" placeholder="输入密码" class="text" name="password" id="password"></li>
            </ul>
          </form>
        </div>
        <div class="ftc">
          <a href="###" class="forget">忘记密码？</a>
        </div>
        <div class="loginbtn">
          <a href="####" class="btn-login" style="margin:0 4%">登 录</a>
        </div>
        <div class="app">APP专享:E宠团5折包邮,首单满99送99<a href="###" class="cblue">去下载</a></div>
        <div style="height:120px"></div>
        <div class="other-login">
          <div class="partners"><b>合作网站登录</b></div>
          <ul class="uList1">
            <li><a href="###"><img src="./login_ico4.png"></a></li>
            <li><a href="###"><img src="./login_ico2.png"></a></li>
          </ul>
        </div>
      </div>
      <div class="commomLogin" v-show="!isShow">
        <div class="Login">
          <form method="post" action="###">
            <ul class="mform">
              <li>
                <span class="mName"></span>
                <input type="text" placeholder="已注册的手机号" class="text" name="username">
              </li>
              <li>
                <span class="mpasswordIco"></span>
                <input type="password" placeholder="请输入图片内容" class="text" name="password">
                <span class="yanzhengma"><img src="./seccode.jpg" name="varify" class="codevar" align="absbottom"></span>
              </li>
              <li>
                <span class="mpasswordIco"></span>
                <input type="password" placeholder="动态密码" class="text" name="password">
                <a href="javascript:void(0);" class="huoqu">获取动态密码</a>
              </li>
            </ul>
          </form>
        </div>
        <div class="ftc">
          <a href="###" class="forget">忘记密码？</a>
        </div>
        <div class="loginbtn">
          <a href="####" class="btn-login" style="margin:0 4%">登 录</a>
        </div>
        <div class="app">APP专享:E宠团5折包邮,首单满99送99<a href="###" class="cblue">去下载</a></div>
        <div style="height:120px"></div>
        <div class="other-login">
          <div class="partners"><b>合作网站登录</b></div>
          <ul class="uList1">
            <li><a href="###"><img src="./login_ico4.png"></a></li>
            <li><a href="###"><img src="./login_ico2.png"></a></li>
          </ul>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  export default{
    data(){
      return{
        isShow: true,
      }
    },
    methods:{
      changeLogin(show){
        this.isShow=show
      },

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .loginHeader
    .login_bg
      background: url(./bg.png) no-repeat
      background-size: 100% 100%
      font-size 12px
      .head-top

        height 50px;
        padding 0 1em
        line-height: 50px;
        position: relative;
        .aback
          display inline-block
          width: 22px;
          height: 20px;
          background url(./personal-bico3.png) no-repeat
          position: absolute;
          margin-top: 16px;
        .page-top
          background-size:12px 19px
        .zfont
          position absolute
          right 10px
          top 0
          font-size 1.6em
          line-height 50px
          a
            color #fff
      .mlogo
        padding 1em 0 2em 0
        img
          display: block;
          margin: auto;
          width: 20%

      .es_por4
        overflow hidden
        background-color: rgba(255,255,255,0.3)

        .login_style
          .selectTag4
            position relative
            display inline-block
            width 50%
            float left
            text-align: center;
            height: 44px;
            line-height: 44px;
            font-size: 15px;
            color: #fff;
            i
              width: 0;
              height: 0;
              border-left: 10px solid transparent;
              border-right: 10px solid transparent;
              border-bottom: 10px solid #fff;
              position: absolute;
              bottom: 0px;
              left: 0;
              right: 0;
              margin: auto;

  .commomLogin
    .Login
      background: #fff;
      border-radius: 0.5em;
      margin: 0 4% 12px 4%;
      padding: 0 1.6%;
      .mform
        li
          border-bottom: #e2e2e2 solid 1px;
          padding: 12px 0 12px 30px;
          position: relative;
          .mNameIco
            bg-image1('./ico3.png')
          .mName
            bg-image('./ico1.png')

          input
            height: 21px;
            width: 100%;
            font-size: 15px;
            outline: none;
          input::-webkit-input-placeholder
            color:#ccc
          .mpasswordIco
            bg-image1('./ico4.png')
          .yanzhengma
            display:block;
            position: absolute;
            top:5px;
            right:0;
          .huoqu
            background: #fff;
            color: #ff4259;
            font-size 12px
            border: 1px solid #eb4c33;
            position: absolute;
            right: 0;
            top: 7px;
            border-radius: 3px;
            width: 100px;
            text-align: center;
            padding: 0.7em 0;

    .ftc
      padding-left: 2em;
      padding-right: 2em;
      overflow hidden
      .forget
        float right
        display inline-block
        font-size: 14px
        line-height 20px


    .loginbtn
      box-sizing border-box
      text-align center
      border-radius 5px
      padding-top: 0.5em;
      .btn-login
        color #fff
        display: block;
        line-height 18px
        letter-spacing: 5px;
        margin: 0 10%;
        border-radius: 5px;
        background: #2ec975;
        font-size: 15px;
        padding: .6em 0;
    .app
      line-height 20px
      text-align center
      color: #666;
      font-size: 12px
      margin-top: 6px
      .cblue
          color: #0ca4ed;

    .other-login
      box-sizing border-box
      .partners
        text-align center
        margin-top 8px
        color: #d7d7d7
      .uList1
        padding: 18px 0
        overflow hidden
        li
          box-sizing border-box
          width: 33.3%;
          padding: 0 1.2em;
          float: left;
          display: inline;
          a
            display block
            img
              width: 60%;
              height: auto;
              display: block;
              margin: auto;
              max-width: 176px;


</style>
