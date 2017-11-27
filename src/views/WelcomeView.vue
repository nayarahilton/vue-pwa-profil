<template>
	<div class="welcome">
		<div class="presentation-holder">
			<img class="logo-symbol" src="../assets/logo.svg" alt="Profil Logo">
			<h1 class="title">{{ msg }}</h1>
		</div>

		<div class="btn-holder">
			<form @submit.prevent="onSubmit">
				<social-button
					textInner="Entrar com o Linkedin"
					design="login"
				/>
				<main-input
					type="email"
					placeholder="Email"
					design="login"
					v-model="email"
				/>
				<main-input
					type="password"
					placeholder="Senha"
					design="login"
					v-model="password"
				/>
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
	</div>
</template>

<script>
import store from '@/services/store';
import SocialButton from '../components/SocialButton';
import MainButton from '../components/MainButton';
import MainInput from '../components/MainInput';

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
		'social-button': SocialButton,
		'main-button': MainButton,
		'main-input': MainInput,
	},
	methods: {
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
		linear_gradient(-140deg, alpha($pink, 0.8), alpha($blue, 0.7))
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

	.title
		font-weight 300
		@media (min-width 768px)
			max-width 450px
			font-size 40px
			line-height 54px

		@media (max-width 768px)
			max-width 250px
			font-size 20px
			line-height 24px

	.login-holder
		display flex
		align-items center
		justify-content space-between

</style>
