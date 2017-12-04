<template>
	<span
		class="feedback"
		:class="feedbackStyle"
	>
		<slot></slot>
	</span>
</template>

<script>
export default {
	props: {
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
		display block
		font-size 14pt
		font-weight 600
		margin-top 10px
		margin-bottom 15px
		padding 0
		width 100%

		&--login
			color $white
			background $pink
			padding 2px 10px
			border-radius 10px 10px 10px 0
			text-align center
			display inline-block
			width auto
			font-size 15px

		&--main
			color $pink
			text-align left
</style>
