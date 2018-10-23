import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.devtools = true;
Vue.use(VueRouter);

new Vue({
  el: '#app',
  render: h => h(App)
})
