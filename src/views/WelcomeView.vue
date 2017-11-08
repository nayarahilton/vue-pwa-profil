<template>
	<div class="welcome">
		<div class="presentation-holder">
			<img class="logo-symbol" src="../assets/logo.svg" alt="Profil Logo">
			<h1 class="title">{{ msg }}</h1>
		</div>

		<div class="btn-holder">
			<social-button
				textInner="Entrar com o Linkedin"
				design="login"
			/>
			<main-input
				type="email"
				placeholder="Email"
				:required="true"
				design="login"
			/>
			<main-input
				type="password"
				placeholder="Senha"
				:required="true"
				design="login"
			/>
			<div class="login-holder">
				<router-link
					class="link"
					to="/register"
				>
					Criar cadastro
				</router-link>
				<main-button
					button-type="router"
					text-inner="Entrar"
					linkto="/Home"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import SocialButton from '../components/SocialButton';
import MainButton from '../components/MainButton';
import MainInput from '../components/MainInput';

export default {
	name: 'welcome',
	data() {
		return {
			msg: 'Explore diverasas profissões com quem trabalha na área',
		};
	},
	components: {
		'social-button': SocialButton,
		'main-button': MainButton,
		'main-input': MainInput,
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
		linear_gradient(top, lightness($pink, 60%), lightness($blue, 70%))
		padding 40px 20px
		box-sizing border-box
		display flex
		flex-direction column
		justify-content space-between
		align-items center
		text-align center
		color #ffffff
		height 100vh

		.link
			color #ffffff

	.logo-symbol
		height 120px

	.title
		font-size 20px
		line-height 24px
		font-weight 300
		max-width 250px

	.btn-holder
		width 100%

	.login-holder
		display flex
		align-items center
		justify-content space-between

</style>
