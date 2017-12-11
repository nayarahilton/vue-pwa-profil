<template>
	<div class="slider">
		<swiper :options="swiperOption" >
			<swiper-slide
				v-for="(slide, index) in slides"
				:key="slide.text"
			>

			<checkbox v-if="check == 'true'"
				:name="slide.name"
				:value="slide.value"
				:id="slide.id"
				:text="slide.text"
				:src="slide.src"
			/>

			<div v-else class="holder-icon">
				<div class="slider_img-holder">
					<img class="slider_img" :src="slide.src" />
				</div>
				<p class="slider_text">{{slide.text}}</p>
			</div>

			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import CharacteristicCheckbox from '@/components/CharacteristicCheckbox';

Vue.use(VueAwesomeSwiper, this.swiperOption);


export default {
	props: {
		check: String,
		slides: {
			type: Array,
		},
	},
	components: {
		checkbox: CharacteristicCheckbox,
	},
	data() {
		return {
			swiperOption: {
				slidesPerView: 'auto',
				spaceBetween: 0,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
			},

		};
	},
};

</script>

<style lang="stylus">
	@import '../assets/styles/*'
	@import '../../node_modules/swiper/dist/css/swiper.css';

	.slider
		background #fff

	.swiper-container
		overflow initial
		holder()

	.swiper-wrapper
		align-items center

	.swiper-slide
		padding 0 5px 20px
		text-align center
		cursor pointer
		width auto
		align-self flex-start

	img
		max-width 100%


	.slider
		&_img-holder
			light-border()
			border-radius 10px 10px 10px 0px
			background #fff
			margin 0 auto
			padding 2px

		&_img
			object-fit cover
			object-position center
			border-radius 10px 10px 10px 0px
			width 100%
			height 100%

	.stories
		.slider
			&_img-holder
				width 50px
				height 50px

			&_text
				margin-bottom 0
				margin-top 5px
				font-size 12px
				overflow hidden

	.features
		.swiper-slide
			width 90px

		.slider
			&_img-holder
				width 70px
				height 70px

			&_text
				margin-bottom 0
				margin-top 10px
				font-size 17px
				white-space normal
				line-height 19px
				padding 0 10px
				box-sizing border-box


</style>

