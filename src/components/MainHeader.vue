<template>
    <div>
  		<header class="header">
			<button @click="showMenu" class="nav-button">
				<span class="nav-icon">☰</span>
			</button>
			<span class="logo">Profil</span>
		</header>
		<nav class="nav">
			<ul class="nav-list">
				<li>
					<router-link class="nav-link" to="/Home" @click.native="hideMenu">Home</router-link>
				</li>
				<li>
					<router-link class="nav-link" to="/camera" @click.native="hideMenu">Post a picture</router-link>
				</li>
				<li>
					<router-link class="nav-link" to="/" @click.native="hideMenu">Login</router-link>
				</li>
				<li>
					<router-link class="nav-link" to="/register" @click.native="hideMenu">Cadastro</router-link>
				</li>
				<li>
					<router-link class="nav-link" to="/profession" @click.native="hideMenu">Profession</router-link>
				</li>
				<li>
					<router-link class="nav-link" to="/ask" @click.native="hideMenu">AskView</router-link>
				</li>
				<li>
					<router-link class="nav-link" to="/answer" @click.native="hideMenu">AnswerView</router-link>
				</li>
				<li>
					<router-link class="nav-link" to="/questions" @click.native="hideMenu">QuestionsView</router-link>
				</li>
				<li>
					<router-link class="nav-link" to="/feedback-answer" @click.native="hideMenu">FeedbackAnswerView</router-link>
				</li>
				<li>
					<router-link class="nav-link" to="/answered-questions" @click.native="hideMenu">AnsweredQuestionsView</router-link>
				</li>
				<li>
					<router-link class="nav-link" to="/not-answered-questions" @click.native="hideMenu">NotAnsweredQuestionsView</router-link>
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
			document.querySelector('.nav').classList.add('-show');
		},
		hideMenu: function hideMenu() {
			document.querySelector('.nav').classList.remove('-show');
		},
	},
};
</script>

<style lang="stylus" scoped>
	@import '../assets/styles/_colors'
	$header-height = 56px

    .nav-button
		color $blue
		border 1px solid #ddd
		font-size 20px
		background-color #f9f9f9
		height 56px
		width 56px
		position absolute

	.nav
		background #ffffff
		padding 20px
		box-sizing border-box
		position fixed
		z-index 1
		width 230px
		height 100vh
		top 0
		transform translateX(-230px)
		transition transform .4s ease-in-out

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
		margin 0
		box-sizing border-box
		color #ffffff
		background-color #ffffff
		border-bottom 1px solid rgba(0, 0, 0, .1)
		display flex
		align-items center
		height $header-height

	.logo
		font-size 20px
		letter-spacing 0.6em
		text-transform uppercase
		font-weight 700
		box-sizing border-box
		padding 3px
		padding-left calc(0.6em + 3px)
		border-radius 14px 14px 14px 0
		background-color $blue
		margin 0 auto
</style>

