<template>
  <div class="overflow xiazaiApp" style="display: block;" v-show="isShow">
    <div class="overflow rela">
      <span class="closebtn" @click="showApp" >
        <img id="close_down_bar" src="./closebtn_03.png">
      </span>
      <div class="appdowimg">
        <a href="###" style="display: block;">
          <img src="./xiazaiApp.png">
        </a>
      </div>
    </div>
  </div>
</template>

<script>

  export default{
    data(){
      return{
        isShow: true
      }
    },
   methods:{
     showApp(){
       this.isShow=false
     }
   }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.xiazaiApp
  position relative
  overflow hidden
  height 55px
  background: rgba(61,61,61,1)
  color: #fff
  z-index: 102

  .rela
    position relative
    height 100%
    .closebtn
      display: inline-block;
      width: 5%;
      margin-right: 2%;
      vertical-align: middle;
      position: absolute;
      top: 25%;
      left: 2%;
      img
        width 100%
        height 100%
    .appdowimg
      width 100%
      height 100%
      img
        width 100%
        height 100%


</style>
