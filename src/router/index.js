import Vue from 'vue'
import Router from 'vue-router'

import dog from '../components/dog/dog.vue'
import foods from '../components/foods/foods.vue'
import goOut from '../components/goOut/goOut.vue'
import toy from '../components/toy/toy.vue'
import medical from '../components/medical/medical.vue'
import home from '../components/home/home.vue'
import facial from '../components/facial/facial.vue'
import type from '../components/type/type.vue'
import shopCard from '../components/shopCart/shopCart.vue'
import myepet from '../components/myepet/myepet.vue'
import register from '../components/register/register.vue'
import detail from '../components/register/detail.vue'
import address from '../components/address/address.vue'

import cat from '../components/maoHome/maoHome.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dog/home'
    },
    {
      path: '/dog',
      redirect: '/dog/home'
    },
    {
       path: '/cat',
      component: cat,
    },
    {
      path: '/dog',
      component: dog,
      children: [
        {
          path: 'address',
          component: address
        },
        {
          path: 'home',
          component: home
        },
        {
          path: 'foods',
          component: foods
        },
        {
          path: 'goOut',
          component: goOut
        },
        {
          path: 'toy',
          component: toy
        },
        {
          path: 'medical',
          component: medical
        },
        {
          path: 'facial',
          component: facial
        },
        {
          path: 'type',
          component: type
        },
        {
          path: 'shopCard',
          component: shopCard
        },
      ]
    },



    {
      path: '/myepet',
      component: myepet,
    },
    {
      path: '/myepet/register',
      component: register,
    },
    {
      path: '/myepet/register/detail',
      component: detail
    }
  ]})
