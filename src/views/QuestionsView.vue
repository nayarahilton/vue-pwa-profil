<template>
	<div class="question">
		<status-bar
			link="/home"
			title="Perguntas"
		/>
		<main class="register-main">
			<main-titles
				:title-text="profession"
				subtitle-text="Toque no balão para responder"
			/>
			<div class="question-box" v-for="question in questions">
				<p class="question-text" >{{question}}</p>
			</div>
		</main>
	</div>
</template>

<script>
import StatusBar from '@/components/StatusBar';
import MainTextarea from '@/components/MainTextarea';
import MainTitles from '@/components/MainTitles';
import MainSelect from '@/components/MainSelect';
import MainButton from '@/components/MainButton';

export default {
	data() {
		return {
			profession: '#Design',
			questions: [
				'Entrar direto na faculdade de Design ou fazer um curso?',
				'Dicas para quem está começando?',
				'Quais os melhores cursos e escolas de cursos para essa profissão?',
				'Entrar direto na faculdade de Design ou fazer um curso?',
				'Dicas para quem está começando?',
			],
		};
	},
	components: {
		'status-bar': StatusBar,
		'main-textarea': MainTextarea,
		'main-titles': MainTitles,
		'main-select': MainSelect,
		'main-button': MainButton,
	},
};
</script>

<style lang="stylus">
	@import '../assets/styles/_colors'

	.question
		&-box
			border 2px solid $pink
			border-radius 10px
			box-sizing border-box
			padding 15px
			margin-top 10px
			margin-bottom 10px

		&-text
			font-size 20px

	.titles__title
		color $blue
		font-weight 500

</style>
