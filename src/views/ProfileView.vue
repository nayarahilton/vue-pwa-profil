<template>
	<div class="profile">
		<status-bar
			link="/home"
			title="Home"
		/>
		<div class="profile-info">
			<profile-resume
				:image="card.url"
				nickname="Nayara Hilton"
				username="@nayarahilton"
				profession="#Profissão"
				linkto="/profile"
			>
			</profile-resume>

			<div class="status">
				<span class="point"> 1000 moedas </span> <span class="level"> Nível 2 </span>
			</div>
			<div class="follows">
				<span class="followers">100 seguidores</span> <span class="following">53 seguindo</span>
			</div>
		</div>

		<post-card />
	</div>
</template>

<script>
import { find } from 'lodash';
import StatusBar from '@/components/StatusBar';
import PostCard from '@/components/PostCard';
import ProfileResume from '@/components/ProfileResume';

export default {
	data() {
		return {
			card: null,
		};
	},
	components: {
		'status-bar': StatusBar,
		'post-card': PostCard,
		'profile-resume': ProfileResume,
	},
	mounted() {
		this.card = find(this.$root.card, card => card['.key'] === this.$route.params.id);
	},
};
</script>

<style lang="stylus" scoped>

	@import '../assets/styles/_colors'

	.profile

		.status
			margin-left 70px
			font-size 14px
			line-height 14px

		.point
			color $pink
			font-weight bold

		.level
			margin-left 5px

			&:before
				content "|"
				margin-right 5px

		.follows
			text-align center
			margin-top 25px
			font-size 14px

		.following
			margin-left 10px

		.followers,
		.following
			background $pink
			border-radius 30px
			padding 2px 10px
			color $white

		.profile-info
			padding 0 20px
			margin 20px 0 30px 0

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

</style>
