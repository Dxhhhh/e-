<template>
  <div class="custom_tite pt10">
    <div class="titmoudle ftc rela clum-tit">
      <div class="centerimg titclass overflow" style="border-bottom: 0px solid;">
        <div>
          <img src="./fashionVideo.png"></div>
      </div>
      <div class="more titclass">
        <a href="###">
          <img :src="img">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default{

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .custom_tite
    padding-top: 10px;
    position relative
    .titmoudle
      /*position relative*/
      text-align: center;
      img
        display: block;
        max-width: 50%;
        max-height: 73px;
        margin: 0 auto;
        vertical-align: middle;


    .more
      position absolute
      right 0
      top 40px
      img
        max-width: inherit;
        max-height: inherit;
        margin: 0 0 0 auto;
        display inline-block
        width: 50%;


</style>
