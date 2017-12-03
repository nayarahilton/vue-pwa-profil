<template>
	<div class="register">
		<status-bar
			link="/bemvindo"
			title="Cadastro"
		/>
		<main class="register-main">
			<main-titles
				title-text="Como você se identifica?"
				subtitle-text="Escolha abaixo o tipo de perfil que você se encaixa."
			/>
			<visual-selector />
		</main>
	</div>
</template>

<script>
import StatusBar from '../components/StatusBar';
import MainTitles from '../components/MainTitles';
import VisualSelector from '../components/VisualSelector';

export default {
	components: {
		'status-bar': StatusBar,
		'main-titles': MainTitles,
		'visual-selector': VisualSelector,
	},
};
</script>
<style lang="stylus">
	@import '../assets/styles/*'

	.register-main
		holder()

		@media (min-width 768px)
			display flex
			align-items center
			justify-content center
			flex-direction column
			min-height calc(100vh - 90px)
</style>
