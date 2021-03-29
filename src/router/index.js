import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import List from '../components/List.vue';

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  routes: [
    { path: '/', component: Home },
    { path: '/List', component: List }
  ]
});

export default router;
