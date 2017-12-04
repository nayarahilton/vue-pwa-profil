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
			<form @submit.prevent="validateBeforeSubmit">

				<main-input
					type="text"
					name="username"
					id="username"
					placeholder="Nome de usuário"
					v-model="username"
					v-validate="'required|min:6'"
					:class="{ 'input--invalid': errors.has('username') }"
					data-vv-delay="1000"
				/>

				<feedback
					v-show="errors.has('username')"
				>
					{{ errors.first('username') }}
				</feedback>


				<main-input
					type="email"
					name="email"
					id="email"
					placeholder="E-mail"
					v-model="email"
					v-validate="'required|email'"
					:class="{ 'input--invalid': errors.has('email') }"
					data-vv-delay="1000"
				/>

				<feedback
					v-show="errors.has('email')"
				>
					{{ errors.first('email') }}
				</feedback>


				<main-input
					type="password"
					name="password"
					id="password"
					placeholder="Senha"
					v-model="password"
					v-validate="'required|min:6'"
					:class="{ 'input--invalid': errors.has('password') }"
					data-vv-delay="1000"
				/>

				<feedback
					v-show="errors.has('password')"
				>
					{{ errors.first('password') }}
				</feedback>

				<button
					class="submit-button"
				>
					Próximo
				</button>
			</form>
		</main>
	</div>
</template>

<script>
import { Validator } from 'vee-validate';
import StatusBar from '../components/StatusBar';
import MainTitles from '../components/MainTitles';
import MainInput from '../components/MainInput';
import FeedbackMessage from '../components/FeedbackMessage';

const dict = {
	pt: {
		custom: {
			username: {
				required: 'Por favor, insira seu nome de usuário.',
				min: 'Seu nome de usuário deve ter no mínimo 6 caracteres.',
			},
			email: {
				required: 'Por favor, insira um e-mail válido.',
				email: 'E-mail inválido.',
			},
			password: {
				required: 'Por favor, digite sua senha.',
				min: 'Sua senha deve ter no mínimo 6 caracteres.',
			},
		},
	},
};

Validator.updateDictionary(dict);
Validator.setLocale('pt');

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
		StatusBar,
		MainTitles,
		MainInput,
		feedback: FeedbackMessage,
	},
	methods: {
		validateBeforeSubmit() {
			this.$validator.validateAll().then((result) => {
				if (result) {
					this.onSubmit();
				}
			});
		},
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
			setTimeout(() => {
				this.$router.push('/home');
			}, 1000);
		},
	},
};
</script>

<style lang="stylus" scoped>
	@import '../assets/styles/*'

	.register-main
		holder()

		@media (min-width 768px)
			display flex
			align-items center
			justify-content center
			flex-direction column
			min-height calc(100vh - 90px)

	.submit-button
		width 100%
		margin-top 20px
</style>
