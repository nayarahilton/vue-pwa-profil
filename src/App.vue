<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
export default {
	name: 'app',
	methods: {
		showMenu: function showMenu() {
			document.querySelector('.nav').classList.add('-show');
		},
		hideMenu: function hideMenu() {
			document.querySelector('.nav').classList.remove('-show');
		},
	},
};
</script>

<style lang="stylus">
	@import url('https://fonts.googleapis.com/css?family=Cairo:200,300,400,600,700,900');
	@import './assets/styles/_colors'

	body
		margin 0
		overflow-x hidden
		color $dark-gray

	main
		overflow hidden

	#app
		font-family 'Cairo', sans-serif
		-webkit-font-smoothing antialiased
		-moz-osx-font-smoothing grayscale
		overflow hidden

	a
		text-decoration none
		cursor pointer

	svg
		width 20px
		height 20px

	main
		padding 20px
</style>
