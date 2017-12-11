// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuefire from 'vuefire';
import VueResource from 'vue-resource';
import VeeValidate from 'vee-validate';
import axios from 'axios';
import VueFormWizard from 'vue-form-wizard';
import 'vue-form-wizard/dist/vue-form-wizard.min.css';
import store from '@/services/store';
import { database } from '@/services/firebase';
import App from './App';
import router from './router';

axios.defaults.baseURL = 'https://vue-course-a2688.firebaseio.com/';
axios.defaults.headers.get.Accepts = 'application/json';

Vue.config.productionTip = false;

Vue.use(Vuefire);
Vue.use(VueResource);
Vue.use(VeeValidate);
Vue.use(VueFormWizard);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	firebase: {
		card: database.ref('card').orderByChild('created_at'),
		faq: database.ref('faq').orderByChild('info'),
	},
	router,
	store,
	template: '<App/>',
	components: { App },
});
