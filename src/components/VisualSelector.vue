<template>
	<div
		class="visual-selectors"
	>
		<router-link
			v-for="option of options"
			:key="option.id"
			:to="option.link"
			:class="option.class"
			class="visual-selector"
		>
			{{ option.title }}
			<span>
				{{ option.text }}
			</span>
		</router-link>
	</div>
</template>

<script>
export default {
	props: {
		design: {
			type: String,
		},
	},
	data() {
		return {
			options: [
				{
					id: 1,
					link: '/cadastro/aprendiz',
					title: 'Aprendiz',
					text: 'Ainda não sei o que fazer. Vim aqui para  descobrir coisas novas e ver a rotina de trabalho dos Gurus.',
					class: 'visual-selector--aprendiz',
				},
				{
					id: 2,
					link: '/cadastro/guru',
					title: 'Guru',
					text: 'Sou especialista! Vou dividir conhecimento sobre a minha área e ajudar os aprendizes a descobrir o melhor caminho.',
					class: 'visual-selector--guru',
				},
			],
		};
	},
};
</script>

<style lang="stylus" scoped>
	@import '../assets/styles/_colors'

	.visual-selectors
		background transparent
		font-size 12pt
		margin-bottom 20px
		width 100%

		.visual-selector
			border 1px solid $dark-pink
			border-radius 15px
			color $dark-pink
			display block
			font-size 16pt
			font-weight 600
			margin-bottom 20px
			padding 15px 15px 30px 120px
			position relative
			width 100%

			&:before
				content ''
				background-size 100%
				display inline-block
				height 100px
				left 10px
				position absolute
				top 50%
				transform translateY(-50%)
				vertical-align middle
				width: 100px

			&--aprendiz:before
				background url('../assets/icons/register-aprendiz-icon.svg') no-repeat center center

			&--guru:before
				background url('../assets/icons/register-guru-icon.svg') no-repeat center center

			span
				display block
				color $dark-gray
				font-size 14pt
				font-weight 400
				line-height 16pt

			&:focus
				border-color $dark-blue
				color $dark-blue
				outline 0
</style>
