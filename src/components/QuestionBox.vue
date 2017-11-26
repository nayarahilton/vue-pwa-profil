<template>
	<div>
		<div class="question-box" v-for="question in questions">
			<p class="question-text" >{{question.question}}</p>
			<div class="answer-holder" v-if="answers == 'true'">
				<main-titles
					:title-text="question.answer"
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
		questions: {
			type: Array,
		},
		answers: {
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

	.answer-holder
		border-top 2px solid $pink
		margin-top 15px
		padding 0 15px

	.titles__title
		color $gray

	.question
		&-box
			border 2px solid $pink
			border-radius 10px
			box-sizing border-box
			padding 15px 0
			margin-top 10px
			margin-bottom 10px

		&-text
			padding 0 15px
</style>
