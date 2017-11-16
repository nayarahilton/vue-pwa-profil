<template>
		<div class="slider">
		<ul class="list">
			<li class="list-item" v-for="item in items">
				<div class="img-holder">
					<img class="img" src="nada" />
				</div>
				<p class="text">{{item.text}}</p>
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

<style lang="stylus" scoped>
	@import '../assets/styles/*'

	.slider
		padding 20px 0
		box-sizing border-box
		background #eee

	.list
		list-style none
		white-space nowrap
		margin 0 auto
		padding 0
		display flex
		overflow-x scroll
		max-width 500px

	.list-item
		display inline-flex
		flex-direction column
		white-space normal
		text-align center
		margin-left 20px
		min-width 60px
		max-width 100px
		overflow hidden

		&:last-child
			padding-right 20px

	.text
		margin-bottom 0
		margin-top 0px
		font-size 12px

	.img-holder
		width 50px
		height 50px
		border-radius 50%
		border 2px solid $blue
		box-shadow 2px 1px 5px 0px rgba(0, 132, 250, 0.6)
		background #fff

</style>

