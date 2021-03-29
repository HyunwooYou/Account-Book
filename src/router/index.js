import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/pages/Home.vue';
import List from '../components/pages/List.vue';
import SaveBox from '../components/pages/SaveBox.vue';

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  routes: [
    { path: '/', component: Home },
    { path: '/List', component: List },
    { path: '/save', component: SaveBox },
  ]
});

export default router;
