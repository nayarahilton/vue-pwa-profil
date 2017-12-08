<template>
	<textarea
		:name="name"
		:id="id"
		:placeholder="placeholder"
		:class="textareaStyle"
		class="textarea"
        rows="4"
		ref="input"
		v-bind:value="value"
		v-on:input="updateValue($event.target.value)"
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
		value: {
			type: String,
		},
		placeholder: {
			required: true,
			type: String,
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
	methods: {
		updateValue(value) {
			this.$emit('input', value);
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
		padding 15px
		width 100%

		&:focus
			border-color $dark-blue
			outline 0

		&--main
			border 1px solid $gray
			border-radius 10px 10px 10px 0
			color $dark-gray
</style>
