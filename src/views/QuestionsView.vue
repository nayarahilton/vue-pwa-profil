<template>
	<div class="questions">
		<header class="questions-header">
			<status-bar
				link="/home"
				title="Perguntas"
			/>
			<tabs-bottom-guru />
		</header>
		<main class="questions-main">
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
import TabsBottomGuru from '../components/TabsBottomGuru';

export default {
	data() {
		return {
			profession: '#Design',
			questions: [
				{
					id: 1,
					question: 'Entrar direto na faculdade de Design ou fazer um curso?',
					answer: 'Lorem ipsum',
				},
				{
					id: 2,
					question: 'Dicas para quem está começando?',
					answer: 'Lorem ipsum',
				},
				{
					id: 3,
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
		'tabs-bottom-guru': TabsBottomGuru,
	},
};
</script>

<style lang="stylus">
	@import '../assets/styles/_colors'

	.questions
		&-main
			padding-bottom 50px

		&-text
			font-size 20px

		.titles__title
			color $blue
			font-weight 500

</style>
