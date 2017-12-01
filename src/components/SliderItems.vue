<template>
	<div class="slider">
		<swiper :options="swiperOption" >
			<swiper-slide v-for="(item, index) in items">
				<div class="slider_img-holder">
					<img class="slider_img" src="http://nosrc.fbiz.com.br/640x480/ddd/777" />
				</div>
				<p class="slider_text">{{item}}</p>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';


Vue.use(VueAwesomeSwiper, this.swiperOption);


export default {
	data() {
		return {
			items: [
				'@nayarahilton',
				'@prisantos',
				'@lucasilva',
				'@lilisantos',
				'@vinicuisbueno',
				'@gabriellopes',
				'@rachelaquino',
				'@nayarahilton',
				'@prisantos',
				'@lucasilva',
				'@nayarahilton',
				'@prisantos',
				'@lucasilva 2',
			],
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

	.swiper-container
		holder()
		overflow initial

	.swiper-slide
		width 80px
		padding 20px 10px
		background #f4f4f4
		text-align center
		overflow hidden

	.slider
		&_text
			margin-bottom 0
			margin-top 0px
			font-size 12px

		&_img-holder
			light-border()
			width 50px
			height 50px
			border-radius 50%
			background #fff
			margin 0 auto

		&_img
			object-fit cover
			object-position center
			border-radius 50%
			width 50px
			height 50px


</style>

