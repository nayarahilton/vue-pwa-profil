<template>
	<a class="social-btn" :class="socialbtnDesign" href="#">
		<span>{{ textInner }}</span>
		<div class="icon">
			<svg></svg>
		</div>
	</a>
</template>

<script>
export default {
	props: {
		textInner: {
			type: String,
		},
		design: {
			type: String,
		},
	},
	computed: {
		socialbtnDesign() {
			if (this.design === 'main' || !this.design) return 'social-btn-main';
			if (this.design === 'login') return 'social-btn-login';
		},
	},
};
</script>

<style lang="stylus" scoped>
	@import '../assets/styles/_colors'
	$border-radius = 10px

	.social-btn
		background-color #fff
		padding 10px
		borx-sizing border-box
		border-radius $border-radius
		color $blue
		display flex
		position relative
		margin-bottom 20px

		&-main
			border 1px solid $blue

		&-login
			border 0

	.icon
		background-color $blue
		border-radius 0 $border-radius $border-radius 0
		padding 2px
		width 40px
		position absolute
		top 0
		bottom 0
		right 0

	svg
		background #fff
		position absolute
		top 50%
		left 50%
		transform translate(-50%, -50%)

	span
		padding 0 15px
		display inline-block
</style>
