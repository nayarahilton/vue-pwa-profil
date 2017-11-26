<template>
	<div class="ask">
		<status-bar
			link="/home"
			title="Perguntas"
		/>
		<main class="register-main">
			<main-titles
				title-text="Entrar direto na faculdade ou fazer um curso antes?"
			/>
			<main-textarea
				type="text"
				name="name"
				id="name"
				placeholder="Toque aqui e escreva uma resposta de até 280 caractéres"
				:required="true"
			/>
			<main-button text-inner="Enviar resposta" />
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
