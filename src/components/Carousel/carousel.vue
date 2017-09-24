<template>
  <div class="swipe">
    <mt-swipe :auto="4000">
      <mt-swipe-item><img :src="jpg1" alt=""></mt-swipe-item>
      <mt-swipe-item><img :src="jpg2" alt=""></mt-swipe-item>
      <mt-swipe-item><img :src="jpg3" alt=""></mt-swipe-item>
      <mt-swipe-item><img :src="jpg4" alt=""></mt-swipe-item>
      <mt-swipe-item><img :src="jpg5" alt=""></mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  import Vue from 'vue'
  import jpg1 from './1.jpg'
  import jpg2 from './2.jpg'
  import jpg3 from './3.png'
  import jpg4 from './4.jpg'
  import jpg5 from './5.jpg'



  export default{
    data(){
      return{
        jpg1,
        jpg2,
        jpg3,
        jpg4,
        jpg5
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.swipe
  height 160px
  img
    height 100%
    width 100%

</style>
