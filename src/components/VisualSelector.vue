<template>
	<div
		class="visual-selectors"
	>
		<router-link
			v-for="option of options"
			:key="option.id"
			:to="option.link"
			class="visual-selector"
		>
			{{ option.title }}
			<img
				:src="option.src"
			/>
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
					src: '',
					link: '/cadastro/guru',
					title: 'Guru',
					text: 'Ainda não sei o que fazer. Vim aqui para  descobrir coisas novas e ver a rotina de trabalho dos Gurus.',
				},
				{
					id: 2,
					src: '',
					link: '/cadastro/aprendiz',
					title: 'Aprendiz',
					text: 'Sou especialista! Vou dividir conhecimento sobre a minha área e ajudar os aprendizes a descobrir o melhor caminho.',
				},
			],
		};
	},
};
</script>

<style lang="stylus" scoped>
	@import '../assets/styles/_colors'

	*
		box-sizing border-box

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
			padding 15px
			width 100%

			span
				display block
				color $dark-gray
				font-size 12pt
				font-weight 400

			&:focus
				border-color $dark-blue
				color $dark-blue
				outline 0
</style>
