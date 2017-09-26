<template>
  <div class="wrap">

    <epet-header></epet-header>
    <scroller>
      <div ref="wrap" class="slip">
        <div class="her"></div>
        <div class="content">
          <carousel></carousel>
          <div class="banner_item">
            <div class="swiper-slide">
              <a href="###" class="pointer">
                <img src="./banner.gif">
              </a>
            </div>
          </div>
          <div class="columnnavdiv">
            <ul class="clearfix">
              <li class="fl" v-for="menu2 in menus2"><a :href="menu2.target.param"><img :src="menu2.image" lazy="loaded"></a></li>
            </ul>
          </div>
          <pageLine></pageLine>

          <div class="surprise">
            <div class="surprise-tit">
              <div class="titimg"><img src="../../../static/surprise/suprice.png"></div>
              <div class="ml10" style="margin-top: 1px;">距离下一场</div>
              <!--<div class="surprise-time hide">1506042000</div>-->
              <div class="time ftc fl ml5">
                <div class="time1 dib clearfix ft12 dtime">
                  <span class="time1-1">00</span>
                  <span class="time-zi ft12">:</span>
                  <span class="time1-1">00</span>
                  <span class="time-zi ft12">:</span>
                  <span class="time1-1">00</span>
                </div>
              </div>
              <div class="more">
                <a href="https://wap.epet.com/surprise/Main.html?fw=0" class="db ftr">
                  <img src="../../../static/surprise/more.png"></a>
              </div>
            </div>
            <div class="surprise-pro" ref="pro">
              <ul class="surpriseLis">
                <li class="lis">
                  <div class="pro-block">
                    <a href="https://wap.epet.com/surprise/Main.html?fw=0">
                      <div>
                        <img class="image" src="./4.jpg">
                      </div>
                      <div class="cred ftc mt5">
                        <span class="ft12">¥</span>
                        <span class="ft17">52.00</span>
                      </div>
                      <p class="c999 ftc ft12">省￥23.00</p>
                    </a>
                  </div>
                </li>
                <li class="lis">
                  <div class="pro-block">
                    <a href="https://wap.epet.com/surprise/Main.html?fw=0">
                      <div>
                        <img class="image" src="./3.jpg">
                      </div>
                      <div class="cred ftc mt5">
                        <span class="ft12">¥</span>
                        <span class="ft17">52.00</span>
                      </div>
                      <p class="c999 ftc ft12">省￥23.00</p>
                    </a>
                  </div>
                </li>
                <li class="lis">
                  <div class="pro-block">
                    <a href="https://wap.epet.com/surprise/Main.html?fw=0">
                      <div>
                        <img class="image" src="./2.jpg">
                      </div>
                      <div class="cred ftc mt5">
                        <span class="ft12">¥</span>
                        <span class="ft17">52.00</span>
                      </div>
                      <p class="c999 ftc ft12">省￥23.00</p>
                    </a>
                  </div>
                </li>
                <li class="lis">
                  <div class="pro-block">
                    <a href="https://wap.epet.com/surprise/Main.html?fw=0">
                      <div>
                        <img class="image" src="./1.jpg">
                      </div>
                      <div class="cred ftc mt5">
                        <span class="ft12">¥</span>
                        <span class="ft17">52.00</span>
                      </div>
                      <p class="c999 ftc ft12">省￥23.00</p>
                    </a>
                  </div>
                </li>
                <li class="lis">
                  <div class="pro-block">
                    <a href="https://wap.epet.com/surprise/Main.html?fw=0">
                      <div>
                        <img class="image" src="./4.jpg">
                      </div>
                      <div class="cred ftc mt5">
                        <span class="ft12">¥</span>
                        <span class="ft17">52.00</span>
                      </div>
                      <p class="c999 ftc ft12">省￥23.00</p>
                    </a>
                  </div>
                </li>
                <li class="lis">
                  <div class="pro-block">
                    <a href="https://wap.epet.com/surprise/Main.html?fw=0">
                      <div>
                        <img class="image" src="./3.jpg">
                      </div>
                      <div class="cred ftc mt5">
                        <span class="ft12">¥</span>
                        <span class="ft17">52.00</span>
                      </div>
                      <p class="c999 ftc ft12">省￥23.00</p>
                    </a>
                  </div>
                </li>
                <li class="lis">
                  <div class="pro-block">
                    <a href="https://wap.epet.com/surprise/Main.html?fw=0">
                      <div>
                        <img class="image" src="./2.jpg">
                      </div>
                      <div class="cred ftc mt5">
                        <span class="ft12">¥</span>
                        <span class="ft17">52.00</span>
                      </div>
                      <p class="c999 ftc ft12">省￥23.00</p>
                    </a>
                  </div>
                </li>
                <li class="lis">
                  <div class="pro-block">
                    <a href="https://wap.epet.com/surprise/Main.html?fw=0">
                      <div>
                        <img class="image" src="./1.jpg">
                      </div>
                      <div class="cred ftc mt5">
                        <span class="ft12">¥</span>
                        <span class="ft17">52.00</span>
                      </div>
                      <p class="c999 ftc ft12">省￥23.00</p>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <pageLine></pageLine>

          <div class="currency-adcon show_line dibimg1">
            <div class="titdiv rela">
              <div class="clum-tit">
                <div class="leftimg2 titclass ftc">
                  <a href="##">
                    <img src="./hot.jpg" style="max-height: 73px; max-width: 100%;"></a></div>
                <div class="more titclass">
                </div>
              </div>
            </div>
            <div class="divboximg flex">
              <div class="divimg"  style="width: 42.1%;">
                <a href="###">
                  <img name="319x379" src="./a.png" lazy="loaded"></a></div>
              <div class="divimg" style="width: 57.33%;">
                <a href="http://sale.epet.com/m/mould/activity/ztMjQ5Mw%3D%3D.html?tid=2493&amp;fw=0">
                  <img name="430x189" src="https://img2.epetbar.com/nowater/2017-09/21/09/042df360a733282ab3544ce261e0a75d.jpg@!water" lazy="loaded"></a>
                <a href="https://wap.epet.com/main.html?menu_param=121&amp;is_single=1&amp;fw=0">
                  <img name="430x189" src="https://img2.epetbar.com/nowater/2017-09/21/10/fcb76da8467e018d480207720f0bd74a.jpg@!water" lazy="loaded"></a>
              </div>
            </div>
          </div>
          <pageLine></pageLine>
          <div class="custom_tite pt10">
            <div class="centerimg titclass overflow" style="border-bottom: 0px solid;">
              <img src="./fashionVideo.png">
            </div>
            <div class="more titclass">
              <a href="###">
                <img src="./more.png">
              </a>
            </div>
          </div>
          <ul class="cmVideoList cmVideoListIndex">
            <li>
              <a href="###">
                <div class="relative imgBox overflow">
                  <img src="./vedio.jpg" lazy="loaded">
                  <span class="cmallPlayIco"></span>
                </div>
                <div class="ft12 c999 pad10 ftc">
                  <div class="textover c333">神奇饮水除口臭</div>
                  <div>
                    <span class="cmallViewIco mr3"></span>
                    <i>28802</i>
                    <span class="ml10 mr10">|</span>01:13</div>
                </div>
              </a>
            </li>
          </ul>
          <pageLine></pageLine>
          <div class="custom_tite pt10">
            <div class="centerimg titclass overflow" style="border-bottom: 0px solid;">
              <img src="./tiyan.png">
            </div>
            <div class="more titclass">
              <a href="###">
                <img src="./more.png">
              </a>
            </div>
          </div>
          <div class="tiyanguan">
            <img src="./nao.jpg" alt="">
          </div>
          <pageLine></pageLine>
          <div class="custom_tite pt10">
            <div class="centerimg titclass overflow" style="border-bottom: 0px solid;">
              <img src="./pinpai.png">
            </div>
          </div>
          <pinpai></pinpai>

          <pageLine></pageLine>
          <div class="custom_tite">
            <div class="centerimg titclass overflow" style="border-bottom: 0px solid;">
              <img src="./5.jpg">
            </div>
            <div class="gongyiclass">
              <a href="###">
                <img src="./6.png">
              </a>
            </div>
          </div>

          <div class="custom_tite">
            <div class="centerimg titclass overflow" style="border-bottom: 0px solid;">
              <img src="./7.png">
            </div>
            <div class="haoping">
              <a href="###">
                好评率99.64%
              </a>
            </div>
          </div>

          <div class="brands-judge">
            <ul class="clearfix">
              <li class="list">
                <a href="###">
                  <div class="mt10 ml10 bgf5 pb15">
                    <div class="main_img rela">
                      <div class="thisimg rela loadimg-nofixed">
                        <img class="image" src="./8.png" lazy="loaded"></div>
                      <div class="ell cfff ftc ft12 join_time">加入E宠2年2月</div>
                    </div>
                    <div class="info">
                      <span class="fl">红*****ω</span>
                      <span class="pet-name">中华田园猫</span>
                    </div>
                    <div class="message">
                      包装完美，没有破漏的情况存在，虽说是跨境运输，但是物流的速度还是比想象中快，最主要的还是正品保证，买得放心吃的安心
                    </div>
                  </div>
                </a>
              </li>
              <li class="list">
                <a href="###">
                  <div class="mt10 ml10 bgf5 pb15">
                    <div class="main_img rela">
                      <div class="thisimg rela loadimg-nofixed">
                        <img class="image" src="./8.png" lazy="loaded"></div>
                      <div class="ell cfff ftc ft12 join_time">加入E宠2年2月</div>
                    </div>
                    <div class="info">
                      <span class="fl">红*****ω</span>
                      <span class="pet-name">中华田园猫</span>
                    </div>
                    <div class="message">
                      包装完美，没有破漏的情况存在，虽说是跨境运输，但是物流的速度还是比想象中快，最主要的还是正品保证，买得放心吃的安心
                    </div>
                  </div>
                </a>
              </li>
              <li class="list">
                <a href="###">
                  <div class="mt10 ml10 bgf5 pb15">
                    <div class="main_img rela">
                      <div class="thisimg rela loadimg-nofixed">
                        <img class="image" src="./8.png" lazy="loaded"></div>
                      <div class="ell cfff ftc ft12 join_time">加入E宠2年2月</div>
                    </div>
                    <div class="info">
                      <span class="fl">红*****ω</span>
                      <span class="pet-name">中华田园猫</span>
                    </div>
                    <div class="message">
                      包装完美，没有破漏的情况存在，虽说是跨境运输，但是物流的速度还是比想象中快，最主要的还是正品保证，买得放心吃的安心
                    </div>
                  </div>
                </a>
              </li>
              <li class="list">
                <a href="###">
                  <div class="mt10 ml10 bgf5 pb15">
                    <div class="main_img rela">
                      <div class="thisimg rela loadimg-nofixed">
                        <img class="image" src="./8.png" lazy="loaded"></div>
                      <div class="ell cfff ftc ft12 join_time">加入E宠2年2月</div>
                    </div>
                    <div class="info">
                      <span class="fl">红*****ω</span>
                      <span class="pet-name">中华田园猫</span>
                    </div>
                    <div class="message">
                      包装完美，没有破漏的情况存在，虽说是跨境运输，但是物流的速度还是比想象中快，最主要的还是正品保证，买得放心吃的安心
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <pageLine></pageLine>

          <div class="footer" style="display: block;">
            <div class="ft">
              <span class="bt" title="触屏版">触屏版</span>
              <span><a href="###">手机客户端</a></span>
              <span><a href="###">关于我们</a></span>
              <span><a href="###">联系我们</a></span>
            </div>
            <div style="text-align:center;margin:0 10px 0 10px; padding-bottom:25px; font-size:12px;line-height:19px">© wap.epet.com 版权：重庆易宠科技有限公司</div>
          </div>

        </div>
      </div>
    </scroller>



    <footerNav></footerNav>
  </div>


</template>

<script>
  import BScroll from 'better-scroll'
  import axios from 'axios'
  import header from  '../header/header.vue'

  import footer from '../footer/footer.vue'

  import carousel from '../Carousel/carousel.vue'
  import pageLine from '../line/line.vue'
  import pinpai from '../pinpai/pinpai.vue'

  import banner from './banner.gif'
  export default{

    data(){
      return{
        menus2: [],

      }
    },

    mounted(){
      new BScroll(this.$refs.pro, {
        click: true,
        scrollX: true,
        scrollY: false,
      })

      axios.get('/dog/datas/menus2')
        .then((response)=>{
          const result = response.data
          this.menus2 = result.data.menus
        })



    },
    components: {
      'epet-header': header,
      footerNav:footer,
      carousel,
      pageLine,
      pinpai

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .wrap

    z-index 1
    margin-top 141px
    margin-bottom 46px
    .slip
      display flex
      flex-direction: column
      .her
        height 141px
      .content
         flex 1
        .banner_item
          /*display: flex;*/
          margin: 0 auto;
          position: relative;
          overflow: hidden;
          z-index: 1;
          height 120px
          width 100%
          .swiper-slide
            text-align: center;
            font-size: 18px;
            background: #fff;
            box-sizing: content-box;
            width: 100%;
            height: 100%;
            position: relative;
            /*flex-shrink: 0;*/
            img
              width 100%
              height 100%

        .columnnavdiv
          box-sizing border-box
          overflow hidden
          .clearfix
            width 100%
            padding 10px 0
            &:after
              content: ".";
              display: block;
              height: 0;
              clear: both;
              visibility: hidden;
            .fl
              float left
              list-style: none;
              line-height 87.72px
              display: list-item;
              width 25%
              height 87.72px
              img
                vertical-align: middle;
                width 100%

        .surprise
          position relative
          .surprise-tit
            &:after
              content: ".";
              display: block;
              height: 0;
              clear: both;
              visibility: hidden;
            box-sizing border-box
            width 100%
            height 60px
            padding 10px
            overflow: hidden!important;

            .titimg
              height 24px
              width 100%
              display inline
              img
                vertical-align: middle;
                height 24px
            .time
              display inline
              .time1
                display inline
            .ml10
              height 20px
              display inline-block
            .more
              display inline-block
              width 67.5px
              height 40px
              position absolute
              right 0
              top -6px
              img
                width 100%


          .surprise-pro
            box-sizing border-box
            width 100%
            padding-left: 5px;
            margin-bottom: 10px;
            overflow: hidden;
            .surpriseLis
              width 240%
              display flex
              margin: 0 auto;
              position: relative;
              z-index: 1;
              height 130px
              .lis
                display inline-block
                flex-shrink: 0;
                width: 11%
                margin-right: 10px;
                .pro-block
                  a
                    display: inline-block;
                    width 120px
                    text-align center
                    .image
                      width 84.56px
                      height 84.56px
                    .cred
                      color red
                      font-size 14px
                    .ft12
                      font-size 12px
                      color: #999;

        .currency-adcon
          box-sizing border-box
          .divboximg
            overflow hidden
            width 100%
            .divimg
              display inline-block
              float left

              border-right: 1px solid #e7e7e7;
              a
                display inline-block
                width 100%
                img
                  width 100%

      .custom_tite
        padding-top: 10px;
        position relative
        text-align: center;
        overflow hidden
        .centerimg
          width 100%
          height 52px
          text-align center
          img
            height 100%
        .more
          position absolute
          top 12px
          right 0
          width 60px
          height 47px
          img
            width 100%
            height 100%
        .gongyiclass
          position absolute
          top 28px
          right 18px
          width 60px
          height 20.8px
          img
            width 75px
            height 10px
        .haoping
          position absolute
          top 28px
          right 18px
          width 60px
          height 20.8px
          font-size 12px
          display inline
          white-space nowrap





    .cmVideoList
      a
        display block
        color: #333;
        text-align center
      .relative
        img
          width 100%
      .ft12
        padding 10px
        font-size 12px
        .textover
          line-height 19.2px
        .cmallViewIco
          display: inline-block;
          width: 10px;
          height: 9px;
          background: url(./view-black.png) 0 0 no-repeat;
          background-size: contain;
        i
          font-style: normal;
          font-size: 12px;
    .tiyanguan
      width 100%
      img
        width 100%


    .brands-judge
      position relative
      box-sizing border-box
      padding-bottom: 10px;
      padding-right: 10px;
      width 100%
      .clearfix
        overflow hidden
        .list
          float left
          display inline-block
          width 50%
          a
            display inline-block
            .mt10
              background: #f5f5f5;
              padding-bottom: 15px;
              margin-left: 10px;
              margin-top: 10px;
              .main_img
                height: 150px;
                overflow: hidden;
                position: relative;
                .loadimg-nofixed
                  background: url(./8.png) no-repeat center center #f4f4f4;
                  background-size: 120px auto;
                  position: relative;
                  .image
                    width 100%
                    height 100%
                .join_time
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  line-height 19px
                  height 19px
                  text-align center
                  color #fff
                  font-size 12px
                  width: 100%;
                  background: rgba(0,0,0,.4);
              .info
                font-size: 12px;
                padding-left: 5px;
                padding-right: 5px;
                margin-top: 5px;
                line-height 19px
                .pet-name
                  display inline-block
                  float right
                  border-radius 5px
                  background-color rgb(221, 221, 221)
              .message
                display inline-block
                height: 60px;
                overflow: hidden;
                color: #999;
                font-size: 13px;
                padding-right: 5px;
                margin-top: 5px;
                line-height 21px


    .footer
      border-top 5px  solid #f3f4f5
      margin 1em 0 0
      background #fff
      .ft
        font-size 14px
        line-height 22px
        box-sizing border-box
        padding 15px 0 5px
        text-align center
        span
          display inline-block
        .bt
          color red
          padding-righ 10px




</style>
