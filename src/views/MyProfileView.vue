<template>
	<div class="profile">
		<div class="profile-info">
			<profile-resume
				:nickname="name"
				:username="'@' + username"
				:profession="profession"
			/>
			<div class="status">
				<span class="point"> 1000 moedas </span> <span class="level"> Nível 2 </span>
			</div>
			<div class="follows">
				<span class="followers">100 seguidores</span> <span class="following">53 seguindo</span>
			</div>
		</div>
		<header class="profile-header">
			<tabs-top
				:links="linksTopGuru"
				v-if="type == 1"
			/>
			<tabs-top
				:links="linksTopAprendiz"
				v-if="type == 2"
			/>
			<tabs-bottom-guru v-if="type == 1"/>
			<tabs-bottom-aprendiz v-if="type == 2"/>
		</header>
	</div>
</template>

<script>
import StatusBar from '@/components/StatusBar';
import ProfileResume from '@/components/ProfileResume';
import TabsTop from '../components/TabsTop';
import TabsBottomGuru from '../components/TabsBottomGuru';
import TabsBottomAprendiz from '../components/TabsBottomAprendiz';

export default {
	data() {
		return {
			linksTopGuru: [
				{
					class: 'meus-posts',
					url: '/',
					name: 'meus posts',
				},
				{
					class: 'minha-area',
					url: '#',
					name: 'minha área',
				},
				{
					class: 'gurus',
					url: '#',
					name: 'gurus',
				},
				{
					class: 'favoritos',
					url: '#',
					name: 'favoritos',
				},
			],
			linksTopAprendiz: [
				{
					class: 'areas',
					url: '/',
					name: 'áreas que sigo',
				},
				{
					class: 'gurus',
					url: '#',
					name: 'gurus que sigo',
				},
				{
					class: 'favoritos',
					url: '#',
					name: 'favoritos',
				},
			],
		};
	},
	components: {
		StatusBar,
		ProfileResume,
		TabsTop,
		TabsBottomGuru,
		TabsBottomAprendiz,
	},
	computed: {
		type() {
			return !this.$store.getters.user ? false : this.$store.getters.user.type;
		},
		name() {
			return !this.$store.getters.user ? false : this.$store.getters.user.name;
		},
		username() {
			return !this.$store.getters.user ? false : this.$store.getters.user.username;
		},
		profession() {
			return !this.$store.getters.user ? false : this.$store.getters.user.profession;
		},
	},
	created() {
		this.$store.dispatch('fetchUser');
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
