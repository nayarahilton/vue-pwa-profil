<template>
	<div class="home">
		<header class="home-header">
			<slider-items />
			<tabs-top :links="linksTop"	/>
			<tabs-bottom-guru />
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

export default {
	data() {
		return {
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
		'tabs-bottom-guru': TabsBottomGuru,
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
