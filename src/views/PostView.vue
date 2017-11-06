<template>
	<form>
		<div class="post-view">
				<div key="1" v-if="isImageLoading" class="mdl-spinner mdl-js-spinner is-active"></div>
				<img key="2" v-if="!isImageLoading" class="cat-image" v-show="catUrl !== null" :src="this.catUrl"/>
				<div class="actions">
					<input id="username" v-model="title" contenteditable="true" placeholder="Escreva uma legenda">
					<main-button text-inner="POST IMAGE" @click.prevent.native="postCat"></main-button>
					<main-button @click.prevent.native="loadCatImageFromCatAPI" text-inner="Refresh"></main-button>
				</div>
			</div>
		</div>
	</form>
</template>

<script>
import parse from 'xml-parser';
import mainButton from '../components/main-button';

export default {
	data() {
		return {
			catUrl: null,
			isImageLoading: true,
			title: '',
		};
	},
	components: {
		'main-button': mainButton,
	},
	mounted() {
		this.loadCatImageFromCatAPI();
	},
	methods: {
		postCat() {
			this.$root.$firebaseRefs.cat.push(
				{
					url: this.catUrl,
					comment: this.title,
					autor: 'Nayara Hilton',
					created_at: -1 * new Date().getTime(),
				},
			).then(
				this.$router.push('/Home'),
			);
		},
		loadCatImageFromCatAPI() {
			this.isImageLoading = true;
			this.$http.get('https://thecatapi.com/api/images/get?format=xml&results_per_page=1').then((response) => {
				const catUrl = parse(response.body).root.children['0'].children['0'].children['0'].children['0'].content;
				const img = new Image();
				img.src = catUrl;
				img.onload = () => {
					this.isImageLoading = false;
					this.catUrl = catUrl;
				};
			});
		},
	},
};
</script>

<style lang="stylus" scoped>
	.waiting
		padding 10px
		color #555

	img
		max-width 100%

	input
		width 100%
		border 0

		&:focus
			outline none

	.actions
		padding 0 20px

</style>