<template>
	<div class="home">
		<header class="home-header">
			<slider-items
				class="stories"
				:slides="stories"
			/>
			<tabs-top
				:links="linksTop"
				v-if="type == 1"
			/>
			<tabs-bottom-guru v-if="type == 1"/>
			<tabs-bottom-aprendiz v-if="type == 2"/>
		</header>
		<main class="home-main">
			<post-card resume="true" />
		</main>
	</div>
</template>

<script>
import SliderItems from '@/components/SliderItems';
import PostCard from '@/components/PostCard';
import TabsTop from '../components/TabsTop';
import TabsBottomGuru from '../components/TabsBottomGuru';
import TabsBottomAprendiz from '../components/TabsBottomAprendiz';

export default {
	data() {
		return {
			stories: [
				{
					src: 'http://nosrc.fbiz.com.br/640x480/ddd/777',
					text: '@nayarahilton',
				},
				{
					src: 'http://nosrc.fbiz.com.br/640x480/ddd/777',
					text: '@lucassilva',
				},
				{
					src: 'http://nosrc.fbiz.com.br/640x480/ddd/777',
					text: '@prisanttos',
				},
				{
					src: 'http://nosrc.fbiz.com.br/640x480/ddd/777',
					text: '@vinibueno',
				},
				{
					src: 'http://nosrc.fbiz.com.br/640x480/ddd/777',
					text: '@lilisantos',
				},
				{
					src: 'http://nosrc.fbiz.com.br/640x480/ddd/777',
					text: '@nayarahilton',
				},
				{
					src: 'http://nosrc.fbiz.com.br/640x480/ddd/777',
					text: '@lucassilva',
				},
				{
					src: 'http://nosrc.fbiz.com.br/640x480/ddd/777',
					text: '@nayarahilton',
				},
				{
					src: 'http://nosrc.fbiz.com.br/640x480/ddd/777',
					text: '@lucassilva',
				},
				{
					src: 'http://nosrc.fbiz.com.br/640x480/ddd/777',
					text: '@nayarahilton',
				},
				{
					src: 'http://nosrc.fbiz.com.br/640x480/ddd/777',
					text: '@lucassilva',
				},
			],
			linksTop: [
				{
					class: 'minha-area',
					url: '/',
					name: 'minha área',
				},
				{
					class: 'todas-areas',
					url: '#',
					name: 'todas as áreas',
				},
			],
		};
	},
	components: {
		SliderItems,
		TabsTop,
		TabsBottomGuru,
		TabsBottomAprendiz,
		PostCard,
	},
	computed: {
		type() {
			return !this.$store.getters.user ? false : this.$store.getters.user.type;
		},
	},
	created() {
		this.$store.dispatch('fetchUser');
	},
};
</script>

<style lang="stylus" scoped>

	@import '../assets/styles/_colors'

	.home
		background #f9f9f9

		&-main
			padding-bottom 50px

	.stories
		margin-top 20px
</style>
