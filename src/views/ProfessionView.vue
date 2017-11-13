<template>
	<div class="profile">
		
		</profile-resume>
		<div class="follows">
			<span class="followers">100 seguidores</span> <span class="following">53 seguindo</span>
		</div>
		<div class="card">
			<div class="card-picture">
				<img :src="'https://image.freepik.com/free-vector/triangle-cat-design_23-2147495379.jpg'" />
			</div>
			<div class="card-info">
				<div class="Texto">
					<span>Texto</span>
				</div>
				<div class="card-info">
					<post-reactions></post-reactions>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ProfileResume from '../components/ProfileResume';
import PostReactions from '../components/PostReactions';

export default {
	data() {
		return {
			cat: null,
		};
	},
	components: {
		'profile-resume': ProfileResume,
		'post-reactions': PostReactions,
	},
};
</script>

<style lang="stylus" scoped>

	@import '../assets/styles/_colors'

	.profile
		background #fff
		padding 20px

	.add-picture-button
		position fixed
		right 24px
		bottom 24px
		z-index 998
		color $primary-color
		height 50px
		width 50px
		border-radius 20px 20px 20px 0
		background #fff
		display flex
		align-items center
		justify-content center
		box-shadow -3px 0px 4px 1px rgba(0,0,0,0.3)

		span
			font-size 40px
			line-height 40px
			height 45px

	.card
		padding-bottom 10px
		border-bottom 1px solid #eee
		margin-bottom 40px
		background #fff
		max-width 500px
		margin-left auto
		margin-right auto

	.card-picture > img
		width 100%

	.card-info
		padding 5px 15px
		display flex
		justify-content space-between

	.card-comment
		padding 0 20px

		> span
			color #222
			font-size 15px
</style>
