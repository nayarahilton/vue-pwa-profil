<template>
	<div class="register">
		<status-bar
			link="/home"
			title="Cadastro"
		/>
		<main class="register-main">
			<div class="presentation-holder">
				<h2 class="title">Seus Dados</h2>
				<p>{{ msg }}</p>
			</div>

			<div class="btn-holder">
				<social-button text-inner="Completar com o Linkedin" />
				<main-input
					type="text"
					placeholder="Nome"
					:required="true"
				/>
				<main-input
					type="email"
					placeholder="Email"
					:required="true"
				/>
				<main-input
					type="password"
					placeholder="Senha"
					:required="true"
				/>
				<div class="login-holder">
					<main-button
						button-type="router"
						text-inner="Próximo"
						linkto="/Home"
					/>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import StatusBar from '../components/StatusBar';
import SocialButton from '../components/SocialButton';
import MainButton from '../components/MainButton';
import MainInput from '../components/MainInput';

export default {
	name: 'register',
	data() {
		return {
			msg: 'Todos os campos são obrigatórios',
		};
	},
	components: {
		'status-bar': StatusBar,
		'social-button': SocialButton,
		'main-button': MainButton,
		'main-input': MainInput,
	},
};
</script>

<style lang="stylus" scoped>
	
</style>
