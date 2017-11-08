<template>
  <div class="camera-modal">
    <video ref="video" class="camera-stream"/>
	<input id="username" v-model="title" type="text" placeholder="Escreva uma legenda">
    <div class="camera-modal-container">
		<main-button text-inner="Post a photo" @click.prevent.native="capture">
		</main-button>
    </div>
  </div>
</template>

<script>
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
				return imageCapture.takePhoto().then((blob) => {
					storage.ref().child(pathPicture + new Date().getTime()).put(blob)
					.then((res) => {
						this.postCat(res.metadata.downloadURLs[0], this.title);
					});
				});
			},
		},
	};
</script>

<style scoped>
  .camera-modal {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-color: white;
    z-index: 10;
  }
  .camera-stream {
    width: 100%;
    max-height: 100%;
  }
  .camera-modal-container {
    position: absolute;
    bottom: 0;
    width: 100%;
    align-items: center;
    margin-bottom: 24px;
  }
  .take-picture-button {
    display: flex;
  }
</style>
