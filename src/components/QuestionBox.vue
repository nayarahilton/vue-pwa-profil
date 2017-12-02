<template>
	<div>
		<div class="questions-box"
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
import ProfileResume from '@/components/ProfileResume';
import MainTitles from '@/components/MainTitles';

export default {
	props: {
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

	.answer-holder
		padding 0 15px

	.questions-holder
		padding 0 15px

	.questions-holder + .answer-holder
		border-top 2px solid $pink
		margin-top 15px


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
</style>
