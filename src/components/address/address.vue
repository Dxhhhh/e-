<template>
  <div>
    <header class="rela">
      <div class="head-top">
        <a href="javascript:void(0)" onclick="history.go(-1)" class="aback page-top go-back"></a>
        <span class="ft18 topbar-title">选择收货地区</span>
        <div class="zfont ft16 block">
          <a class="zcolor topbar-link ">
          </a>
        </div>
        <span class="Jbur" @click="showNav" ></span>
      </div>
      <div class="footernav" v-show="isShow">
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
    </header>
    <div class="animal">
      <router-link to="/cat">
        <span>猫猫站</span>
      </router-link>
      <router-link to="/dog" class="active">
        <span >狗狗站</span>
      </router-link>
      <router-link to="/water">
        <span>水族站</span>
      </router-link>
    </div>
    <div class="addressBox" >
      <div class="this-pagetop">
        <span ref="info">当前默认地址：</span>
        <span ref="selectAddress">上海 上海 黄浦区</span>
      </div>
      <div class="address">
        <v-distpicker type="mobile" @province="onProvince" @city="onCity" @area="onArea"></v-distpicker>
      </div>
    </div>
  </div>
</template>

<script>
import VDistpicker from 'v-distpicker' 

  export default{
    components: {
      VDistpicker

    },
    data(){
      return{
        isShow: false
      }
    },
    methods:{
      showNav(){
        this.isShow=!this.isShow
      },
      onProvince(data){
        this.$refs.info.innerHTML="当前选中的地址为  " 
        console.log(data)
        this.$refs.selectAddress.innerHTML=data.value+ '   '
      },

      onCity(data){
        this.$refs.selectAddress.innerHTML+=data.value+ '   '
      },
     
      onArea(data){
         this.$refs.selectAddress.innerHTML+=data.value
      },

    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .rela
    .head-top
      height 50px;
      padding 0 1em
      line-height: 50px;
      position: relative;
      text-align center
      .aback
        display inline-block
        width: 22px;
        height: 20px;
        background url(./personal-bico1.png) no-repeat
        background-size 9px 17px
        position: absolute;
        left 0
        margin-top: 16px;
      .Jbur
        width 20px
        height 20px
        display inline-block
        position: absolute;
        right: 1em;
        top: 14px;
        background: url(./imgtk-new.png) no-repeat;
        background-size: 20px 20px;

    .footernav
      border-top: 1px solid #e7e7e7;
      height: 45px;
      line-height: 45px;
      position: relative;
      width: 100%;
      background: #fff;
      .clearfix
        li
          float: left;
          width: 25%;
          height: 55px;
        .index-a
          background: url(./head_icon1.png) no-repeat center 2px;
          background-size: auto 40px
        .type-a
          background: url(./head_icon2.png) no-repeat center 2px;
          background-size: auto 40px
        .cart-a
          background: url(./head_icon4.png) no-repeat center 2px;
          background-size: auto 40px
        .myepet-a
          background: url(./head_icon5.png) no-repeat center 2px;
          background-size: auto 40px

  .animal
    display flex
    box-sizing border-box
    height 50px
    padding 10px
    background-color #eee;
    a
      display inline-block
      flex 1
      box-sizing border-box
      text-align center
      background: #b9b9b9;
      color: #666;
      border-radius: 5px;
      font-size: 15px;
      padding-bottom: 5px;
      padding-top: 5px;
      margin-left: 10px;
      margin-right: 10px;
    .active
      background-color #f00
      color #fff
  .addressBox
    .this-pagetop
      border-bottom: 1px solid #e7e7e7;
      background: #ffe6d9;
      font-size: 14px;
      padding: 10px;
      box-sizing: border-box;
      line-height 22px
    .address-header ul[data-v-a078dc08]
      display: none
    .addressbox .btborder 
      border-bottom: 1px solid #e7e7e7;
      padding 10px
      font-size 13px
      line-height 22px
      font-family "Microsoft Yahei"
   

 
</style>
