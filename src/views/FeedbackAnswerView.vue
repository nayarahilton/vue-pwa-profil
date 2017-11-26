<template>
	<div class="feedback-answer">
		<status-bar
			link="/home"
			title="Respoder"
		/>
		<main class="register-main">
			<h2 class="feedback-text">Pergunta respondida!</h2>
			<main-titles
				subtitle-text="Entrar direto na faculdade ou fazer um curso antes?"
			/>
			<main-titles
				title-text="Depende da sua necessidade e da sua facilidade de aprendizado. Se você estiver em dúvida, faça um curso."
			/>
			<profile-resume
				:image="'http://nosrc.fbiz.com.br/640x480/ddd/777'"
				nickname="Nayara Hilton"
				username="@nayarahilton"
				profession="#Profissão"
				@click.native="goToProfile(picture['.key'])"
				resume="true"
			></profile-resume>

			<main-button
				buttonType="router"
				linkto="/home"
				text-inner="Legal! Agora quer voltar!"
			></main-button>
		</main>
	</div>
</template>

<script>
import StatusBar from '@/components/StatusBar';
import MainTitles from '@/components/MainTitles';
import MainButton from '@/components/MainButton';
import ProfileResume from '@/components/ProfileResume';

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
		'main-titles': MainTitles,
		'main-button': MainButton,
		'profile-resume': ProfileResume,
	},
};
</script>

<style lang="stylus">
	@import '../assets/styles/_colors'

	.feedback
		&-text
			color $pink
			font-size 30px

		&-answer

			.main-btn
				margin-top 40px

			.titles__title
				font-weight 600

</style>
