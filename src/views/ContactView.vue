<template>
	<div class="contact">
		<header>
			<status-bar
				link="/home"
				title="Fale Conosco"
			/>
		</header>
		<section class="contact-section">
			<main-textarea
				v-model="title"
				placeholder="Algum problema ou dúvida? Conte para gente!"
			/>
			<photo-upload
				:src="imageData"
				labelText="Adicione uma foto"
			/>
			<main-button
				text-inner="Enviar"
			/>
		</section>
	</div>
</template>
<script>
import postContent from '@/mixins/postContent';
import StatusBar from '@/components/StatusBar';
import MainButton from '@/components/MainButton';
import PhotoUpload from '@/components/PhotoUpload';
import MainTextarea from '@/components/MainTextarea';

export default {
	mixins: [postContent],
	data() {
		return {
			title: '',
			imageData: 'postar',
		};
	},
	components: {
		'main-button': MainButton,
		'status-bar': StatusBar,
		'photo-upload': PhotoUpload,
		'main-textarea': MainTextarea,
	},
	methods: {
		post() {
			const img = document.querySelector('.image-preview__img');
			if (img) {
				this.postContent(img.src, this.title || '');
			} else {
				/* eslint-disable */
				alert('Adicione uma imagem');
				/* eslint-enable */
			}
		},
	},
};
</script>

<style lang="stylus">
	@import '../assets/styles/*'

	.contact-section
		holder()
		padding 10px 20px
		box-sizing border-box
		margin-bottom 50px

		.main-btn
			margin 20px 0 10px 0

		.textarea--main
			margin-bottom 10px
			margin-top 10px

		.input-file + label,
		.image-preview,
		.image-preview__img
			width 100%
			border-radius 10px 10px 10px 0

</style>
