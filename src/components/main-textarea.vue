<template>
	<textarea
		:name="name"
		:id="id"
		:placeholder="placeholder"
		:required="required"
		:class="textareaStyle"
		class="textarea"
        rows="4"		
	/>
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
		placeholder: {
			required: true,
			type: String,
		},
		required: {
			type: Boolean,
		},
		design: {
			type: String,
		},
	},
	computed: {
		textareaStyle() {
			if (this.design === 'main' || !this.design) return 'textarea--main';
		},
	},
};
</script>

<style lang="stylus" scoped>
	@import '../assets/styles/_colors'

	*
		box-sizing border-box

	.textarea
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