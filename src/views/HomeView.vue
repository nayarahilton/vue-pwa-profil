<template>
	<div class="home">
		<header class="home-header">
			<slider-items class="stories" :slides="stories"/>
			<tabs-top :links="linksTop"	/>
			<tabs-bottom />
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
import TabsBottom from '../components/TabsBottom';

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
		'slider-items': SliderItems,
		'tabs-top': TabsTop,
		'tabs-bottom': TabsBottom,
		'post-card': PostCard,
	},
};
</script>

<style lang="stylus" scoped>

	@import '../assets/styles/_colors'

	.home
		background #f9f9f9

		&-main
			padding-bottom 50px

</style>
