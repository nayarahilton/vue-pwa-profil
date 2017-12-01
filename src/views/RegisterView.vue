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
