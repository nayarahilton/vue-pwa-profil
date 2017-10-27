<template>
    <router-link class="main-btn" to="/Home">{{ textInner }}</router-link>
</template>

<script>
	export default {
	    props: ['text-inner']
	}
</script>

<style scoped lang="stylus">
	$border-radius = 10px

	.main-btn
	    display block
	    color #ffffff
	    background-color #0084FA
	    border-radius $border-radius
	    padding 10px
	    margin-bottom 20px
	    margin-top 20px
	    min-width 100px
	    text-align center		
</style>