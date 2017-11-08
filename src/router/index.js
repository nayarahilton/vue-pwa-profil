import Vue from 'vue';
import Router from 'vue-router';
import WelcomeView from '@/views/WelcomeView';
import HomeView from '@/views/HomeView';
import DetailView from '@/views/DetailView';
import PostView from '@/views/PostView';
import RegisterView from '@/views/RegisterView';
import ProfileView from '@/views/ProfileView';
import FeedbackView from '@/views/FeedbackView';
import CameraView from '@/views/CameraView';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/home',
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
			path: '/camera',
			name: 'camera',
			component: CameraView,
		},
		{
			path: '/',
			name: 'welcome',
			component: WelcomeView,
		},
		{
			path: '/register',
			name: 'register',
			component: RegisterView,
		},
		{
			path: '/profile',
			name: 'profile',
			component: ProfileView,
		},
		{
			path: '/feedback',
			name: 'feedback',
			component: FeedbackView,
		},
	],
});
