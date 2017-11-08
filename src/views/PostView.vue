<template>
	<form>
		<div class="post-view">
				<img :src="this.catUrl"/>
				<div class="actions">
					<input id="username" v-model="title" type="text" placeholder="Escreva uma legenda">
					<main-button text-inner="POST A CAT" @click.prevent.native="post"></main-button>
				</div>
			</div>
		</div>
	</form>
</template>

<script>
import parse from 'xml-parser';
import mainButton from '../components/main-button';
import postCat from '../mixins/postCat';

export default {
	mixins: [postCat],
	data() {
		return {
			catUrl: null,
			title: 'tets',
		};
	},
	components: {
		'main-button': mainButton,
	},
	methods: {
		post() {
			this.postCat(this.catUrl, this.title);
		},
	},
	mounted() {
		this.$http.get('http://thecatapi.com/api/images/get?format=xml&results_per_page=1').then((response) => {
			this.catUrl = parse(response.body).root.children['0'].children['0'].children['0'].children['0'].content;
		});
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
