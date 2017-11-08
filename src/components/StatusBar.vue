<template>
	<header class="status-bar">
		<a
			:href="link"
			class="status-bar__link"
		>
			<
		</a>
		<h1
			class="status-bar__title"
		>
			{{ title }}
		</h1>
	</header>
</template>

<script>
export default {
	props: {
		link: {
			type: String,
		},
		title: {
			required: true,
			type: String,
		},
	},
};
</script>

<style lang="stylus" scoped>
	@import '../assets/styles/_mixins'
	@import '../assets/styles/_colors'

	.status-bar
		height 60px
		linear_gradient(left, lightness($dark-pink, 40%), lightness($blue, 50%))
		padding 0 20px

		&__link
			color #fff
			display inline
			line-height 60px
			margin-right 10px

		&__title
			color #fff
			font-size 18pt
			font-weight 300
			line-height 60px
			display inline
</style>
