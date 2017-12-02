<template>
	<div class="welcome">
		<div class="presentation-holder">
			<img class="logo-symbol" src="../assets/logotipo.svg" alt="Profil Logo">
			<h1 class="title">{{ msg }}</h1>
		</div>

		<form @submit.prevent="validateBeforeSubmit">
			<social-button
				textInner="Entrar com o Linkedin"
				design="login"
			/>
			<main-input
				type="email"
				name="email"
				placeholder="Email"
				design="login"
				v-model="email"
				v-validate="'required|email'"
				:class="{ 'input--invalid': errors.has('email') }"
				data-vv-delay="2000"
			/>
			<feedback
				v-show="errors.has('email')"
				design="login"
			>
				{{ errors.first('email') }}
			</feedback>
			<main-input
				type="password"
				name="password"
				placeholder="Senha"
				design="login"
				v-model="password"
				v-validate="'required|min:6'"
				:class="{ 'input--invalid': errors.has('password') }"
				data-vv-delay="2000"
			/>
			<feedback
				v-show="errors.has('password')"
				design="login"
			>
				{{ errors.first('password') }}
			</feedback>
			<div class="login-holder">
				<router-link
					class="link"
					:to="{ name: 'cadastro' }"
				>
					Criar cadastro
				</router-link>
				<button
					class="submit-button"
				>
					Entrar
				</button>
			</div>
		</form>
	</div>
</template>

<script>
import { Validator } from 'vee-validate';
import store from '@/services/store';
import SocialButton from '../components/SocialButton';
import MainButton from '../components/MainButton';
import MainInput from '../components/MainInput';
import FeedbackMessage from '../components/FeedbackMessage';

const dict = {
	pt: {
		custom: {
			email: {
				required: 'Por favor, insira seu e-mail',
				email: 'E-mail inválido',
			},
			password: {
				required: 'Por favor, digite sua senha',
				min: 'Sua senha deve ter no mínimo 6 caracteres',
			},
		},
	},
};

Validator.updateDictionary(dict);
Validator.setLocale('pt');

export default {
	store,
	name: 'welcome',
	data() {
		return {
			msg: 'Explore diversas profissões com quem trabalha na área',
			email: '',
			password: '',
		};
	},
	components: {
		SocialButton,
		MainButton,
		MainInput,
		feedback: FeedbackMessage,
	},
	methods: {
		validateBeforeSubmit() {
			this.$validator.validateAll().then((result) => {
				if (result) {
					this.onSubmit();
				}
			});
		},
		onSubmit() {
			const formData = {
				email: this.email,
				password: this.password,
			};
			console.log(formData);
			this.$store.dispatch('login', {
				email: formData.email,
				password: formData.password,
			});
			setTimeout(() => {
				this.$router.push('/home');
			}, 1000);
		},
	},
};
</script>

<style lang="stylus" scoped>
	@import '../assets/styles/_mixins'
	@import '../assets/styles/_colors'


	$header-height = 56px
	$border-radius = 10px

	::-webkit-input-placeholder
		color #fff

	.welcome
		align-items center
		box-sizing border-box
		display flex
		linear_gradient(-120deg, alpha($pink, 0.9), alpha($blue, 0.7))
		background-size cover
		color #ffffff
		flex-direction column
		height 100%
		min-height 100vh
		justify-content space-between
		padding 40px 20px
		position relative
		text-align center
		width 100%

		&:before
			bottom 0
			content ''
			height 100%
			left 0
			background url('../assets/img/welcome-bg.jpg') no-repeat center center
			background-size cover
			position absolute
			right 0
			top 0
			width 100%
			z-index -1

		@media (min-width 768px)
			justify-content space-around

		.link
			color #ffffff

	.logo-symbol
		height 120px
		max-width 100%

	.title
		font-weight 300
		padding 20px
		box-sizing border-box

		@media (min-width 768px)
			max-width 450px
			font-size 40px
			line-height 54px
			margin-left auto
			margin-right auto

		@media (max-width 768px)
			font-size 24px
			line-height 30px


	.login-holder
		display flex
		align-items center
		justify-content space-between

	form
		width 100%

</style>
