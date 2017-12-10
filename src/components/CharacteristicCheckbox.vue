<template>
	<div
		class="characteristic"
	>
		<input
			type="checkbox"
			:name="name"
			:id="id"
			:value="value"
			class="characteristic-checkbox"
		>
		<span class="characteristic-text">
			{{ text }}
		</span>
		<img
			class="characteristic-icon"
			:src="src"
		>
	</div>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
		},
		id: {
			type: String,
		},
		value: {
			type: String,
		},
		src: {
			type: String,
		},
		text: {
			type: String,
		},
	},
};
</script>

<style lang="stylus" scoped>
	@import '../assets/styles/_colors'

	*
		box-sizing border-box

	.characteristic
		margin 0
		padding 0
		position relative
		text-align center
		width 90px

		&-checkbox
			background transparent
			border-radius 100%
			height 70px
			width 70px
			-webkit-appearance: none;

			&:checked
				background lightness($pink, 90%)

		&-text
			display block
			color $dark-gray
			font-size 10pt
			line-height 12pt
			text-align center

		&-icon
			left 0
			height 70px
			margin 0 auto
			pointer-events none
			position absolute
			right 0
			top 0
			width 70px

</style>
