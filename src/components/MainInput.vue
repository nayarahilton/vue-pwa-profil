<template>
	<input
		:type="type"
		:name="name"
		:id="id"
		:placeholder="placeholder"
		:class="inputStyle"
		class="input"
		ref="input"
		v-bind:value="value"
		v-on:input="updateValue($event.target.value)"
	/>
</template>

<script>
export default {
	props: {
		type: {
			required: true,
			type: String,
		},
		value: {
			type: String,
		},
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
		design: {
			type: String,
		},
	},
	computed: {
		inputStyle() {
			if (this.design === 'main' || !this.design) return 'input--main';
			if (this.design === 'login') return 'input--login';
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

	.input
		background transparent
		font-size 12pt
		margin-top 15px
		padding 15px
		width 100%

		&:focus
			border-color $dark-pink
			outline 0

		&--main
			border 1px solid $gray
			border-radius 15px
			color $dark-gray

		&--login
			border solid #fff
			border-width: 0 0 1px 0;
			color #fff

		&--invalid
			border-color $pink
			background rgba(188, 0, 135, 0.2);
</style>
