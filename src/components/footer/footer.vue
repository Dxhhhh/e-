<template>
  <div class="footernav">
    <ul class="clearfix">
      <router-link to="/dog/home">
        <li class="index-a dogon"></li>
      </router-link>
      <router-link to="/dog/type">
        <li class="type-a"></li>
      </router-link>
      <router-link to="/dog/shopCard">
        <li class="cart-a"></li>
      </router-link>
      <router-link to="/myepet">
        <li class="myepet-a"></li>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default{}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footernav
    box-sizing border-box
    border-top: 1px solid #e7e7e7;
    height: 45px;
    line-height: 45px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 103;
    background: #fff;
    .clearfix
      display flex
      width 100%
      height 55px
      a
        flex 1
        display inline-block
        overflow hidden
        li
          width 100%
          float: left;
          height: 55px;
        .index-a
          background: url(../../../static/footer/main_tab_1_sel.png) no-repeat center 2px;
          background-size: auto 40px
        .type-a
          background: url(../../../static/footer/main_tab_2.png) no-repeat center 2px;
          background-size: auto 40px
        .cart-a
          background: url(../../../static/footer/main_tab_3.png) no-repeat center 2px;
          background-size: auto 40px
        .myepet-a
          background: url(../../../static/footer/main_tab_4.png) no-repeat center 2px;
          background-size: auto 40px
</style>
