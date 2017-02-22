import Vue from 'vue';
import VueRouter from 'vue-router';

import Button from './pages/button';
import Icon from './pages/icon';
import Radio from './pages/radio';

Vue.use(VueRouter);

const routes = [{
  path: '/button',
  component: Button
}, {
  path: '/icon',
  component: Icon
}, {
  path: '/radio',
  component: Radio
}];

const router = new VueRouter({
  routes 
});

export default router;