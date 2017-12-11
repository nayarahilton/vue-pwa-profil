<template>
	<div class="ask">
		<status-bar
			link="/home"
			title="Perguntar"
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
				v-model="text"
			/>
			<main-button text-inner="Enviar pergunta" @click.prevent.native="post" />
		</main>
	</div>
</template>

<script>
import postQuestion from '@/mixins/postQuestion';
import StatusBar from '@/components/StatusBar';
import MainTextarea from '@/components/MainTextarea';
import MainTitles from '@/components/MainTitles';
import MainSelect from '@/components/MainSelect';
import MainButton from '@/components/MainButton';


export default {
	mixins: [postQuestion],
	data() {
		return {
			text: '',
			disabledText: 'Nome da profissão',
			options: [
				{
					value: 'designDigital',
					text: 'Design Digital',
				},
				{
					value: 'designGrafico',
					text: 'Design Gráfico',
				},
				{
					value: 'designGames',
					text: 'Design de Games',
				},
				{
					value: 'programacao',
					text: 'Programação Front-end',
				},
				{
					value: 'designDeModa',
					text: 'Design de Moda',
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
	methods: {
		post() {
			this.postQuestion(
				'#designdigital',
				this.text,
				{},
			);
		},
	},
};
</script>

<style lang="stylus">
	.main-btn
		margin-top 10px
</style>
