<template>
	<div class="feedback-view">
		<div class="feedback-img">
			<img class="logo-symbol" src="../assets/icons/register-success-icon.svg" alt="Imagem de um crachá">
		</div>
		<div class="feedback-info">
			<h2 class="feedback-title">
				Perfil criado <br/>com sucesso!
			</h2>
			<p class="feedback-text">
				Vamos começar espalhando seu conhecimento?
			</p>
		</div>
		<main-button
			buttonType="router"
			text-inner="Primeiro post"
			linkto="/postar"
		/>
		<router-link
			class="feedback-link"
			to="/home"
		>
			Depois eu faço isso
		</router-link>
	</div>
</template>

<script>
import MainButton from '../components/MainButton';

export default {
	components: {
		'main-button': MainButton,
	},
};
</script>

<style lang="stylus" scoped>
	@import '../assets/styles/*'

	.feedback
		&-view
			min-height calc(100vh - 56px)
			display flex
			flex-direction column
			align-items center
			justify-content center
			color #333
			padding 20px
			box-sizing border-box
			text-align center

		&-img
			width 250px
			height 200px

		&-info
			padding 0 30px
			box-sizing border-box

		&-title
			font-size 34px
			line-height 100%
			margin-bottom 0

		&-text
			font-size 18px
			line-height 100%
			margin-top 10px

		&-link
			color $dark-blue
			font-size 14pt
			font-weight 700
			margin-top 40px

	.main-btn
		margin-top 20px
</style>
