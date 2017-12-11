<template>
	<div class="post">
		<header>
			<status-bar
				link="/home"
				title="Postar"
			/>
			<tabs-bottom-guru />
		</header>
		<section class="post-section">
			<photo-upload
				:src="imageData"
				labelText="Escolha uma foto"
			/>
			<main-textarea
				v-model="title"
				placeholder="Escreva uma legenda"
			/>
			<main-button
				text-inner="Postar conteúdo"
				@click.prevent.native="post"
			/>
		</section>
	</div>
</template>
<script>
import postContent from '@/mixins/postContent';
import StatusBar from '@/components/StatusBar';
import MainButton from '@/components/MainButton';
import TabsBottomGuru from '../components/TabsBottomGuru';
import PhotoUpload from '../components/PhotoUpload';
import MainTextarea from '../components/MainTextarea';

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
		'tabs-bottom-guru': TabsBottomGuru,
		'photo-upload': PhotoUpload,
		'main-textarea': MainTextarea,
	},
	methods: {
		post() {
			const img = document.querySelector('.image-preview__img');
			if (img) {
				this.postContent(
					'#designdigital',
					img.src, this.title || '',
					'Nayara Hilton',
					'@nayarahilton',
					'0',
					'0',
				);
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
		margin-bottom 50px
		margin-top 20px

		.main-btn
			margin-top 10px

		.input-file + label,
		.image-preview,
		.image-preview__img
			margin-bottom 10px
			border-radius 10px 10px 10px 0
			width 100%


</style>
