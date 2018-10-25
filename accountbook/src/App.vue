<template>
  <div class="container">
    <transition name="component-fade" mode="out-in">
      <router-view :total="total" :book="book"></router-view>
    </transition>
  </div>
</template>

<script>
import Home from './components/Home'
import List from './components/List'

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
  components: { Home, List },
  data() {
    return {
      total: 0,
      book: null // Json Type book which includes words.
    }
  },
  created() {
    this.$router.push('/'); // index page
    this.initLocalStorage();

    eventBus.$on('pushToBook', (obj) => { this.book.push(obj) });
    eventBus.$on('addTotal', (value) => { this.total += value });
    eventBus.$on('subTotal', (value) => { this.total -= value });
    eventBus.$on('showList', () => { this.showList() });
    eventBus.$on('refreshLocalStorage', () => { this.refreshLocalStorage() });
  },
  methods: {
    /** * * * * * * * * * * * * * * * localstorage  * * * * * * * * * * * * * * * **/
    initLocalStorage() {
      if(localStorage.getItem('book')) {
        this.book = Object.values(JSON.parse(localStorage.getItem('book')));
        console.log('-------------- Bring Book --------------');
      } else {
        this.book = new Array();
        localStorage.setItem('book', JSON.stringify(this.book));
        console.log('--------------- New Book ---------------');
      }

      // total
      if(localStorage.getItem('total')) {
        this.total = JSON.parse(localStorage.getItem('total'));
        console.log('-------------- Bring total --------------');
      } else {
        this.total = 0;
        localStorage.setItem('total', JSON.stringify(this.total));
        console.log('--------------- New Total.---------------');
      }
    },

    refreshLocalStorage() {
      localStorage.setItem('total', JSON.stringify(this.total));
      localStorage.setItem('book', JSON.stringify(this.book));
      console.log('refresh localStorage.');
    },

    showList() {
      let msg = '';

      this.book.forEach(function print(x) {
        msg += (x.year + '/' + x.month + '/' + x.date + '_' + x.price + '_' + x.comment + '_[' + x.type + ']' + '\n');
      });
      console.log(msg);
    },
  }
}
</script>

<style lang="scss">
  html {
    background-image: url("assets/img/background.jpg") ;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 1100px 2100px;
    min-height: -webkit-fill-available;
    position: fixed;
    top: 0;
  }

  body {
    margin: 0; padding: 0;
  }

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
