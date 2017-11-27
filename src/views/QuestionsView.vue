<template>
	<div class="question">
		<status-bar
			link="/home"
			title="Perguntas"
		/>
		<main class="main">
			<main-titles
				:title-text="profession"
				subtitle-text="Toque no balão para responder"
			/>
			<question-box :questions="questions"></question-box>
		</main>
	</div>
</template>

<script>
import StatusBar from '@/components/StatusBar';
import MainTitles from '@/components/MainTitles';
import QuestionBox from '@/components/QuestionBox';

export default {
	data() {
		return {
			profession: '#Design',
			questions: [
				{
					question: 'Entrar direto na faculdade de Design ou fazer um curso?',
					answer: 'Lorem ipsum',
				},
				{
					question: 'Dicas para quem está começando?',
					answer: 'Lorem ipsum',
				},
				{
					question: 'Quais os melhores cursos e escolas de cursos para essa profissão?',
					answer: 'Lorem ipsum',
				},
			],
		};
	},
	components: {
		'status-bar': StatusBar,
		'question-box': QuestionBox,
		'main-titles': MainTitles,
	},
};
</script>

<style lang="stylus">
	@import '../assets/styles/_colors'

	.question
		&-text
			font-size 20px

		.titles__title
			color $blue
			font-weight 500

</style>
