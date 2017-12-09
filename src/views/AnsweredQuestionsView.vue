<template>
	<div class="answered-questions">
		<status-bar
			link="/home"
			title="Perguntas Respondidas"
		/>
		<main class="main">
			<question-box profession="true" answers="true"></question-box>
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
