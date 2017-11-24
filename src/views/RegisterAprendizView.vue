<template>
	<div class="register-aprendiz">
		<status-bar
			link="/cadastro"
			title="Cadastro"
		/>
		<main class="register-main">
			<main-titles
				title-text="Seus dados"
				subtitle-text="Todos os campos são obrigatórios"
			/>
			<main-input
				type="text"
				name="user"
				id="user"
				placeholder="Nome de usuário"
				:required="true"
			/>
			<main-input
				type="text"
				name="name"
				id="name"
				placeholder="Nome"
				:required="true"
			/>
			<main-input
				type="email"
				name="email"
				id="email"
				placeholder="E-mail"
				:required="true"
			/>
			<main-input
				type="password"
				name="password"
				id="password"
				placeholder="Senha"
				:required="true"
			/>
			<main-button
				button-type="router"
				linkto="/cadastro/aprendiz/sucesso"
				text-inner="Próximo"
			/>
		</main>
	</div>
</template>

<script>
import StatusBar from '../components/StatusBar';
import MainTitles from '../components/MainTitles';
import MainInput from '../components/MainInput';
import MainButton from '../components/MainButton';

export default {
	components: {
		'status-bar': StatusBar,
		'main-titles': MainTitles,
		'main-input': MainInput,
		'main-button': MainButton,
	},
};
</script>

<style lang="stylus" scoped>

</style>
