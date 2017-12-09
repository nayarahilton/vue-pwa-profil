<template>
	<div class="feedback-answer">
		<status-bar
			link="/home"
			title="Respoder"
		/>
		<main class="main">
			<h2 class="feedback-text">Pergunta respondida!</h2>

			<!-- <question-box :questions="questions" answers="true"></question-box> -->

			<main-button
				buttonType="router"
				linkto="/home"
				text-inner="Legal! Agora quer voltar!"
			></main-button>
		</main>
	</div>
</template>

<script>
import StatusBar from '@/components/StatusBar';
import MainTitles from '@/components/MainTitles';
import MainButton from '@/components/MainButton';
import ProfileResume from '@/components/ProfileResume';
import QuestionBox from '@/components/QuestionBox';

export default {
	data() {
		return {
			disabledText: 'Nome da profissão',
			questions: [
				{
					question: 'Entrar direto na faculdade de Design ou fazer um curso?',
					answer: 'Lorem ipsum',
				},
			],
			options: [
				{
					value: 'designDigital',
					text: 'Design Digital',
				},
				{
					value: 'medicina',
					text: 'Medicina',
				},
			],
		};
	},
	components: {
		'status-bar': StatusBar,
		'main-titles': MainTitles,
		'main-button': MainButton,
		'profile-resume': ProfileResume,
		'question-box': QuestionBox,
	},
};
</script>

<style lang="stylus">
	@import '../assets/styles/_colors'

	.feedback
		&-text
			color $pink
			font-size 30px

		&-answer

			.main-btn
				margin-top 40px

			.titles__title
				font-weight 600

</style>
