<template>
    <div class="Login">
      <form method="post" action="###">
        <ul class="mform">
          <li>
            <span class="mNameIco"></span>
            <input type="text" placeholder="手机号/邮箱/用户名" class="text" name="username" v-model="changeValue">
          </li>
        </ul>
      </form>
      <div class="xiayibu">
        <router-link to="/myepet/register/detail">
          <span :class='{"btn-login":changeValue,"btn-dark-login":!changeValue}'>下一步</span>
        </router-link>
      </div>
    </div>
</template>

<script>
  export default{
    data(){
      return{
        changeValue:''
      }
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .Login
    background: #fff;
    border-radius: 0.5em;
    margin-left: 12px;
    padding: 0 1.6%;
    .mform
      li
        border-bottom: #e2e2e2 solid 1px;
        border-bottom: #e2e2e2 solid 1px;
        padding: 14px 0 14px 30px;
        position: relative;
        .mNameIco
          bg-image("./ico1.png")
          input
            height: 21px;
            width: 100%;
            font-size: 15px;
            outline: none;
          input::-webkit-input-placeholder
            color:#ccc
    .xiayibu
      margin-top: 24px
      padding-top: 18px
      text-align: center;
    .btn-dark-login
      background: #d7d7d7;
      color: #fff;
      display: block;
      margin: 0 10%;
      border-radius: 30px;
      font-size: 15px;
      padding: 5px 0;
      text-align: center;
    .btn-login
      display: block;
      margin: 0 10%;
      border-radius: 30px;
      background: #f03131;
      font-size: 15px;
      padding: 5px 0;
      text-align: center;











</style>
