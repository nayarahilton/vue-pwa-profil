import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import HomeView from '@/components/HomeView';
import DetailView from '@/components/DetailView';
import PostView from '@/components/PostView';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailView,
    },
    {
      path: '/post',
      name: 'post',
      component: PostView,
    },
    {
      path: '/',
      name: 'Welcome',
      component: Hello,
    },
  ],
});
