<template>
	<router-link v-if="buttonType == 'router'" class="main-btn" :to="linkto">{{ textInner }}</router-link>
	<a v-else class="main-btn">{{ textInner }}</a>
</template>

<script>
	export default {
		props: ['textInner', 'linkto', 'buttonType'],
	};
</script>

<style lang="stylus" scoped>
	@import '../assets/styles/_colors'
	$border-radius = 10px 10px 10px 0

	.main-btn
	    display block
	    color #fff
	    background-color $blue
	    border-radius $border-radius
	    padding 10px
	    min-width 100px
	    text-align center

	.main-btn
		transition background .4s ease

		&:hover
			background $dark-blue
</style>
