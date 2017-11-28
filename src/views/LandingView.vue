<template>
	<main class="main">
		<header class="header">
			<div class="content-holder">
			<div class="page-header">
				<img class="logo-symbol" src="../assets/logo.svg" alt="Profil Logo">
			</div>
			<div class="social">
				<div class="social-link">
					<a href="https://twitter.com/lianliu19910622" target="_blank"><i class="fa fa-twitter fa-lg">insta</i></a>
				</div>
				<div class="social-link">
					<a href="https://www.linkedin.com/pub/lian-liu/aa/29/643" target="_blank"><i class="fa fa-linkedin fa-lg">face</i></a>
				</div>
				<div class="social-link">
					<a href="https://codepen.io/lianliu/" target="_blank"><i class="fa fa-codepen fa-lg">app</i></a>
				</div>
			</div>
			</div>
		</header>
		<section class="full">
			<div class="content">
				<div class="col">
					<img class="logo" src="../assets/logotipo.svg" alt="Profil Logo">
					<p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem eum nobis, aperiam debitis delectus culpa adipisci quos, illo saepe sequi praesentium perferendis vitae laboriosam repellendus alias consequatur earum nisi fugit.</p>
					<main-button buttonType="router" linkto="/welcome" text-inner="Crie uma conta"></main-button>
				</div>
				<img class="mobile-img" src="../assets/img/mobile-hand.png" alt="">
			</div>
		</section>
		<section class="about">
			<div class="content">
				<div class="col">
					<div class="guru-icon"></div>
					<h2 class="title">Guru</h2>
					<p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem eum nobis, aperiam debitis delectus culpa adipisci quos, illo saepe sequi praesentium perferendis vitae laboriosam repellendus alias consequatur earum nisi fugit.</p>
				</div>
				<div class="col">
					<div class="aprendiz-icon"></div>
					<h2 class="title">Aprendiz</h2>
					<p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem eum nobis, aperiam debitis delectus culpa adipisci quos, illo saepe sequi praesentium perferendis vitae laboriosam repellendus alias consequatur earum nisi fugit.</p>
				</div>
			</div>
		</section>
		<section class="app">
			<div class="content">
				<div class="features">
					<ul class="feature-list">
						<li>Feature 1</li>
						<li>Feature 2</li>
					</ul>
				</div>
				<div class="img">
					<img src="https://appmaker.xyz/pages/frontend/assets/images/google_pixel_device_white.png" alt="">
				</div>
				<div class="features">
					<ul class="feature-list">
						<li>Feature 1</li>
						<li>Feature 2</li>
					</ul>
				</div>
			</div>
		</section>
		<footer class="footer">
			Este site trata-se de uma publicação temporária para propósitos estritamente acadêmicos e sem fins lucrativos. Em atendimento às exigências da Lei 9.610/98, do parágrafo 4°, do Artigo 184, do Código Penal, os discentes responsáveis por esta publicação colocam-se à disposição, por intermédio do e-mail naylop@gmail.com, para dirimir quaisquer dúvidas referentes à eventual violação de direitos autorais, comprometendo-se desde já, a retirar do ar, qualquer texto, som ou imagem pertencente a autor ou titular que se sinta direta ou indiretamente prejudicado.
		</footer>
	</main>
</template>

<script>
import SocialButton from '../components/SocialButton';
import MainButton from '../components/MainButton';
import MainInput from '../components/MainInput';
import MainTitles from '../components/MainTitles';

export default {
	components: {
		'social-button': SocialButton,
		'main-button': MainButton,
		'main-titles': MainTitles,
		'main-input': MainInput,
	},
};
</script>

<style lang="stylus" scoped>
	@import '../assets/styles/_mixins'
	@import '../assets/styles/_colors'

	.main
		padding 0

		.main-btn
			display inline-block
			min-width 200px
			margin-top 30px


	$header-height = 56px
	$border-radius = 10px

	::-webkit-input-placeholder
		color #fff

	// Header

	.header
		height 500px
		display flex
		align-items center
		justify-content center
		background-image url('./../assets/img/header-bg.jpg')
		background-position center
		background-repeat no-repeat
		background-size cover
		background-attachment fixed
		text-align center
		color $white

	.logo-symbol
		margin-left 15px

	.text
		font-size 18px
		margin-top 15px


	.social-link
		display inline-block
		height 50px
		line-height 50px
		width 50px
		margin 5px
		border 1px solid $white
		border-radius 50%
		background-color $white


	holder()
		max-width 1100px
		box-sizing border-box
		margin 0 auto

	.container
		holder()


	.content
		holder()
		padding 0 50px
		display flex
		align-items center
		min-height 100vh
		position relative

		@media screen and (max-width 767px)
			flex-direction column

	section
		min-height 100vh
		width 100%
		background-size cover
		background-attachment fixed
		position relative

	.col
		padding 50px 20px
		box-sizing border-box

		@media screen and (min-width 768px)
			width 50%
			padding 50px

	.about
		background-image url('./../assets/img/about-bg.jpg')
		color white

		.text
			text-align center

	.full
		background-image url('./../assets/img/intro-bg.jpg')


		@media screen and (max-width 767px)
			text-align center

			.title
				color $blue
				font-size 50px

		.mobile-img
			max-height 80vh
			max-width 100%
			display inline-block

			@media screen and (min-width 768px)
				position absolute
				right 0
				bottom 0

	.app
		color white
		justify-content center
		padding 50px 20px
		box-sizing border-box
		position relative
		background-image -webkit-linear-gradient(-140deg, $blue, $pink)

	.features
		color white
		text-align center

		@media screen and (min-width 768px)
			width 30%

    .feature-list
		margin 0
		padding 0
		list-style none

		li
			margin-top 10px
			font-size 35px

    .img
		text-align center
		margin-top 20px

		@media screen and (min-width 768px)
			width 60%

		img
			max-height 70vh
			max-width 100%

	.aprendiz-icon,
	.guru-icon
		background-color $white
		margin 0 auto

	.aprendiz-icon
		mask-image url(../assets/icons/register-aprendiz-icon.svg)
		width 200px
		height 200px

	.guru-icon
		mask-image url(../assets/icons/register-guru-icon.svg)
		width 170px
		height 180px

	.title
		font-size 50px
		line-height 100%
		text-align center

	.footer
		padding 20px
		box-sizing border-box
		color $gray
		font-size 10px

</style>
