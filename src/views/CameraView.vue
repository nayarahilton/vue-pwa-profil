<template>
  <div class="post">
	<status-bar
		link="/home"
		title="Postar"
	/>
	<tabs-bottom />
	<section class="post-section">
		<div class="file-upload-form">
			<input
				type="file"
				@change="previewImage"
				id="photo-upload"
				accept="image/*"
				class="photo-upload-btn"
			/>
			<label for="photo-upload"></label>
		</div>
		<div class="image-preview">
			<img :src="imageData"  v-if="imageData.length > 0" class="image-preview__img">
		</div>
		<div class="content">
			<textarea class="textarea" v-model="title" laceholder="Escreva uma legenda"></textarea>
		</div>
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

export default {
	mixins: [postContent],
	data: function returnImageData() {
		return {
			title: '',
			imageData: '',
		};
	},
	components: {
		'main-button': MainButton,
		'status-bar': StatusBar,
		'tabs-bottom': TabsBottom,
	},
	methods: {
		previewImage: function getPreview(event) {
			const input = event.target;
			if (input.files && input.files[0]) {
				const reader = new FileReader();
				reader.onload = (e) => {
					this.imageData = e.target.result;
				};
				reader.readAsDataURL(input.files[0]);
			}
		},
		post() {
			const img = document.querySelector('.image-preview__img');
			if (this.imageData !== '') {
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

<style lang="stylus" scoped>
	@import '../assets/styles/*'
	$statusBarHeight = 60px
	$buttonSize = 100px

	.post
		.post-section
			box-sizing border-box
			min-height calc(100vh - $statusBarHeight)
			box-sizing border-box
			text-align center
			max-width 400px
			margin 0 auto

		.file-upload-form
			margin-top 20px
			height $buttonSize
			text-align center
			margin-bottom -($buttonSize / 2)
			z-index 1
			position relative

		.photo-upload-btn
			opacity 0
			position absolute
			visibility hidden

			& + label
				width $buttonSize
				height $buttonSize
				border-radius 50%
				background $pink
				color #ffffff
				display inline-block
				padding 10px
				box-sizing border-box
				background-image url('../assets/icons/photo-icon.svg')
				background-position center
				background-size 50px
				background-repeat no-repeat

				&:hover,
				&:focus
					border-color $dark-blue
					cursor pointer

		.image-preview
			pointer-events none
			width 100%
			height 360px
			background #ddd
			display flex
			justify-content center
			align-items center
			box-sizing border-box
			overflow hidden
			border-top 5px solid $pink

			&__img
				width 400px
				height 360px
				object-fit cover
				object-position center

		.content
			background #ffffff
			box-shadow  2px -2px 11px 1px #0003;
			border-radius 10px
			padding 10px 20px
			width 90%
			box-sizing border-box
			margin -90px auto 0 auto
			padding-bottom 25px
			margin-bottom -40px
			position relative

		.main-btn
			position relative
			display inline-block
			min-width 200px

		.textarea
			width 100%
			height 60px
			border 1px solid #eeeeee
			border-radius 10px
			padding 5px
			box-sizing border-box

			&:focus
				outline none
</style>
