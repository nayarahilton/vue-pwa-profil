<template>
	<div class="home">
		<main-header />
		<slider-items />
		<post-card resume="true" />
	</div>
</template>

<script>
import MainHeader from '@/components/MainHeader';
import SliderItems from '@/components/SliderItems';
import PostCard from '@/components/PostCard';

export default {
	components: {
		'main-header': MainHeader,
		'slider-items': SliderItems,
		'post-card': PostCard,
	},
};
</script>

<style lang="stylus" scoped>

	@import '../assets/styles/_colors'

	.home
		background #f9f9f9

</style>
