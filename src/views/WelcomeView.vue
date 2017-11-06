<template>
	<div class="welcome">
		<div class="presentation-holder">
			<img class="logo-symbol" src="../assets/logo.svg" alt="Profil Logo">
			<h1 class="title">{{ msg }}</h1>
		</div>

		<div class="btn-holder">
			<social-button textInner="Entrar com o Linkedin" design="login"></social-button>
			<main-input type="email" placeholder="Email" :required="true" design="login" />
			<main-input type="password" placeholder="Senha" :required="true" design="login" />
			<div class="login-holder">
				<router-link class="link" to="/register">Criar cadastro</router-link>
				<main-button buttonType="router" text-inner="Entrar" linkto="/Home"></main-button>
			</div>
		</div>
	</div>
</template>

<script>
import socialButton from '../components/social-button';
import mainButton from '../components/main-button';
import mainInput from '../components/main-input';

export default {
	name: 'welcome',
	data() {
		return {
			msg: 'Explore diverasas profissões com quem trabalha na área',
		};
	},
	components: {
		'social-button': socialButton,
		'main-button': mainButton,
		'main-input': mainInput,
	},
};
</script>

<style scoped lang="stylus">
	@import '../assets/styles/_colors'

	$header-height = 56px
	$border-radius = 10px

	::-webkit-input-placeholder
		color #fff

	.welcome
		padding 40px 20px
		box-sizing border-box
		display flex
		flex-direction column
		justify-content space-between
		align-items center
		text-align center
		background-color rgba(0, 74, 141, 0.5)
		color #ffffff
		min-height "calc(100vh - %s)" % $header-height

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
