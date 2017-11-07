<template>
	<input
		:name="name"
		:id="id"		
		:required="required"
		:class="inputStyle"
        type="text"
        placeholder="Busca"
		class="input"		
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
		required: {
			type: Boolean,
		},
		design: {
			type: String,
		},
	},
	computed: {
		inputStyle() {
			if (this.design === 'main' || !this.design) return 'search-input--main';
		},
	},
};
</script>

<style lang="stylus" scoped>
	@import '../assets/styles/_colors'

	*
		box-sizing border-box

	.search-input
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

		&--login
			border solid #fff
			border-width: 0 0 1px 0;			
			color #fff
</style>