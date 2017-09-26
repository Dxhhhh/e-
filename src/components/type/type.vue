<template>
  <div class="xxx" >
    <header class="wrap1">
      <div id="1" class="sort" @click="changeType(true)">
        <span :class="{on:isShow}">分类</span>
      </div>
      <div id="2" class="brand" @click="changeType(false)">
        <span :class="{on:!isShow}">品牌</span>
      </div>
      <a href="https://wap.epet.com/search.html?pet_type=dog&amp;fw=0">
        <img src="./search-ico.png" class="search">
      </a>
    </header>
    <div>
      <div v-show="isShow">
        <div class="wrapLeft" ref="left">
          <ul class="left" >
            <li class="bgfff" ref="lis" v-for="(type,index) in types" @click="showTypes(index,$event)" >{{type.name}}</li>
          </ul>
        </div>
        <div class="wrapRight">
          <div>
            <a href="javascript:;" class="title">{{foods.title}}</a>
            <ul class="rightUl" ref="lis">
              <li class="rightLl" v-for="food in foods.list ">
                <a href="###" class="db">
                  <div class="loadimg-nofixed">
                    <img class="image" :src="food.photo">
                  </div>
                  <p class="ftc ft12 mt10 c333">{{food.name}}</p>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
      <div v-show="!isShow" style="height: 667px" ref="brand">
        <div>
          <div class="wrapper" v-for="brand in brands">
            <div class="title">
              <span class="c999">—— brand.title ——</span>
            </div>
            <div class="list">
              <ul class="clearfix">
                <li class="item" v-for="list in brand.list">
                  <a href="https://wap.epet.com/brand/bd725.html?fw=0" class="block">
                    <div class="img loadimg-nofixed rela">
                      <img class="db image" :src="list.logo" lazy="loaded"></div>
                    <div>
                      <img :src="list.recommend==1?pic:''" class="jian abs">
                    </div>
                    <p class="name ftc ft13 mt5">{{list.name}}</p>
                    <p class="address ftc c999 ft12">{{list.address}}</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footerNav></footerNav>

  </div>
</template>

<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'
  import footerNav from '../footer/footer.vue'
  import pic from './jian.png'
  export default{
    data(){
      return{
        pic,
        isShow: true,
        types: [],
        foods: {},
        brands:[],
        isClick: false
      }
    },
    mounted(){
      axios.get('/dog/type')
        .then((response)=>{
          const result = response.data
          if(result.code=="succeed"){
            this.types = result.data
            this.$nextTick(()=>{

              new BScroll(this.$refs.left,{
                click: true
              })

              this.$refs.lis[0].style.backgroundColor="#f3f4f5"
            })
          }
        })
      axios.get('/dog/food')
        .then((response)=>{
          const result = response.data
          if(result.code=="succeed"){
            this.foods = result.data[0]
          }
        })



    },
    methods:{
      showTypes(index,event){
        axios.get('/dog/food')
          .then(response=>{
            const result = response.data
            //console.log(result)

            if(result.code=="succeed"){
              this.foods = result.data[index]
              const lis = this.$refs.lis
              for(let i=0;i<lis.length;i++){
                lis[i].style.backgroundColor = "#fff"
              }
              event.target.style.backgroundColor = "#f3f4f5"


            }
          })
      },
      changeType(isClick){
        this.isShow = isClick
        if(isClick==false){
          axios.get('/dog/brand')
            .then((response)=>{
              const result = response.data
              if(result.code=="succeed"){
                this.brands = result.data
                this.$nextTick(()=>{
                  new BScroll(this.$refs.brand,{
                    click: true
                  })
                })
              }
            })
        }
      }
    },
    components: {
      footerNav
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  *
    box-sizing border-box
  .xxx
    background-color #f3f4f5
    height 627px
    .wrap1
      position relative
      padding: 0 15px;
      border-bottom: 1px solid #cbcbcb;
      top: 0;
      height: 40px;
      z-index: 11;
      background: #fff;
      .sort
        box-sizing border-box
        text-align: right;
        padding-right: 5%;
        width: 50%;
        height: 40px;
        line-height: 40px;
        font-size: 13px;
        float: left;
        .on
          color: #f00;
          font-weight: 700;
      .brand
        box-sizing border-box
        width: 50%;
        height: 40px;
        padding-left: 5%;
        line-height: 40px;
        font-size: 13px;
        float: left;
        .on
          color: #f00;
          font-weight: 700;
        a
          color: #333;
          font-weight: 700;


      a
        display inline-block
        .search
          position: absolute;
          top: 13px
          right: 15px;
          width: 14px;
          height: 14px;


    .wrapLeft
      position: fixed;
      top: 40px;
      left: 0;
      bottom: 0;
      padding-bottom: 45px;
      background: #fff;
      .left
        padding-bottom 55px
        .bgfff
          box-sizing border-box
          padding: 15px 0;
          border-bottom: 1px solid #f3f4f5;
          width: 70px;
          height: 50px;
          line-height 20px
          font-size: 13px;
          text-align: center;

    .wrapRight
      padding: 15px 5px 20px;
      box-sizing border-box
      margin-left: 75px;
      background: #fff;
      a
        color: #999;
        box-sizing border-box
        display: block;
        font-size: 12px;
        padding-left: 5px;
        margin-top: 10px
        line-height 19px
      .rightUl
        overflow hidden
        .rightLl
          box-sizing border-box
          width: 33.33%;
          padding: 0 5px;
          margin-top: 10px;
          float: left;
          .db
            display: block;
            color: #333;
            .loadimg-nofixed
              background: url(./default-epet.png) no-repeat center center #f4f4f4;
              background-size: 120px auto;
              position: relative;
              padding-top: 100%;
              .image
                width 100%
                top: 0;
                left: 0;
                position: absolute;
            p
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              height: 20px;
              font-size: 12px;
              color: #333;
              margin-top: 10px;
              text-align center

    .wrapper
      padding-bottom: 15px;
      margin-bottom: 10px;
      background: #fff;
      .title
        line-height 19px
        padding-top: 20px;
        font-size: 12px;
        color: #999;
        text-align: center;
        .c999
          color: #999;
      .list
        padding: 0 5px;
        .clearfix
          overflow hidden
          .item
            display inline-block
            margin-top: 20px;
            width: 33.33%;
            padding: 0 5px;
            position: relative;
            float: left;
            .block
              display: block;
              color: #333;
              .img
                border: 1px solid #e2e2e2;
                text-align: center;
                padding: 50px 10px 10px;
                background: url(./default-epet2.jpg) no-repeat center center #fff;
                background-size: 120px auto;
                height: 50px;
                .image
                  max-width: 90%;
                  margin: 10px auto 0;
                  height: 40px;
                  right: 0;
                  top: 0;
                  left: 0;
                  position: absolute;
                  display: block;
              .jian
                position: absolute;
                width: 13px;
                height: 13px;
                top: 0;
                left: 5px;
              .name
                height: 20px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 13px;
                margin-top: 5px;
                text-align: center;
              .address
                height: 20px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap
                font-size: 12px;
                color: #999;
                text-align: center;
</style>
