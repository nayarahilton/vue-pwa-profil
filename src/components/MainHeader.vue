<template>
    <div>
  		<header class="header">
			<button @click="showMenu" class="nav-button">
				<span class="nav-icon">☰</span>
			</button>
		</header>
		<nav class="nav">
			<ul class="nav-list">
				<li>
					<router-link class="nav-link" to="/contato" @click.native="hideMenu">Fale Conosco</router-link>
				</li>
				<li>
					<router-link class="nav-link" to="/termos" @click.native="hideMenu">Termos de política e privacidade</router-link>
				</li>
			</ul>
			<div class="ofuscator" @click="hideMenu"></div>
		</nav>
    </div>
</template>

<script>
export default {
	methods: {
		showMenu: function showMenu() {
			document.querySelector('.nav').classList.toggle('-show');
			document.querySelector('.nav-button').classList.toggle('-rotate');
		},
		hideMenu: function hideMenu() {
			document.querySelector('.nav').classList.remove('-show');
			document.querySelector('.nav-button').classList.remove('-rotate');
		},
	},
};
</script>

<style lang="stylus" scoped>
	@import '../assets/styles/_colors'
	$header-height = 56px

    .nav-button
		color $white
		border none
		font-size 35px
		height 36px
		width 36px
		position absolute
		right 15px
		top 15px
		background transparent
		transition transform .4s ease-in-out
		z-index 5
		cursor pointer

		.nav-icon
			position absolute
			top 50%
			left 50%
			transform translate(-50%, -50%)


		&.-rotate
			transform rotate(90deg)

		&:focus
			outline none

	.nav
		background $blue
		color $white
		padding 20px
		box-sizing border-box
		position fixed
		z-index 10
		width 230px
		height 100vh
		top 0
		transform translateX(-230px)
		transition transform .4s ease-in-out

		a
			color $white
			font-size 18px
			line-height 120%
			padding 15px 0px
			display block
			box-sizing border-box

	.ofuscator
		background rgba(0, 0, 0, 0.8)
		position fixed
		z-index -1
		left 230px
		bottom 0
		top 0
		height 100vh
		width 100vw
		right 0
		opacity 0
		visibility hidden
		transition opacity .2s ease-in-out, visibility .2s ease-in-out

	&.-show
		transform none

		.ofuscator
			opacity 1
			visibility visible

	.nav-list
		list-style none
		margin 0
		padding 0

	.header
		position absolute
		z-index 20
		top 0
		right 0
		height $header-height

</style>

