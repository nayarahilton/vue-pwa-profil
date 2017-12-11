<template>
	<div class="profession">
		<status-bar
			link="/home"
			title="Home"
		/>
		<slider-items class="stories" :slides="stories"/>
		<div class="profession_resume">
			<div class="profession_img-holder">
				<img class="profession_img" src="/static/img/img-nayara.jpg" alt="Foto Nayara">
				<p class="profession_img-strip">#funcionáriodomês</p>
			</div>
			<h1 class="profession_name">Design Digital</h1>
			<div class="profession_follow-holder">
				<div class="profession_followers"><strong>1234</strong> seguidores</div>
				<main-button text-inner="seguir"></main-button>
			</div>
		</div>
		<div class="profession_features">
			<slider-items check="true" class="features" :slides="features"/>
		</div>
		<!-- <div class="profession_info-slider">
			<h2 class="profession_info-slider_title">O que é Design Digital?</h2>
			<div class="profession_faq">
				<div>
					<question-box slideBox="true" answers="true" class="profession_info-slider_list"></question-box>
				</div>
			</div>
		</div> -->
		<div class="profession_info-slider">
			<h2 class="profession_info-slider_title">Média Salarial por tempo de profissão</h2>
			<salary-slider :salaries="salaries" />
		</div>
		<div class="profession_faq">
			<h2 class="profession_faq_title">Principais Dúvidas</h2>
			<div>
				<question-box slideBox="true" questions="true" answers="true" class="profession_info-slider_list"></question-box>
			</div>
		</div>
		<post-card resume="true" />
	</div>
</template>

<script>
import ProfileResume from '@/components/ProfileResume';
import PostReactions from '@/components/PostReactions';
import SliderItems from '@/components/SliderItems';
import PostCard from '@/components/PostCard';
import MainButton from '@/components/MainButton';
import StatusBar from '@/components/StatusBar';
import QuestionBox from '@/components/QuestionBox';
import SalarySlider from '@/components/SalarySlider';

export default {
	data() {
		return {
			card: null,
			features: [
				{
					name: 'ferramentas',
					value: 'uso_computador',
					id: 'uso_computador',
					src: '/static/img/icn_cadastro_caracteristica_uso-computador.svg',
					text: 'Uso muito computador',
				},
				{
					name: 'ferramentas',
					value: 'logica_inteligencia',
					id: 'logica_inteligencia',
					src: '/static/img/icn_cadastro_caracteristica_logica-inteligencia.svg',
					text: 'Lógica e inteligência',
				},
				{
					name: 'ambiente',
					value: 'sentado',
					id: 'sentado',
					src: '/static/img/icn_cadastro_caracteristica_sentado.svg',
					text: 'Trabalho sentado',
				},
				{
					name: 'ferramentas',
					value: 'coordenacao_motora',
					id: 'coordenacao_motora',
					src: '/static/img/icn_cadastro_caracteristica_coordenacao-motora.svg',
					text: 'Coordenação motora impecável',
				},
				{
					name: 'ambiente',
					value: 'agitado',
					id: 'agitado',
					src: '/static/img/icn_cadastro_caracteristica_agitado.svg',
					text: 'Super agitado',
				},
			],
			stories: [
				{
					src: '/static/img/img-nayara.jpg',
					text: '@nayarahilton',
				},
				{
					src: '/static/img/img-lucas.jpg',
					text: '@lucassilva',
				},
				{
					src: '/static/img/img-pri.jpg',
					text: '@prisanttos',
				},
				{
					src: '/static/img/img-vinicius.jpg',
					text: '@vinibueno',
				},
				{
					src: '/static/img/img-liege.jpg',
					text: '@lilisantos',
				},
				{
					src: '/static/img/img-eduardo.jpg',
					text: '@eduguimares',
				},
				{
					src: '/static/img/img-rashel.jpg',
					text: '@rashel',
				},
				{
					src: '/static/img/img-gabriel.jpg',
					text: '@gabriellopes',
				},
				{
					src: '/static/img/img-nayara.jpg',
					text: '@nayarahilton',
				},
				{
					src: '/static/img/img-lucas.jpg',
					text: '@lucassilva',
				},
				{
					src: '/static/img/img-pri.jpg',
					text: '@prisanttos',
				},
				{
					src: '/static/img/img-vinicius.jpg',
					text: '@vinibueno',
				},
				{
					src: '/static/img/img-liege.jpg',
					text: '@lilisantos',
				},
				{
					src: '/static/img/img-eduardo.jpg',
					text: '@eduguimares',
				},
				{
					src: '/static/img/img-rashel.jpg',
					text: '@rashel',
				},
				{
					src: '/static/img/img-gabriel.jpg',
					text: '@gabriellopes',
				},
			],
			salaries: [
				{
					year: 'Até 1 ano',
					salary: 'R$ 1.000,00',
				},
				{
					year: 'Até 2 anos',
					salary: 'R$ 3.000,00',
				},
				{
					year: 'Até 5 anos',
					salary: 'R$ 5.000,00',
				},
				{
					year: 'Até 10 anos',
					salary: 'R$ 10.000,00',
				},
				{
					year: 'Mais de 10 anos',
					salary: 'R$ 18.000,00',
				},
			],
		};
	},
	components: {
		'profile-resume': ProfileResume,
		'post-reactions': PostReactions,
		'slider-items': SliderItems,
		'post-card': PostCard,
		'main-button': MainButton,
		'status-bar': StatusBar,
		'question-box': QuestionBox,
		'salary-slider': SalarySlider,
	},
};
</script>

<style lang="stylus">

	@import '../assets/styles/*'

	.reactions
		justify-content flex-end
		margin-top 5px

	.profile-resume
		margin-bottom 10px

	.stories
		padding-top 10px

	.profession
		&_resume
			max-width 500px
			margin 0 auto
			text-align center
			margin-top 20px

		&_img-holder
			light-border($pink)
			width 150px
			height 150px
			background #fff
			border-radius 10px 10px 10px 0px
			display inline-block
			position relative
			padding 3px

		&_img
			position absolute
			left 50%
			top 50%
			transform translate(-50%, -50%)
			width 100%
			height 100%
			border-radius 10px 10px 10px 0px
			object-fit cover
			object-position center

			&-strip
				background $blue
				border-radius 5px 5px 5px 0px
				color $white
				position absolute
				left 50%
				transform translateX(-50%)
				width 200px
				padding 5px
				bottom 15px

		&_name
			margin 0
			color $pink

		&_follow-holder
			display flex
			justify-content space-between
			align-items center
			padding 20px
			margin 20px 0
			border-top 1px solid #f4f4f4
			border-bottom 1px solid #f4f4f4

		&_followers
			color $pink

		&_info-slider
			border-bottom 1px solid #f6f6f6
			background #f9f9f9
			padding 30px 0

		&_faq
			holder()


		&_faq_title
			padding 0 20px
			font-size 26px
			line-height 30px
			color $pink

	.characteristic-checkbox
		pointer-events none

</style>
