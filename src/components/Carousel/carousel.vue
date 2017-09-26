<template>
  <div class="swipe">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(carousel,index) in carousels" :key="index"><img :src="carousel.image" alt=""></mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'




  export default{
    data(){
      return{
        carousels: [],

      }
    },
    mounted(){

      axios.get('/dog/datas/carousel')
      .then((response)=>{
        const result = response.data
        this.carousels = result.data.value
      })



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
