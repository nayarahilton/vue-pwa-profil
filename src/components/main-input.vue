<template>
	<input :type="type" :name="name" :id="id" class="input" :class="inputDesign" :placeholder="placeholder">
</template>

<script>
export default {
	props: {
		type: {
			required: true,
			type: String,
		},
		name: {
			type: String,
		},
		id: {
			type: String,
		},
		design: {
			type: String,
		},
		placeholder: {
			required: true,
			type: String,
		},
	},
	computed: {
		inputDesign() {
			if (this.design === 'main' || !this.design) return 'input-main';
			if (this.design === 'home') return 'input-home';
		},
	},
};
</script>

<style scoped lang="stylus">
	*
		box-sizing border-box
	.input
		margin-bottom 10px
		padding 10px
		width 100%

		&-main
			border 1px solid #ccc
			border-radius 10px
			color #ccc

		&-home
			border-bottom 1px solid #fff
			color #fff
</style>