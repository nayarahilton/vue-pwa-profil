<template>
  <div class="post">
	<status-bar
		link="/home"
		title="Postar"
	/>
	<tabs-bottom />
	<section class="post-section">
		<photo-upload :src="imageData" labelText="Escolha uma foto" />
		<main-textarea v-model="title" value="title" placeholder="Escreva uma legenda"></main-textarea>
		<main-button text-inner="Postar conteúdo" @click.prevent.native="post">
		</main-button>
	</section>
  </div>
</template>
<script>
import postContent from '@/mixins/postContent';
import StatusBar from '@/components/StatusBar';
import MainButton from '@/components/MainButton';
import TabsBottom from '../components/TabsBottom';
import PhotoUpload from '../components/PhotoUpload';
import MainTextarea from '../components/MainTextarea';

export default {
	mixins: [postContent],
	data: function returnImageData() {
		return {
			title: '',
			imageData: 'postar',
		};
	},
	components: {
		'main-button': MainButton,
		'status-bar': StatusBar,
		'tabs-bottom': TabsBottom,
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

	.post-section
		holder()
		padding 10px 20px
		box-sizing border-box

		.input-file + label,
		.image-preview,
		.image-preview__img
			width 100%
			border-radius 10px

</style>
