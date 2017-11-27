<template>
	<div class="register-guru">
		<status-bar
			link="/cadastro"
			title="Cadastro"
		/>
		<main class="register-main">
			<form-wizard
				@on-complete="onSubmit"
				title=""
				subtitle=""
				color="#bc0087"
				step-size="xs"
			>
				<tab-content
					title="Meus dados"
					icon=""
				>
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
						v-model="password"
					/>
				</tab-content>
				<tab-content
					title="Meu perfil"
				>
					<photo-upload
						label-text="Carregue sua foto"
						v-model="profilepicture"
					/>
					<main-input
						type="text"
						name="profession"
						id="profession"
						placeholder="Sua profissão atual"
						v-model="profession"
					/>
					<main-textarea
						name="aboutprofession"
						id="aboutprofession"
						placeholder="Em apenas 320 caracteres fale um pouco sobre sua profissão."
						v-model="aboutprofession"
					/>
				</tab-content>
				<tab-content
					title="Minha profissão"
				>
					Minha profissão
				</tab-content>
				<tab-content
					title="Características"
				>
					Características
				</tab-content>
				<button slot="prev" class="hide">Back</button>
				<button slot="next" class="submit-button">Próximo</button>
				<button slot="finish" class="submit-button">Próximo</button>
			</form-wizard>
		</main>
	</div>
</template>

<script>
import StatusBar from '../components/StatusBar';
import MainTitles from '../components/MainTitles';
import MainInput from '../components/MainInput';
import PhotoUpload from '../components/PhotoUpload';
import MainTextarea from '../components/MainTextarea';

export default {
	data() {
		return {
			type: 1,
			username: '',
			name: '',
			email: '',
			password: '',
			profilepicture: '',
			profession: '',
			aboutprofession: '',
		};
	},
	components: {
		'status-bar': StatusBar,
		'main-titles': MainTitles,
		'main-input': MainInput,
		'main-textarea': MainTextarea,
		'photo-upload': PhotoUpload,
	},
	methods: {
		onSubmit() {
			const formData = {
				type: this.type,
				username: this.username,
				name: this.name,
				email: this.email,
				password: this.password,
				profilepicture: this.profilepicture,
				profession: this.profession,
				aboutprofession: this.aboutprofession,
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

<style lang="stylus">
	@import '../assets/styles/_colors'

	.submit-button
		width 100%

	.wizard-header
		display none

	.wizard-progress-with-circle
		height 2px !important
		top 20px !important

	.wizard-progress-bar
		margin 0px 10% !important
		width 80% !important

	.wizard-nav
		>li
			>a
				.wizard-icon-circle
					background-color $pink
					height 30px !important
					width 30px !important

				.wizard-icon
					font-size 0 !important

				&.disabled
					.wizard-icon-circle
						background-color #b07198
						border-color #b07198

				.stepTitle
					color $dark-gray !important
					font-size 12pt
					font-weight 600
					line-height 14pt
					margin-top 10px

	.wizard-footer-right
		width 100%

</style>
