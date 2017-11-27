<template>
	<div class="reactions">
		<button class="save-button"></button>
		<button class="like-button"></button>
	</div>
</template>

<script>
	export default {
		props: ['text-inner'],
	};
</script>

<style lang="stylus">
	@import '../assets/styles/_colors'

  	.like-button,
	.save-button
		border 0
		height 35px
		background transparent
		cursor pointer

		&:focus
			outline none

		+ button
			margin-left 5px

  	.like-button
		width 30px
		background-image url('../assets/icons/like-icon.svg')
		background-size 30px
		background-repeat no-repeat
		transition background .3s ease-in-out
		margin-left 15px

		&:hover,
		&:active,
		&:focus
			background-image url('../assets/icons/like-icon2.svg')

	.save-button
		width 30px
		background-image url('../assets/icons/favorite-icon.svg')
		background-size 30px
		background-repeat no-repeat
		transition background .3s ease-in-out

		&:hover,
		&:active,
		&:focus
			background-image url('../assets/icons/favorite-icon2.svg')

  	.reactions
		display inline-flex
		align-items center

</style>
