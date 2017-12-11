<template>
	<div class="profile-resume">
		<div class="img-holder">
			<img :src="image" />
		</div>
		<div class="info-holder">
			<p class="profession">{{ profession }}</p>
			<p class="nickname">{{ nickname }}</p>
			<p class="username">{{ username }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: ['image', 'nickname', 'username', 'profession'],
};
</script>

<style lang="stylus">
	$border-radius = 10px
	@import '../assets/styles/_colors'


	p
		margin 0

	.profile-resume
		display inline-flex
		align-items center
		justify-content flex-start
		color #222

	.img-holder
		width 55px
		height 55px
		border-radius 10px 10px 10px 0px
		overflow hidden
		position relative
		border 2px solid $pink
		box-shadow 2px 1px 5px 0px alpha($dark-gray, 0.6)
		padding 2px
		box-sizing border-box

		img
			height 100%
			width 100%
			border-radius 10px 10px 10px 0px
			object-fit cover
			object-position center

	.info-holder
		margin-left 15px

	.profession
		font-size 12px

	.nickname
		font-size 18px
		line-height 100%
		font-weight 600
		color $blue
		text-transform capitalize

	.username
		font-size 12px

</style>
