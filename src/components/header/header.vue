<template>

  <div class="header">
      <xiazaiApp></xiazaiApp>
      <div class="main">
        <div class="clearfix">
          <div class="epet-search">
            <router-link to="/dog/address">
              <div class="rela location">
                <span class="catordog c89">狗狗站</span>
                <span class="c89">|</span>
                <span data-name="my-place" class="myposition c89 ft13">重庆</span>
                <i></i>
              </div>
            </router-link>

            <p class="search-text" >
              <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
              <span class="eico serach-ico"></span>
            </p>
            <a href="###" class="epet-category">
              <img src="//static.epetbar.com/static_web/wap/src/images/mydope.png">
            </a>
          </div>
        </div>
      </div>
      <div class="content">
      <div class="find_nav" ref="tab">
        <ul class="tab">
          <li class="tab_item active">
            <router-link to="/dog/home">
              <span class="rela"><span>首页</span><i class="active"></i></span>
            </router-link>
          </li>
          <li class="tab_item">
            <router-link to="/dog/foods">
              <span class="rela"><span>主粮</span><i></i></span>
            </router-link>
          </li>
          <li class="tab_item">
            <router-link to="/dog/medical">
              <span class="rela"><span>医疗保健</span><i></i></span>
            </router-link>
          </li>
          <li class="tab_item">
            <router-link to="/dog/toy">
              <span class="rela"><span>零食玩具</span><i></i></span>
            </router-link>
          </li>
          <li class="tab_item">
            <router-link to="/dog/goOut">
              <span class="rela"><span>日用外出</span><i></i></span>
            </router-link>
          </li>
          <li class="tab_item">
            <router-link to="/dog/facial">
              <span class="rela"><span>美容香波</span><i></i></span>
            </router-link>
          </li>
        </ul>
      </div>


    </div>
    </div>



</template>

<script>
  import xiazaiApp from '../xiazaiApp/xiazaiApp.vue'
  import BScroll from 'better-scroll'

  export default{
    mounted(){
      new BScroll(this.$refs.tab, {
        click: true,
        scrollX: true,
        scrollY: false,
      })
    },
    components:{
      xiazaiApp,

    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    position fixed
    top 0
    left 0
    background-color #fff
    width 100%
    z-index: 200
    .clearfix
      box-sizing border-box
      height 51px
      padding 5px 10px
      &:after
        content: ".";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
      .epet-search
        display flex
        line-height 22px
        padding 8px 0
        background: #fff;
        width: 100%;
        .rela
          position relative
          font-size: 14px;
          float left
          margin-right 20px
          color  rgb(137, 137, 137)
        .location i
          position: absolute;
          top: 10px;
          right: -11px;
          border-width: 4px;
          font-size: 0;
          line-height: 0;
          border-style: solid solid dotted;
          border-color: #898989 transparent transparent;
        .search-text
          flex-grow 1
          display inline-block
          text-align: center
          height 25px
          font-size 14px
          position relative
          input
            line-height 25px
            width 100%
            text-indent 10px
            background #e9e9e9
            color #bcbcbc
            outline 0
            height 100%
            border-radius 4px
          .eico
            display inline-block
            background: url(./search.png) no-repeat;
            background-size: 11px auto;
          .serach-ico
            width: 11px;
            height: 11px;
            position: absolute;
            right: 5px;
            top: 0;
            bottom: 0;
            margin: auto 0;
            background-position: 0 0;
        .epet-category
          margin-left 10px
          width 25px
          float right
          img
            width 25px
            vertical-align middle
  .find_nav
    width 100%
    height 35px
    min-width 320px
    overflow hidden
  .tab
    width 120%
    display flex
    font-size 14px
    height 36px
    line-height 36px
    .tab_item
      flex 1
      position relative
      display inline-block
      text-align center
      i
        position absolute
        height 3px
        width 100%
        bottom 0
        left 0
        &.active
          background-color: #459d36;
      &.active
        a
          color: #459d36


</style>
