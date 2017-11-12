<template>
  <div class="camera-modal">
    <video ref="video" class="camera-stream"/>
		<img src="/" class="img">
		<canvas></canvas>
    <div class="camera-modal-container">
			<input id="username" v-model="title" type="text" placeholder="Escreva uma legenda">
			<main-button text-inner="Take a Picture" @click.prevent.native="capture">
			</main-button>
			<main-button text-inner="Post a photo" @click.prevent.native="post">
			</main-button>
    </div>
  </div>
</template>

<script>
	/* eslint-disable */

	import { storage } from '@/services/firebase';
	import postCat from '@/mixins/postCat';
	import MainButton from '../components/MainButton';

	export default {
		mixins: [postCat],
		data() {
			return {
				mediaStream: null,
				title: this.title,
			};
		},
		mounted() {
			navigator.mediaDevices.getUserMedia({ video: true })
			.then((mediaStream) => {
				this.mediaStream = mediaStream;
				this.$refs.video.srcObject = mediaStream;
				this.$refs.video.play();
			});
		},
		destroyed() {
			const tracks = this.mediaStream.getTracks();
			tracks.map(track => track.stop());
		},
		components: {
			'main-button': MainButton,
		},
		methods: {

		
			capture() {
				const pathPicture = 'images/picture';
				const mediaStreamTrack = this.mediaStream.getVideoTracks()[0];
				const imageCapture = new window.ImageCapture(mediaStreamTrack);

				/*const canvas = document.querySelector('canvas');
				
				imageCapture.grabFrame()
					.then(imageBitmap => {
						canvas.width = imageBitmap.width;
						canvas.height = imageBitmap.height;
						canvas.getContext('2d').drawImage(imageBitmap, 0, 0);
					})
					.catch(error => console.error('grabFrame() error:', error));*/

				const img = document.querySelector('.img');
				return imageCapture.takePhoto()
					.then(blob => {
						img.src = URL.createObjectURL(blob);
						img.onload = () => { URL.revokeObjectURL(this.src); }
						storage.ref().child(pathPicture + new Date().getTime()).put(blob)
						.then((res) => {
							img.src = res.metadata.downloadURLs[0];
							console.log( 'URRRLLLLLL', res.metadata.downloadURLs[0])
						});
					})

				/*return imageCapture.takePhoto().then((blob) => {
					
					
				});*/
			},

			post() {
				const img = document.querySelector('.img');
				this.postCat(img.src, this.title);
			}

			/* eslint-enable */
		},
	};
</script>

<style lang="stylus" scoped>

.camera-modal 
	height 300px
	width 100%
	position relative
	box-sizing border-box

	&-container
		padding 20px 50px


.img,
canvas 
	max-height 300px
	max-width 100%
	position absolute
	top 0
	left 50%
	transform translateX(-50%)

input 
	border 0
	width 250px

.camera-stream 
	width 100%
	max-height 300px
  
</style>
