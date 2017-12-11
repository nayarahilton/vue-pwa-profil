<template>
	<main class="main">
		<header class="header">
			<div class="content-holder">
			<div class="page-header">
				<img class="logo-symbol" src="../assets/logo.svg" alt="Profil Logo">
			</div>
			<div class="social">
				<a href="https://www.instagram.com/profilapp/" target="_blank" class="social-link">
					<i class="insta-icon"></i>
				</a>
				<a href="https://m.facebook.com/profilapp/" target="_blank" class="social-link">
					<i class="face-icon"></i>
				</a>
				<router-link to="/bemvindo" class="social-link">
					<i class="app-icon"></i>
				</router-link>
			</div>
			</div>
		</header>
		<section class="full">
			<div class="content">
				<div class="col">
					<img class="logo" src="../assets/logotipo.svg" alt="Profil Logo">
					<p class="text">Escolher uma profissão nunca foi fácil. Mas com Profil vai ser. Profil conecta a rotina de profissionais com os estudantes que estão em fase pré-vestibular. Assim você conhece uma profissão nova com aquele que vive ela diariamente: o profissional. <strong>PROFIL, a descoberta de um futuro ideal, de acordo com o seu perfil.</strong></p>
					<main-button buttonType="router" linkto="/bemvindo" text-inner="Crie uma conta"></main-button>
				</div>
				<img class="mobile-img" src="../assets/img/mobile-hand.png" alt="">
				<img class="mobile-img-mob" src="../assets/img/mobile-hand-mob.png" alt="">
			</div>
		</section>
		<section class="about">
			<div class="content">
				<div class="col">
					<div class="guru-icon"></div>
					<h2 class="title">Guru</h2>
					<p class="text">No Profil, você, profissional de qualquer área, compartilha sua rotina profissional e informações sobre sua carreira, para que jovens do ensino médio descubram o máximo de informação possível sobre diversas profissões. Além disso, você ainda recebe moedas por este conteúdo, que podem ser trocadas por prêmios.</p>
				</div>
				<div class="col">
					<div class="aprendiz-icon"></div>
					<h2 class="title">Aprendiz</h2>
					<p class="text">No Profil, você, jovem do ensino médio, acompanha a rotina de profissionais de diversas áreas, que compartilham seu dia a dia e diversas informações sobre a profissão e a carreira que a pessoa seguiu. Além disto, você ainda recebe moedas de acordo com a sua interação no Profil, que podem ser trocadas por prêmios.</p>
				</div>
			</div>
		</section>
		<section class="video-section">
			<video class="video" controls src="../assets/video-profil.mp4"></video>
		</section>
		<section class="app">
			<div class="content">
				<div class="features">
					<ul class="feature-list">
						<li> <span class="coins-icon icon"></span><span class="feature">Troque moedas por cursos</span></li>
						<li> <span class="favorite-icon icon"></span><span class="feature">Guarde seus posts favoritos</span></li>
					</ul>
				</div>
				<div class="img">
					<p>Explore o profil</p>
					<img src="../assets/img/mockup.png" alt="">
					<main-button buttonType="router" linkto="/bemvindo" text-inner="Crie uma conta"></main-button>
				</div>
				<div class="features">
					<ul class="feature-list">
						<li> <span class="photo-icon icon"></span><span class="feature">Rotina da profissão registrada</span></li>
						<li> <span class="search-icon icon"></span><span class="feature">Pesquise profissões</span></li>
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
		align-items flex-end
		justify-content center
		background-image url('../assets/img/intro-bg.jpg')
		background-repeat no-repeat
		background-attachment fixed
		text-align center
		background-size cover
		color $white
		background-position 50%

		.content-holder
			position relative
			z-index 2

		@media (max-width 768px)
			background-image url('../assets/img/header-bg.jpg')
			align-items center
			position relative

			&:after
				content ''
				position absolute
				top 0
				left 0
				right 0
				bottom 0
				background-image -webkit-linear-gradient(-120deg, rgba(188,0,135,0.9), rgba(0,132,250,0.7))
				box-shadow inset -1px -4px 20px 0px rgba(0, 0, 0, 0.1)

	.logo-symbol
		margin-left 15px
		width 240px

	.text
		font-size 18px
		margin-top 15px

	.icon
		display inline-block
		vertical-align middle
		background $white

	.coins-icon
		mask-image url(../assets/icons/coins-icon.svg)
		width 50px
		height 30px

	.photo-icon
		mask-image url(../assets/icons/register-upload-photo-icon.svg)
		width 40px
		height 40px

	.favorite-icon
		mask-image url(../assets/icons/profiles-coins-icon.svg)
		width 40px
		height 40px

	.search-icon
		mask-image url(../assets/icons/search-icon.svg)
		width 25px
		height 25px


	.insta-icon
		background url('../assets/icons/insta-icon.svg')

	.face-icon
		background url('../assets/icons/face-icon.svg')

	.app-icon
		background url('../assets/icons/app-icon.svg')

	.social-link
		position relative
		display inline-block
		height 50px
		line-height 50px
		width 50px
		margin 10px
		border-radius 50%
		color $white
		background linear-gradient(-140deg, $blue, $pink)

		&:hover
			background $pink

		i
			display inline-block
			width 28px
			height 28px
			position absolute
			top 50%
			left 50%
			transform translate(-50%, -50%)


	.content
		max-width 1100px
		box-sizing border-box
		margin 0 auto
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
		background-image url('../assets/img/about-bg.jpg')
		text-shadow 1px 1px 1px rgba(0, 0, 0, .3)
		color white
		position relative

		&:after
			content ''
			position absolute
			top 0
			bottom 0
			right 0
			left 0
			background rgba(0, 0, 0, 0.5)

		.col
			position relative
			z-index 2


		.text
			text-align center

	.full
		background-image url('../assets/img/intro-bg.jpg')
		background-position 50%


		@media screen and (max-width 767px)
			text-align center

			.col:first-child
				max-width 300px

			.title
				color $blue
				font-size 50px

		.mobile-img
			max-height 90vh
			max-width 100%
			display inline-block
			display none

			@media screen and (min-width 768px)
				position absolute
				left 50%
				bottom 0
				display block

		.mobile-img-mob
			max-width 400px

			@media screen and (min-width 768px)
				display none

	.video-section
		min-height auto
		margin-bottom -10px
		.video
			max-width 100%

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
			margin-top 35px
			margin-bottom 35px
			font-size 20px
			line-height 24px

		.feature
			display inline-block
			vertical-align middle
			width calc(100% - 80px)
			margin-left 20px
			text-align left

    .img
		text-align center
		margin-top 20px

		@media screen and (max-width 768px)
			order 3

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
		color #eee
		background #333
		font-size 10px

</style>
