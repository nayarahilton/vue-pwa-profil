<template>
	<div class="register-guru">
		<status-bar
			link="/cadastro"
			title="Meu perfil"
		/>
		<main class="register-main">
			<form-wizard
				@on-complete="validateBeforeSubmit"
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
						v-validate="'required|min:6'"
						:class="{ 'input--invalid': errors.has('username') }"
						data-vv-delay="1000"
						v-model="username"
					/>
					<feedback v-show="errors.has('username')">
						{{ errors.first('username') }}
					</feedback>
					<main-input
						type="text"
						name="name"
						id="name"
						placeholder="Nome"
						v-model="name"
						v-validate="'required|min:6'"
						:class="{ 'input--invalid': errors.has('name') }"
						data-vv-delay="1000"
					/>
					<feedback v-show="errors.has('name')">
						{{ errors.first('name') }}
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
					<feedback v-show="errors.has('email')">
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
					<feedback v-show="errors.has('password')">
						{{ errors.first('password') }}
					</feedback>
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
					<main-titles
						title-text="Qual cidade que você trabalha?"
						design="center"
					/>
					<main-select />
				</tab-content>
				<tab-content
					title="Minha profissão"
				>
					<main-titles
						title-text="Há quanto tempo você trabalha nessa área?"
						subtitle-text="Sua resposta é anônima e não aparecerá no seu perfil"
						design="center"
					/>
					<main-select />
					<main-titles
						title-text="Qual a média do seu salário atual"
						subtitle-text="Sua resposta é anônima e não aparecerá no seu perfil"
						design="center"
					/>
					<main-select />
				</tab-content>
				<tab-content
					title="Características"
				>
					<main-titles
						title-text="Selecione 5 características que descrevem seu trabalho"
						design="center"
					/>
					<h3>Comportamental e biológico</h3>
					<slider-items check="true" :slides="comportamental"/>

					<h3>Suas ferramentas</h3>
					<slider-items check="true" :slides="ferramentas"/>

					<h3>Seu ambiente de trabalho</h3>
					<slider-items check="true" :slides="ambiente"/>

				</tab-content>
				<button slot="prev" class="hide">Back</button>
				<button slot="next" class="submit-button">Próximo</button>
				<button slot="finish" class="submit-button">Próximo</button>
			</form-wizard>
		</main>
	</div>
</template>

<script>
import { Validator } from 'vee-validate';
import StatusBar from '@/components/StatusBar';
import MainTitles from '@/components/MainTitles';
import MainInput from '@/components/MainInput';
import PhotoUpload from '@/components/PhotoUpload';
import MainTextarea from '@/components/MainTextarea';
import MainSelect from '@/components/MainSelect';
import FeedbackMessage from '@/components/FeedbackMessage';
import CharacteristicCheckbox from '@/components/CharacteristicCheckbox';
import SliderItems from '@/components/SliderItems';

const dict = {
	pt: {
		custom: {
			username: {
				required: 'Por favor, insira seu nome de usuário.',
				min: 'Seu nome de usuário deve ter no mínimo 6 caracteres.',
			},
			name: {
				required: 'Por favor, insira seu nome completo.',
				min: 'Por favor, insira seu nome completo.',
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
			comportamental: [
				{
					name: 'comportamental',
					value: 'ajudo_pessoas',
					id: 'ajudo_pessoas',
					src: '/static/img/icn_cadastro_caracteristica_ajudo-pessoas.svg',
					text: 'Ajudo pessoas',
				},
				{
					name: 'comportamental',
					value: 'ajudo_animais',
					id: 'ajudo_animais',
					src: '/static/img/icn_cadastro_caracteristica_salvo-vidas.svg',
					text: 'Salvo vidas',
				},
				{
					name: 'comportamental',
					value: 'salvo_vidas',
					id: 'salvo_vidas',
					src: '/static/img/icn_cadastro_caracteristica_ajudo-animais.svg',
					text: 'Ajudo animais',
				},
				{
					name: 'comportamental',
					value: 'contato_natureza',
					id: 'contato_natureza',
					src: '/static/img/icn_cadastro_caracteristica_contato-natureza.svg',
					text: 'Contato com a natureza',
				},
			],
			ferramentas: [
				{
					name: 'ferramentas',
					value: 'uso_mao',
					id: 'uso_mao',
					src: '/static/img/icn_cadastro_caracteristica_uso-mao.svg',
					text: 'Uso minhas mãos',
				},
				{
					name: 'ferramentas',
					value: 'uso_computador',
					id: 'uso_computador',
					src: '/static/img/icn_cadastro_caracteristica_uso-computador.svg',
					text: 'Uso muito computador',
				},
				{
					name: 'ferramentas',
					value: 'coordenacao_motora',
					id: 'coordenacao_motora',
					src: '/static/img/icn_cadastro_caracteristica_coordenacao-motora.svg',
					text: 'Coordenação motora impecável',
				},
				{
					name: 'ferramentas',
					value: 'logica_inteligencia',
					id: 'logica_inteligencia',
					src: '/static/img/icn_cadastro_caracteristica_logica-inteligencia.svg',
					text: 'Lógica e inteligência',
				},
			],
			ambiente: [
				{
					name: 'ambiente',
					value: 'viajar',
					id: 'viajar',
					src: '/static/img/icn_cadastro_caracteristica_viajar.svg',
					text: 'Preciso viajar muito',
				},
				{
					name: 'ambiente',
					value: 'agitado',
					id: 'agitado',
					src: '/static/img/icn_cadastro_caracteristica_agitado.svg',
					text: 'Super agitado',
				},
				{
					name: 'ambiente',
					value: 'calmo',
					id: 'calmo',
					src: '/static/img/icn_cadastro_caracteristica_calmo.svg',
					text: 'Super calmo',
				},
				{
					name: 'ambiente',
					value: 'sentado',
					id: 'sentado',
					src: '/static/img/icn_cadastro_caracteristica_sentado.svg',
					text: 'Trabalho sentado',
				},
			],
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
		StatusBar,
		MainTitles,
		MainInput,
		MainTextarea,
		PhotoUpload,
		MainSelect,
		SliderItems,
		feedback: FeedbackMessage,
		checkbox: CharacteristicCheckbox,
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
	@import '../assets/styles/*'

	h3
		color $dark-gray
		font-size 14pt
		font-weight 400
		margin 0 auto

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
