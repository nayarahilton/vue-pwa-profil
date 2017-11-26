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

<style lang="stylus">
	@import '../assets/styles/_colors'

	.titles
		background transparent
		box-sizing border-box
		color $dark-gray
		margin-bottom 30px
		width 100%
		line-height 2em

		&--left
			text-align left

		&--center
			text-align center

		&__title
			font-size 20pt
			margin-top 10px
			margin-bottom 10px
			font-weight 300

		&__subtitle
			font-size 14pt
			font-weight 300
			line-height 16pt
			margin 0
</style>
