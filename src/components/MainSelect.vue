<template>
	<select
		:name="name"
		:id="id"
		:class="selectStyle"
		class="select"
	>
		<option disabled selected>{{ disabledText }}</option>
		<option
			v-for="option of options"
			:key="option.value"
			:value="option.value">
				{{ option.text }}
		</option>
	</select>
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
		required: {
			type: Boolean,
		},
		design: {
			type: String,
		},
		disabledText: {
			type: String,
		},
		options: {
			type: Array,
		},
	},
	computed: {
		selectStyle() {
			if (this.design === 'main' || !this.design) return 'select--main';
		},
	},
};
</script>

<style lang="stylus" scoped>
	@import '../assets/styles/_colors'

	*
		box-sizing border-box

	.select
		background transparent
		font-size 12pt
		margin-bottom 20px
		padding 15px
		width 100%

		&:focus
			border-color $dark-blue
			outline 0

		&--main
			border 1px solid $gray
			border-radius 15px
			color $dark-gray
</style>
