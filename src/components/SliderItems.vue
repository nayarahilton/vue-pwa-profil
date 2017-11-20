<template>
		<div class="slider">
		<ul class="slider_list">
			<li class="slider_list-item" v-for="item in items">
				<div class="slider_img-holder">
					<img class="slider_img" src="http://nosrc.fbiz.com.br/640x480/ddd/777" />
				</div>
				<p class="slider_text">{{item.text}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			items: [
				{ text: '@nayarahilton' },
				{ text: '@prisantos' },
				{ text: '@lucasilva' },
				{ text: '@lilisantos' },
				{ text: '@vinicuisbueno' },
				{ text: '@gabriellopes' },
				{ text: '@rachelaquino' },
				{ text: 'Outro' },
				{ text: 'Outro' },
			],
		};
	},
};

</script>

<style lang="stylus">
	@import '../assets/styles/*'

	.slider
		padding 20px 0
		box-sizing border-box
		background #eee

		&_list
			nowrap-list()
			holder()

		&_list-item
			nowrap-list-item()
			min-width 60px
			max-width 100px

		&_text
			margin-bottom 0
			margin-top 0px
			font-size 12px

		&_img-holder
			light-border()
			width 50px
			height 50px
			border-radius 50%
			background #fff

		&_img
			object-fit cover
			object-position center
			border-radius 50%
			width 50px
			height 50px


</style>

