<template>
	<div class="register-guru">
		<status-bar
			link="/home"
			title="Perguntas"
		/>
		<main class="register-main">
			<main-titles
				title-text="Está com dúvida?"
				subtitle-text="Escolha abaixo a profissão e faça a sua pergunta."
			/>
			<main-select
				design="main"
				:disabledText="disabledText"
				:options="options"
			/>
			<main-textarea
				type="text"
				name="name"
				id="name"
				placeholder="Toque aqui e escreva uma pergunta de até 280 caractéres"
				:required="true"
			/>
			<main-button text-inner="Enviar pergunta" />
		</main>
	</div>
</template>

<script>
import StatusBar from '../components/StatusBar';
import MainTextarea from '../components/MainTextarea';
import MainTitles from '../components/MainTitles';
import MainSelect from '../components/MainSelect';
import MainButton from '../components/MainButton';

export default {
	data() {
		return {
			disabledText: 'Nome da profissão',
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
		'main-textarea': MainTextarea,
		'main-titles': MainTitles,
		'main-select': MainSelect,
		'main-button': MainButton,
	},
};
</script>

<style lang="stylus" scoped>

</style>
