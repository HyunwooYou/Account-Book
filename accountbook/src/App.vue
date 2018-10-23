<template>
  <div class="container">
    <my-header></my-header>
    <transition name="component-fade" mode="out-in">
      <router-view></router-view>

      <!--<component :is="view"></component>-->
    </transition>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader'
import Home from './components/Home'
import List from './components/List'
import MyFooter from './components/MyFooter'

import eventBus from './eventBus'
import VueRouter from 'vue-router'

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/List', component: List }
  ]
});

export default {
  name: 'app',
  router,
  data() {
    return {
      view: 'Home'
    }
  },
  components: {
    MyHeader, Home, List, MyFooter
  },
  created() {
    eventBus.$on('changeView', (view) => { this.view = view })
  }
}
</script>

<style lang="scss">
  .container {
    margin: auto;
    font-size: 60px;
    font-weight: bold;
  }

  body { margin: 0; padding: 0; }

  .show {
    border: 1px solid black;
  }

  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .5s ease;
  }
  .component-fade-enter, .component-fade-leave-to {
    opacity: 0;
  }
</style>
