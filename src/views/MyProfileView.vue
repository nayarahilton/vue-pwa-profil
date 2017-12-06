<template>
	<div class="profile">
		<div class="profile-info">
			<profile-resume
				:image="card.url"
				nickname="Nayara Hilton"
				username="@nayarahilton"
				profession="#Profissão"
				linkto="/perfil"
			>
			</profile-resume>

			<div class="status">
				<span class="point"> 1000 moedas </span> <span class="level"> Nível 2 </span>
			</div>
			<div class="follows">
				<span class="followers">100 seguidores</span> <span class="following">53 seguindo</span>
			</div>
		</div>

		<tabs-bottom-guru />
	</div>
</template>

<script>
import StatusBar from '@/components/StatusBar';
import ProfileResume from '@/components/ProfileResume';
import TabsBottomGuru from '../components/TabsBottomGuru';

export default {
	components: {
		'status-bar': StatusBar,
		'profile-resume': ProfileResume,
		'tabs-bottom-guru': TabsBottomGuru,
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
			max-width 500px
			padding 0 20px
			margin 20px auto 30px auto

</style>
