<template>
	<div class="terms">
		<header>
			<status-bar
				link="/home"
				title="Termos de Compromisso"
			/>
		</header>
		<section class="terms-section">
			<main-titles
				title-text="Termos de Compromisso"
				subtitle-text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus veniam omnis, distinctio amet alias, quam hic dolorem aut quos recusandae molestiae tempore. Dolor, delectus. Error sint commodi eligendi eos vero!"
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
import MainTitles from '@/components/MainTitles';

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
		'main-titles': MainTitles,
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

	.terms-section
		holder()
		padding 10px 20px
		box-sizing border-box
		margin-bottom 50px

		.input-file + label,
		.image-preview,
		.image-preview__img
			width 100%
			border-radius 10px

</style>
