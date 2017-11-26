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
			<main-input
				type="text"
				name="user"
				id="user"
				placeholder="Nome da profissão"
				:required="true"
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
import MainInput from '../components/MainInput';
import MainButton from '../components/MainButton';

export default {
	components: {
		'status-bar': StatusBar,
		'main-textarea': MainTextarea,
		'main-titles': MainTitles,
		'main-input': MainInput,
		'main-button': MainButton,
	},
};
</script>

<style lang="stylus" scoped>

</style>
