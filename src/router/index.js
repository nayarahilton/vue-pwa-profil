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
import MyProfileView from '@/views/MyProfileView';
import FeedbackView from '@/views/FeedbackView';
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
		},
		{
			path: '/buscar',
			name: 'search-view',
			component: SearchView,
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
		},
		{
			path: '/meu-perfil',
			name: 'my-profile',
			component: MyProfileView,
		},
		{
			path: '/profissao',
			name: 'profession',
			component: ProfessionView,
		},
		{
			path: '/feedback',
			name: 'feedback',
			component: FeedbackView,
		},
		{
			path: '/perguntar',
			name: 'perguntar',
			component: AskView,
		},
		{
			path: '/responder',
			name: 'resposta',
			component: AnswerView,
		},
		{
			path: '/perguntas',
			name: 'perguntas',
			component: QuestionsView,
		},
		{
			path: '/sucesso-perguntas',
			name: 'feedback-answer',
			component: FeedbackAnswerView,
		},
		{
			path: '/perguntas-respondidas',
			name: 'answered-questions',
			component: AnsweredQuestionsView,
		},
		{
			path: '/perguntas-nao-respondidas',
			name: 'not-answered-questions',
			component: NotAnsweredQuestionsView,
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
