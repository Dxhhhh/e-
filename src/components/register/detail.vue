<template>
  <div class="Login">
    <form method="post" action="###">
      <ul class="mform">
        <li><span class="mNameIco"></span><input type="text" placeholder="手机号/邮箱/用户名" class="text" name="username"></li>
        <li>
          <span class="mNameIco1"></span>
          <input type="text" placeholder="图片验证" class="text" name="username">
          <span class="yanzhengma"><img src="./seccode.jpg" name="varify" class="codevar" align="absbottom"></span>
        </li>
        <li>
          <span class="mNameIco2"></span>
          <input type="text" placeholder="验证码" class="text" name="username">
          <a href="javascript:void(0);">获取短信验证码</a>
        </li>
        <li><span class="mNameIco3"></span><input type="text" placeholder="你的昵称/用户名" class="text" name="username"></li>
        <li><span class="mNameIco4"></span><input type="text" placeholder="请设置密码" class="text" name="username"></li>
        <li><span class="mNameIco4"></span><input type="text" placeholder="请确认密码" class="text" name="username" id="username"></li>

      </ul>
    </form>
    <div class="xiayibu">
      <router-link to="/">
        <span class="btn-login btn-dark-login">下一步</span>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default{}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .Login
    box-sizing border-box
    .mform
      box-sizing border-box
      li
        box-sizing border-box
        a
          display inline-block
          background: #fed171;
          position: absolute;
          right: 0;
          top: 0.7em;
          border-radius: 30px;
          width: 130px;
          height 20px
          line-height 20px
          text-align: center;
          padding: 0.3em 0;
          color #fff
          font-size 14px
        input
          display: block;
          height: 21px;
          width: 100%;
          font-size: 13px;
          line-height 21px
          border: none;
          padding: 0px;
          color: #b8b8b8;
          outline: none;
        input::-webkit-input-placeholder
          color:#ccc
        .yanzhengma
          display:block;
          position: absolute;
          top:10px;
          right:0;
      .mNameIco
        bg-image("./ico1.png")
      .mNameIco1
        bg-image1("./ico5.png")
      .mNameIco2
        bg-image1("./ico2.png")
      .mNameIco3
        bg-image1("./ico3.png")
      .mNameIco4
        bg-image1("./ico4.png")
      .mNameIco5
        bg-image1("./ico4.png")
    .xiayibu
      margin-top: 24px
      padding-top: 18px
      text-align: center;
    .btn-dark-login
      background: #d7d7d7;
      color: #fff;
    .btn-login
      display: block;
      margin: 0 10%;
      border-radius: 30px;
      background: #f03131;
      font-size: 15px;
      padding: 5px 0;
      text-align: center;
</style>
