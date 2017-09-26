<template>
  <div class="singlediv" >
    <div v-for="dynamic in dynamics">
      <div class="pad10">
        <span class="ft15">{{dynamic.title}}</span>
        <span class="c999 ml5 ft12"></span>
      </div>
      <div class="soleimg loadimg-nofixed rela overflow">
        <a href="###" v-if="dynamic['content_images'][0]">
          <img class="image" :src="dynamic['content_images'][0].image" lazy="loaded">
        </a>
      </div>
    </div>
   </div>
</template>

<script>
  import axios from 'axios'
  export default{

    data(){
      return{
        dynamics: []
      }
    },
    mounted(){
      axios.get('/dog/datas/dynamics')
        .then((response)=>{
          const result = response.data
          this.dynamics = result.data
        })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.singlediv
  width 100%
  .pad10
    box-sizing border-box
    padding 10px
  .soleimg
    .image
      width 100%
</style>
