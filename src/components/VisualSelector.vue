<template>
	<div
		:class="selectStyle"
		class="visual-seletors"	
	>
		<a
			v-for="option of options"
			:key="option.id"			
			class="visual-seletor"
		>
			<img
				:src="option.src"
				:alt="option.alt"
			/>
			<span>
				{{ option.text }}
			</span>
		</a>
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
					alt: 'Guru',
					text: 'Ainda não sei o que fazer. Vim aqui para  descobrir coisas novas e ver a rotina de trabalho dos Gurus.',
				},
				{
					id: 2,
					src: '',
					alt: 'Aprendiz',
					text: 'Sou especialista! Vou dividir conhecimento sobre a minha área e ajudar os aprendizes a descobrir o melhor caminho.',
				},
			],
		};
	},
	computed: {
		selectStyle() {
			if (this.design === 'main' || !this.design) return 'visual-selectors--main';
		},
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

		&--main a
			border 1px solid $dark-pink
			border-radius 15px
			color $dark-pink
			display block
			margin-bottom 10px
			padding 15px
			width 100%

			&:focus
				border-color $dark-blue
				outline 0
</style>