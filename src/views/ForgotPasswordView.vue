<template>
	<div class="forgot-password">
		<status-bar
			link="/bemvindo"
			title="Esqueci minha senha"
		/>
		<main class="forgot-password-main">
			<main-titles
				title-text="Para recuperar sua senha preencha abaixo seu e-mail"
			/>
			<form @submit.prevent="validateBeforeSubmit">

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

				<button
					class="submit-button"
				>
					Enviar
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
			email: {
				required: 'Por favor, insira um e-mail válido.',
				email: 'E-mail inválido.',
			},
		},
	},
};

Validator.updateDictionary(dict);
Validator.setLocale('pt');

export default {
	data() {
		return {
			email: '',
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
				name: this.name,
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
