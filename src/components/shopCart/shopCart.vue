<template>
  <div>
    <div class="wap-top-bar hide" style="display: block;">
      <header class="ftc head-top bgfff zcolor rela">
        <div class="sy">
          <a href="javascript:void(0)" onclick="history.go(-1)" class="aback page-top go-back"></a>
          <span class="ft18 topbar-title">购物车</span>
          <span class="mla pull-right Jbur ml J_bur" @click="showNav"></span>
        </div>
      </header>
      <div class="header-quick header-quicknew  hide Jtk" v-show="isShow">
        <a href="https://wap.epet.com/main.html?pet_type=dog">
          <span class="icon1"></span>
          <p>首页</p>
        </a>
        <a href="https://wap.epet.com/category.html">
          <span class="icon2"></span>
          <p>商品分类</p>
        </a>
        <a href="https://wap.epet.com/cart/">
          <span class="icon4" id="getCartNum"><em></em></span>
          <p>购物车</p>
        </a>
        <a href="https://wap.epet.com/orders/user.html">
          <span class="icon5"></span>
          <p>我的e宠</p>
        </a>
      </div>
    </div>
    <div class="m-emptycoupon">
      <div>
        <span class="u-emtcoupon">&nbsp;</span>
      </div>
      <div class="emttip">购物车是空的</div>
      <div class="emt-a">
        <a href="http://wap.epet.com" class="c999 ft16 mr5">去逛逛</a>
        <a href="/zt/knowledge/favorites.html" class="c999 ft16">我的收藏</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        isShow: false
      }
    },
    methods:{
      showNav(){
        this.isShow=!this.isShow
      },

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .wap-top-bar
    .head-top
      height: 50px;
      line-height: 50px;
      position: relative;
      padding: 0 10px;
      border-bottom: 1px solid #f3f3f3;
      color: #333;
      background: #fff
      text-align center
      box-sizing border-box
      .sy
        line-height: 50px;
        color: #333;
        text-align: center;
        position relative
        .aback
          background: url(./personal-bico1.png) no-repeat;
          background-size: 9px 17px;
          display: block;
          width: 22px;
          height: 20px;
          position: absolute;
          box-sizing border-box
          margin-top: 17px;
        .topbar-title
          width: 90%;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          display: block;
          margin: 0 auto;
          font-size 18px
          box-sizing: border-box
          line-height 50px
        .pull-right
          background: url(./imgtk-new.png) no-repeat;
          background-size: 20px 20px;
          position: absolute;
          top: 0;
          right: 1em;
          z-index: 100;
          cursor: pointer;
          margin-top: 14px;
          width 20px
          height 20px
          margin-left: 10px;
          float right
          box-sizing border-box
    .header-quick
      width: 100%;
      background: #fff;
      border-bottom: 1px solid #d7d7d7;
      overflow: hidden;
      padding: 10px 0;
      font-size: 10px;
      box-sizing border-box
      a
        display: inline-block;
        width: 25%;
        text-align: center;
        color: #333;
        float: left;
        p
          color: #666;
          font-size: 16px;
          text-align: center;
        .icon1
          display: block;
          height: 30px;
          background: url(./head_icon1.png) 50% 0 no-repeat;
          background-size: auto 100%;

        .icon2
          display: block;
          height: 30px;
          background: url(./head_icon2.png) 50% 0 no-repeat;
          background-size: auto 100%;


        .icon4
          display: block;
          height: 30px;
          background: url(./head_icon4.png) 50% 0 no-repeat;
          background-size: auto 100%;

        .icon5
          display: block;
          height: 30px;
          background: url(./head_icon5.png) 50% 0 no-repeat;
          background-size: auto 100%;

  .m-emptycoupon
    padding-bottom: 50px;
    background: #fff;
    text-align: center;
    .u-emtcoupon
      margin: 50px auto 20px;
      display: inline-block;
      width: 100px;
      height: 100px;
      background: url(./cart-ico.png) no-repeat 0 -160px;
      background-size: 105px auto;
    .emttip
      color: #dbdbdb;
      font-size: 16px
      text-align: center;
    .emt-a
      margin-top: 1.5em;
      a
        display: inline-block;
        border-radius: 5px;
        border: 1px solid #999;
        height: 40px;
        line-height: 40px;
        width: 100px;
        color: #999;
        margin-right: 0.5em;
        font-size: 16px
</style>
