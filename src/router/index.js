import Vue from 'vue';
import Router from 'vue-router';
import WelcomeView from '@/views/WelcomeView';
import store from '@/services/store';
import HomeView from '@/views/HomeView';
import DetailView from '@/views/DetailView';
import RegisterView from '@/views/RegisterView';
import RegisterGuruView from '@/views/RegisterGuruView';
import RegisterAprendizView from '@/views/RegisterAprendizView';
import ProfileView from '@/views/ProfileView';
import FeedbackView from '@/views/FeedbackView';
import CameraView from '@/views/CameraView';
import ProfessionView from '@/views/ProfessionView';
import AskView from '@/views/AskView';
import AnswerView from '@/views/AnswerView';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
			beforeEnter(to, from, next) {
				if (store.state.idToken) {
					next();
				} else {
					next('/bemvindo');
				}
			},
		},
		{
			path: '/detail/:id',
			name: 'detail',
			component: DetailView,
		},
		{
			path: '/camera',
			name: 'camera',
			component: CameraView,
		},
		{
			path: '/bemvindo',
			name: 'bemvindo',
			component: WelcomeView,
			beforeEnter(to, from, next) {
				if (store.state.idToken) {
					next('/');
				} else {
					next();
				}
			},
		},
		{
			path: '/cadastro',
			name: 'cadastro',
			component: RegisterView,
		},
		{
			path: '/cadastro/guru',
			name: 'cadastro-guru',
			component: RegisterGuruView,
		},
		{
			path: '/cadastro/aprendiz',
			name: 'cadastro-aprendiz',
			component: RegisterAprendizView,
		},
		{
			path: '/profile',
			name: 'profile',
			component: ProfileView,
		},
		{
			path: '/profession',
			name: 'profession',
			component: ProfessionView,
		},
		{
			path: '/feedback',
			name: 'feedback',
			component: FeedbackView,
		},
		{
			path: '/ask',
			name: 'ask',
			component: AskView,
		},
		{
			path: '/answer',
			name: 'answer',
			component: AnswerView,
		},
		{
			path: '*',
			redirect: '/',
		},
	],
});
