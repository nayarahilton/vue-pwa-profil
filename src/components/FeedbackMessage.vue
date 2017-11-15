<template>
	<div
		class="feedback"
	>	
		<span class="feedback__text">
			{{ msgText }}
		</span>
	</div>
</template>

<script>
export default {
	props: {
		msgText: {
			required: true,
			type: String,
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
		margin-bottom 20px
		padding 15px
		width 100%

		&__text
            color red
			font-size 12pt
			font-weight 300
			margin 0
            text-align center
</style>