<template>
	<span
		class="feedback"
		:class="feedbackStyle"
	>
		{{ msgText }}
	</span>
</template>

<script>
export default {
	props: {
		msgText: {
			required: true,
			type: String,
		},
		design: {
			type: String,
		},
	},
	computed: {
		feedbackStyle() {
			if (this.design === 'main' || !this.design) return 'feedback--main';
			if (this.design === 'login') return 'feedback--login';
		},
	},
};
</script>

<style lang="stylus" scoped>
	@import '../assets/styles/_colors'

	*
		box-sizing border-box

	.feedback
		background transparent
		font-size 14pt
		font-weight 600
		margin-bottom 20px
		padding 0
		width 100%

		&--login
			color lightness(red, 70%)
			text-align center

		&--main
			color red
			text-align left
</style>
