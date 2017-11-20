<template>
	<div class="profession">
		<slider-items />
		<div class="profession_resume">
			<div class="profession_img-holder">
				<img class="profession_img" src="http://nosrc.fbiz.com.br/640x480/ddd/777" alt="">
				<p class="profession_img-strip">#funcionáriodomês</p>
			</div>
			<h1 class="profession_name">Design Digital</h1>
			<div class="profession_follow-holder">
				<div class="profession_followers"><strong>1234</strong> seguidores</div>
				<main-button text-inner="seguir"></main-button>
			</div>
		</div>
		<div class="profession_features">
			<ul class="profession_features-list">
				<li class="profession_features-item" v-for="item in items">
					<div class="profession_features_img-holder">
						<img class="profession_features_img" src="http://nosrc.fbiz.com.br/640x480/ddd/777" />
					</div>
					<p class="profession_features_text">{{item.text}}</p>
				</li>
			</ul>
		</div>
		<div class="profession_info-slider">
			<h2 class="profession_info-slider_title">O que é Design Digital?</h2>
			<ul class="profession_info-slider_list">
				<li class="profession_info-slider_item -text">
					<profile-resume
						image="http://nosrc.fbiz.com.br/640x480/ddd/777"
						nickname="Nayara Hilton"
						username="@nayarahilton"
						@click.native="goToProfile(picture['.key'])"
					></profile-resume>
					<strong class="profession_info-slider_text">Uma mistura de muita coisa</strong>
					<p class="profession_info-slider_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam magni ea odit consectetur voluptatibus illum cumque voluptate cupiditate quod nisi, ab, quasi quos praesentium aliquam fugit rerum dolor beatae vero.</p>
					<post-reactions />

				</li>
				<li class="profession_info-slider_item -text">
					<profile-resume
						image="http://nosrc.fbiz.com.br/640x480/ddd/777"
						nickname="Nayara Hilton"
						username="@nayarahilton"
						profession="#Profissão"
						@click.native="goToProfile(picture['.key'])"
					></profile-resume>
					<strong class="profession_info-slider_text">Uma mistura de muita coisa</strong>
					<p class="profession_info-slider_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam magni ea odit consectetur voluptatibus illum cumque voluptate cupiditate quod nisi, ab, quasi quos praesentium aliquam fugit rerum dolor beatae vero.</p>
					<post-reactions />
				</li>
			</ul>
		</div>
		<div class="profession_info-slider">
			<h2 class="profession_info-slider_title">Média Salarial por tempo de profissão</h2>
			<ul class="profession_info-slider_list">
				<li class="profession_info-slider_item">
					<strong class="profession_info-slider_text">Até 2 anos</strong>
					<p class="profession_info-slider_salary">R$ 2.000,00</p>
				</li>
				<li class="profession_info-slider_item">
					<strong class="profession_info-slider_text">Até 5 anos</strong>
					<p class="profession_info-slider_salary">R$ 5.000,00</p>
				</li>
				<li class="profession_info-slider_item">
					<strong class="profession_info-slider_text">Até 8 anos</strong>
					<p class="profession_info-slider_salary">R$ 8.000,00</p>
				</li>
				<li class="profession_info-slider_item">
					<strong class="profession_info-slider_text">Mais de 10 anos</strong>
					<p class="profession_info-slider_salary">R$ 15.000,00</p>
				</li>
			</ul>
		</div>
		<div class="profession_faq">
			<h2 class="profession_faq_title">Principais Dúvidas</h2>
			<ul class="profession_info-slider_list">
				<li class="profession_info-slider_item -text">

					<div class="profession_faq_question">
						<p>Lorem ipsum dolor sit amet aliqua?</p>
					</div>

					<div class="profession_faq_answer">
						<profile-resume
							image="http://nosrc.fbiz.com.br/640x480/ddd/777"
							nickname="Nayara Hilton"
							username="@nayarahilton"
							@click.native="goToProfile(picture['.key'])"
						></profile-resume>
						<strong class="profession_info-slider_text">Uma mistura de muita coisa</strong>
						<p class="profession_info-slider_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam magni ea odit consectetur voluptatibus illum cumque voluptate cupiditate quod nisi, ab, quasi quos praesentium aliquam fugit rerum dolor beatae vero.</p>
						<post-reactions />
					</div>

				</li>
				<li class="profession_info-slider_item -text">

					<div class="profession_faq_question">
						<p>Lorem ipsum dolor sit amet aliqua?</p>
					</div>

					<div class="profession_faq_answer">
						<profile-resume
							image="http://nosrc.fbiz.com.br/640x480/ddd/777"
							nickname="Nayara Hilton"
							username="@nayarahilton"
							@click.native="goToProfile(picture['.key'])"
						></profile-resume>
						<strong class="profession_info-slider_text">Uma mistura de muita coisa</strong>
						<p class="profession_info-slider_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam magni ea odit consectetur voluptatibus illum cumque voluptate cupiditate quod nisi, ab, quasi quos praesentium aliquam fugit rerum dolor beatae vero.</p>
						<post-reactions />
					</div>

				</li>
			</ul>
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

export default {
	data() {
		return {
			card: null,
			items: [
				{ text: 'Ajudo pessoas' },
				{ text: 'Salvo vidas' },
				{ text: 'Ajudo animais' },
				{ text: 'Viajo muito' },
				{ text: 'Trabalho de casa' },
			],
		};
	},
	components: {
		'profile-resume': ProfileResume,
		'post-reactions': PostReactions,
		'slider-items': SliderItems,
		'post-card': PostCard,
		'main-button': MainButton,
	},
};
</script>

<style lang="stylus" scoped>

	@import '../assets/styles/*'

	strong
		display block

	.reactions
		justify-content flex-end
		margin-top 5px

	.profile-resume
		margin-bottom 10px

	.profession
		background #fff


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
			border-radius 50%
			display inline-block
			position relative

		&_img
			position absolute
			left 50%
			top 50%
			transform translate(-50%, -50%)
			width 150px
			height 150px
			border-radius 50%
			object-fit cover
			object-position center

			&-strip
				background $blue
				border-radius 10px 10px 10px 0px
				color $white
				position absolute
				left 50%
				transform translateX(-50%)
				width 180px
				bottom 0

		&_name
			margin 0
			color $pink

		&_follow-holder
			display flex
			justify-content space-between
			align-items center
			padding 20px
			margin 20px 0
			border-top 1px solid $gray
			border-bottom 1px solid $gray

		&_followers
			color $pink

		&_features
			box-shadow -2px 9px 18px 0px #00000026
			padding-bottom 20px
			position relative

		&_features-list
			nowrap-list()
			holder()

		&_features-item
			nowrap-list-item()
			align-items center
			min-width 70px

		&_features_img-holder
			light-border()
			width 65px
			height 65px
			border-radius 50%
			background #fff

		&_features_img
			object-fit cover
			object-position center
			border-radius 50%
			width 65px
			height 65px

		&_features_text
			font-size 14px
			line-height 16px

		&_info-slider
			border-bottom 1px solid #ddd
			background #eee
			padding 30px 0

		&_info-slider_list
			list-style none
			margin 0
			padding 0
			max-width 100%
			nowrap-list()
			holder()

		&_info-slider_item
			nowrap-list-item()
			text-align left
			min-width 32%
			max-width none

			&.-text
				min-width 70%

				.profession_info-slider_text:not(p)
					font-size 15px
					margin-bottom 5px

				&:not(:first-child)
					margin-left 35px


		&_info-slider_title
			holder()
			font-size 16px
			line-height 100%
			margin 0 auto 20px auto
			font-size 15px
			padding 0 20px
			color $blue

		&_info-slider_text
			line-height 19px
			margin 0
			font-size 14px

		&_info-slider_salary
			font-size 17px
			margin 0
			line-height 18px

		&_faq
			holder()

			.profession_info-slider_item
				border-top $pink 1px solid
				border-bottom $pink 1px solid

		&_faq_title
			padding 0 20px
			font-size 26px
			line-height 30px
			color $pink

		&_faq_question
			font-size 20px
			line-height 24px
			font-weight 700
			margin-bottom 15px
			padding 10px 0
			border-bottom $gray 1px solid

</style>
