<template>
	<div class="terms">
		<header>
			<status-bar
				link="/home"
				title="Termos de Compromisso"
			/>
			<tabs-bottom-guru />
		</header>
		<section class="terms-section">
			<main-titles
				title-text="Informações importantes"
				subtitle-text="Este site trata-se de uma publicação temporária para propósitos estritamente acadêmicos e sem fins lucrativos. Em atendimento às exigências da Lei 9.610/98, do parágrafo 4°, do Artigo 184, do Código Penal, os discentes responsáveis por esta publicação colocam-se à disposição, por intermédio do e-mail naylop@gmail.com, para dirimir quaisquer dúvidas referentes à eventual violação de direitos autorais, comprometendo-se desde já, a retirar do ar, qualquer texto, som ou imagem pertencente a autor ou titular que se sinta direta ou indiretamente prejudicado."
			/>
		</section>
	</div>
</template>
<script>
import postContent from '@/mixins/postContent';
import StatusBar from '@/components/StatusBar';
import MainButton from '@/components/MainButton';
import TabsBottomGuru from '@/components/TabsBottomGuru';
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
		'tabs-bottom-guru': TabsBottomGuru,
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
