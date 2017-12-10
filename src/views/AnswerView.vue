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
				v-model="answer"
				placeholder="Toque aqui e escreva uma resposta de até 280 caractéres"
				:required="true"
			/>
			<main-button @click.native="post()" text-inner="Enviar resposta" />
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
/* eslint-desable */
export default {
	mounted() {
		this.faq = find(this.$root.faq, faq => faq['.key'] === this.$route.params.id);
	},
	data() {
		return {
			faq: '',
			question: '',
			answer: '',
		};
	},
	components: {
		'status-bar': StatusBar,
		'main-textarea': MainTextarea,
		'main-titles': MainTitles,
		'main-select': MainSelect,
		'main-button': MainButton,
	},
	methods: {
		post() {
			this.$root.$firebaseRefs.faq.child(this.faq['.key']).push({ answer: this.answer })
			.then(
				this.$router.push('/sucesso-perguntas'),
			);
		},
	},
};
</script>

<style lang="stylus" scoped>

</style>
