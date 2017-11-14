<template>
	<div
		:class="alertStyle"
		class="alert"
	>	
		<span class="alert__text">
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
		design: {
			type: String,
		},
	},
	computed: {
		alertStyle() {
			if (this.design === 'main' || !this.design) return 'alert--main';
			if (this.design === 'danger') return 'alert--center';
		},
	},
};
</script>

<style lang="stylus" scoped>
	@import '../assets/styles/_colors'

	*
		box-sizing border-box

	.titles
		background transparent
		margin-bottom 20px
		padding 15px
		width 100%

		&--left
			color 

		&--danger
			color red

        &--sucess
            color green

		&__text
			font-size 12pt
			font-weight 300
			margin 0
</style>