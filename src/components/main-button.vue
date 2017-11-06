<template>
    <router-link v-if="buttonType === 'router'" class="main-btn" :to="linkto">{{ textInner }}</router-link>
		<a v-else class="main-btn" >{{ textInner }}</a>
</template>

<script>
  export default {
    props: ['text-inner', 'eventclick', 'linkto', 'buttonType'],
  };
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
