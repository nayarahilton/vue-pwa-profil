import Vue from 'vue';
import Router from 'vue-router';
import WelcomeView from '@/views/WelcomeView';
import store from '@/services/store';
import HomeView from '@/views/HomeView';
import ForgotPasswordView from '@/views/ForgotPasswordView';
import DetailView from '@/views/DetailView';
import RegisterView from '@/views/RegisterView';
import RegisterGuruView from '@/views/RegisterGuruView';
import RegisterAprendizView from '@/views/RegisterAprendizView';
import ProfileView from '@/views/ProfileView';
import MyProfileView from '@/views/MyProfileView';
import FeedbackGuruView from '@/views/FeedbackGuruView';
import FeedbackAprendizView from '@/views/FeedbackAprendizView';
import PostView from '@/views/PostView';
import ProfessionView from '@/views/ProfessionView';
import AskView from '@/views/AskView';
import AnswerView from '@/views/AnswerView';
import QuestionsView from '@/views/QuestionsView';
import FeedbackAnswerView from '@/views/FeedbackAnswerView';
import AnsweredQuestionsView from '@/views/AnsweredQuestionsView';
import NotAnsweredQuestionsView from '@/views/NotAnsweredQuestionsView';
import LandingView from '@/views/LandingView';
import SearchView from '@/views/SearchView';
import ContactView from '@/views/ContactView';
import TermsView from '@/views/TermsView';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/home',
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
			path: '/postar',
			name: 'postar',
			component: PostView,
			beforeEnter(to, from, next) {
				if (store.state.idToken) {
					next();
				} else {
					next('/bemvindo');
				}
			},
		},
		{
			path: '/buscar',
			name: 'search-view',
			component: SearchView,
			beforeEnter(to, from, next) {
				if (store.state.idToken) {
					next();
				} else {
					next('/bemvindo');
				}
			},
		},
		{
			path: '/bemvindo',
			name: 'bemvindo',
			component: WelcomeView,
			beforeEnter(to, from, next) {
				if (store.state.idToken) {
					next('/home');
				} else {
					next();
				}
			},
		},
		{
			path: '/esqueci-senha',
			name: 'esqueci-senha',
			component: ForgotPasswordView,
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
			path: '/perfil',
			name: 'profile',
			component: ProfileView,
			beforeEnter(to, from, next) {
				if (store.state.idToken) {
					next();
				} else {
					next('/bemvindo');
				}
			},
		},
		{
			path: '/meu-perfil',
			name: 'my-profile',
			component: MyProfileView,
			beforeEnter(to, from, next) {
				if (store.state.idToken) {
					next();
				} else {
					next('/bemvindo');
				}
			},
		},
		{
			path: '/profissao',
			name: 'profession',
			component: ProfessionView,
			beforeEnter(to, from, next) {
				if (store.state.idToken) {
					next();
				} else {
					next('/bemvindo');
				}
			},
		},
		{
			path: '/feedback-guru',
			name: 'feedback',
			component: FeedbackGuruView,
			beforeEnter(to, from, next) {
				if (store.state.idToken) {
					next();
				} else {
					next('/bemvindo');
				}
			},
		},
		{
			path: '/feedback-aprendiz',
			name: 'feedback-aprendiz',
			component: FeedbackAprendizView,
			beforeEnter(to, from, next) {
				if (store.state.idToken) {
					next();
				} else {
					next('/bemvindo');
				}
			},
		},
		{
			path: '/perguntar',
			name: 'perguntar',
			component: AskView,
			beforeEnter(to, from, next) {
				if (store.state.idToken) {
					next();
				} else {
					next('/bemvindo');
				}
			},
		},
		{
			path: '/responder',
			name: 'responder',
			component: AnswerView,
			beforeEnter(to, from, next) {
				if (store.state.idToken) {
					next();
				} else {
					next('/bemvindo');
				}
			},
		},
		{
			path: '/perguntas',
			name: 'perguntas',
			component: QuestionsView,
			beforeEnter(to, from, next) {
				if (store.state.idToken) {
					next();
				} else {
					next('/bemvindo');
				}
			},
		},
		{
			path: '/sucesso-perguntas',
			name: 'feedback-answer',
			component: FeedbackAnswerView,
			beforeEnter(to, from, next) {
				if (store.state.idToken) {
					next();
				} else {
					next('/bemvindo');
				}
			},
		},
		{
			path: '/perguntas-respondidas',
			name: 'answered-questions',
			component: AnsweredQuestionsView,
			beforeEnter(to, from, next) {
				if (store.state.idToken) {
					next();
				} else {
					next('/bemvindo');
				}
			},
		},
		{
			path: '/perguntas-nao-respondidas',
			name: 'not-answered-questions',
			component: NotAnsweredQuestionsView,
			beforeEnter(to, from, next) {
				if (store.state.idToken) {
					next();
				} else {
					next('/bemvindo');
				}
			},
		},
		{
			path: '/contato',
			name: 'contact',
			component: ContactView,
		},
		{
			path: '/termos',
			name: 'terms',
			component: TermsView,
		},
		{
			path: '*',
			redirect: '/landing',
		},
		{
			path: '/',
			redirect: '/landing',
		},
		{
			path: '/landing',
			name: 'landing',
			component: LandingView,
		},
	],
});
