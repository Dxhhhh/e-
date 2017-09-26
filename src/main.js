import Vue from 'vue'
import app from './components/app.vue'
import router from './router'
import './mock/mockDogType'

import VueScroller from 'vue-scroller'

// import '../static/common.css'

import { Swipe, SwipeItem , Navbar, TabItem, TabContainer, TabContainerItem} from 'mint-ui'

Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);

Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

Vue.use(VueScroller)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: p => p(app)
})
