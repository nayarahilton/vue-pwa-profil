<template>
	<div>
		<swiper :options="swiperOption" class="salaries">
			<swiper-slide
				lass="profession_info-slider_item"
				v-for="(salary, index) in salaries"
				:key="salary.salary"
			>
				<strong class="profession_info-slider_text">{{salary.year}}</strong>
				<p class="profession_info-slider_salary">{{salary.salary}}</p>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';

Vue.use(VueAwesomeSwiper, this.swiperOption);


export default {
	props: {
		salaries: {
			type: Array,
		},
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

	.profession
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

	.salaries
		.swiper-container
			overflow initial
			holder()

		.swiper-wrapper
			align-items center

		.swiper-slide
			width 120px
			text-align left

</style>

