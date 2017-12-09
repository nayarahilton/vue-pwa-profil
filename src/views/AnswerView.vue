<template>
	<div class="ask">
		<status-bar
			link="/perguntas"
			title="Respoder"
		/>
		<main class="register-main">
			<main-titles
				:title-text="faq.question"
			/>
			<main-textarea
				type="text"
				name="name"
				id="name"
				placeholder="Toque aqui e escreva uma resposta de até 280 caractéres"
				:required="true"
			/>
			<main-button text-inner="Enviar resposta" />
		</main>
	</div>
</template>

<script>
import { find } from 'lodash';
import StatusBar from '@/components/StatusBar';
import MainTextarea from '@/components/MainTextarea';
import MainTitles from '@/components/MainTitles';
import MainSelect from '@/components/MainSelect';
import MainButton from '@/components/MainButton';

export default {
	data() {
		return {
			faq: null,
		};
	},
	mounted() {
		this.faq = find(this.$root.faq, faq => faq['.key'] === this.$route.params.id);
	},
	components: {
		'status-bar': StatusBar,
		'main-textarea': MainTextarea,
		'main-titles': MainTitles,
		'main-select': MainSelect,
		'main-button': MainButton,
	},
};
</script>

<style lang="stylus" scoped>

</style>
