<template>
	<div>
		<swiper v-if="slideBox === 'true'" :options="swiperOption" class="questions-holder">
			<swiper-slide v-for="(slide, index) in slides"  class="questions-box">
				<p class="profession"  v-if="profession == 'true'">{{professionName}}</p>
				<p class="questions-holder" v-if="questions == 'true'">{{slide.question}}</p>
				<div class="answer-holder" v-if="answers == 'true'">
					<main-titles
						:title-text="slide.answer"
					/>
					<profile-resume
						:image="'http://nosrc.fbiz.com.br/640x480/ddd/777'"
						nickname="Nayara Hilton"
						username="@nayarahilton"
						profession="#Profissão"
						@click.native="goToProfile(picture['.key'])"
						resume="true"
					></profile-resume>
				</div>
			</swiper-slide>
		</swiper>

		<div v-else class="questions-box"
			v-for="box in boxs"
			:key="box.id"
		>
			<p class="profession"  v-if="profession == 'true'">{{professionName}}</p>
			<p class="questions-holder" v-if="questions == 'true'">{{box.question}}</p>
			<div class="answer-holder" v-if="answers == 'true'">
				<main-titles
					:title-text="box.answer"
				/>
				<profile-resume
					:image="'http://nosrc.fbiz.com.br/640x480/ddd/777'"
					nickname="Nayara Hilton"
					username="@nayarahilton"
					profession="#Profissão"
					@click.native="goToProfile(picture['.key'])"
					resume="true"
				></profile-resume>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import ProfileResume from '@/components/ProfileResume';
import MainTitles from '@/components/MainTitles';
import VueAwesomeSwiper from 'vue-awesome-swiper';

Vue.use(VueAwesomeSwiper, this.swiperOption);

export default {
	data() {
		return {
			swiperOption: {
				slidesPerView: 'auto',
				spaceBetween: 20,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
			},

		};
	},
	props: {
		slideBox: {
			type: String,
		},
		boxs: {
			type: Array,
		},
		answers: {
			type: String,
		},
		questions: {
			type: String,
		},
		profession: {
			type: String,
		},
		professionName: {
			type: String,
		},
		slides: {
			type: String,
		},
	},
	components: {
		'main-titles': MainTitles,
		'profile-resume': ProfileResume,
	},
};
</script>

<style lang="stylus" scoped>
	@import '../assets/styles/_colors'
	$border-radius = 10px

	.profession
		color $pink
		padding 0 15px
		font-size 16px

	.questions-box
		text-align left

	.answer-holder
		padding 0 15px

	.questions-holder
		padding 0 15px

	.questions-holder + .answer-holder
		border-top 2px solid $pink
		margin-top 15px

	.info-holder
		text-align left


	.titles__title
		color $gray

	.questions
		&-box
			border 1px solid $pink
			border-radius 10px
			box-sizing border-box
			padding 15px 0
			margin-top 10px
			margin-bottom 10px

		&-text
			padding 0 15px


	.questions-holder

		.swiper-container
			overflow initial
			holder()

		.swiper-wrapper
			align-items center

		.swiper-slide
			width 80%

		img
			max-width 100%

</style>
