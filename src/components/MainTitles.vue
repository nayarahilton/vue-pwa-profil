<template>
	<div
		:class="titlesStyle"
		class="titles"
	>
		<h2 class="titles__title">
			{{ titleText }}
		</h2>
		<h3 class="titles__subtitle">
			{{ subtitleText }}
		</h3>
	</div>
</template>

<script>
export default {
	props: {
		titleText: {
			required: true,
			type: String,
		},
		subtitleText: {
			type: String,
		},
		design: {
			type: String,
		},
	},
	computed: {
		titlesStyle() {
			if (this.design === 'left' || !this.design) return 'titles--left';
			if (this.design === 'center') return 'titles--center';
		},
	},
};
</script>

<style lang="stylus" scoped>
	@import '../assets/styles/_colors'

	*
		box-sizing border-box

	.titles
		background transparent
		color $dark-gray
		margin-bottom 20px
		padding 15px
		width 100%

		&--left
			text-align left

		&--center
			text-align center

		&__title
			font-size 18pt
			font-weight 300
			margin 0

		&__subtitle
			font-size 14pt
			font-weight 300
			line-height 16pt
			margin 0
</style>
