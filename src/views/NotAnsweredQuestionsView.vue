<template>
	<div class="not-answered-questions">
		<status-bar
			link="/home"
			title="Perguntas não respondidas"
		/>
		<main class="main">
			<question-box :questions="questions" profession="true" professionName="#designdigital"></question-box>
		</main>
	</div>
</template>

<script>
import StatusBar from '@/components/StatusBar';
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
	},
};
</script>

<style lang="stylus">
	@import '../assets/styles/_colors'


</style>
