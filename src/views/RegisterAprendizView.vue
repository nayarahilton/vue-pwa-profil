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
			<form @submit.prevent>
				<main-input
					type="text"
					name="username"
					id="username"
					placeholder="Nome de usuário"
					v-model="username"
				/>
				<main-input
					type="text"
					name="name"
					id="name"
					placeholder="Nome"
					v-model="name"
				/>
				<main-input
					type="email"
					name="email"
					id="email"
					placeholder="E-mail"
					v-model="email"
				/>
				<main-input
					type="password"
					name="password"
					id="password"
					placeholder="Senha"
					@blur="$v.password.$touch()"
					v-model="password"
				/>
				<main-button
					button-type="router"
					linkto="/cadastro/aprendiz/sucesso"
					text-inner="Próximo"
				/>
				<button
					class="submit-button"
					@click="onSubmit"
				>
					Entrar
				</button>
			</form>
		</main>
	</div>
</template>

<script>
import StatusBar from '../components/StatusBar';
import MainTitles from '../components/MainTitles';
import MainInput from '../components/MainInput';
import MainButton from '../components/MainButton';

export default {
	data() {
		return {
			type: 2,
			username: '',
			name: '',
			email: '',
			password: '',
		};
	},
	components: {
		'status-bar': StatusBar,
		'main-titles': MainTitles,
		'main-input': MainInput,
		'main-button': MainButton,
	},
	methods: {
		onSubmit() {
			const formData = {
				type: this.type,
				username: this.username,
				name: this.name,
				email: this.email,
				password: this.password,
			};
			console.log(formData);
			this.$store.dispatch('signup', formData);
		},
	},
};
</script>

<style lang="stylus" scoped>

</style>
