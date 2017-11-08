<template>
	<div class="home">	
		<main-header />	
		<div
			v-for="picture in this.getCats()"
			class="card"
		>
			<div
				class="card-picture"
				@click="displayDetails(picture['.key'])"
			>
				<img :src="picture.url" />
			</div>
			<div class="card-comment">
				<span>{{ picture.comment }}</span>
			</div>
			<div class="card-info">
				<profile-resume
					:image="picture.url"
					:nickname="picture.autor"
					username="@nayarahilton"
					profession="#Profissão"
					@click.native="goToProfile(picture['.key'])"
				>
				</profile-resume>
				<post-reactions />
			</div>
		</div>

		<router-link class="add-picture-button" to="/post">
			<span>+</span>
		</router-link>
		<router-link class="take-picture-button" to="/camera">
			<span>[o]</span>
		</router-link>
	</div>
</template>

<script>
import MainHeader from '../components/MainHeader';
import ProfileResume from '../components/ProfileResume';
import PostReactions from '../components/PostReactions';

export default {
	data() {
		return {
			msg: 'Explore diverasas profissões com quem trabalha na área',
		};
	},
	mounted() {
		this.saveCatsToCache();
	},
	components: {
		'main-header': MainHeader,
		'profile-resume': ProfileResume,
		'post-reactions': PostReactions,
	},
	methods: {
		displayDetails(id) {
			this.$router.push({ name: 'detail', params: { id } });
		},
		goToProfile(id) {
			this.$router.push({ name: 'profile', params: { id } });
		},
		getCats() {
			if (navigator.onLine) {
				this.saveCatsToCache();
				return this.$root.cat;
			}

			return JSON.parse(localStorage.getItem('cats'));
		},
		saveCatsToCache() {
			this.$root.$firebaseRefs.cat.orderByChild('created_at').once('value', (snapchot) => {
				const cachedCats = [];
				snapchot.forEach((catSnapchot) => {
					const cachedCat = catSnapchot.val();
					cachedCat['.key'] = catSnapchot.key;
					cachedCats.push(cachedCat);
				});
				localStorage.setItem('cats', JSON.stringify(cachedCats));
			});
		},
	},
};
</script>

<style lang="stylus" scoped>

	@import '../assets/styles/_colors'

	.home
		background #eee

	.add-picture-button
		position fixed
		right 24px
		bottom 24px
		z-index 998
		color $blue
		height 50px
		width 50px
		border-radius 20px 20px 20px 0
		background #fff
		display flex
		align-items center
		justify-content center
		box-shadow -3px 0px 4px 1px rgba(0,0,0,0.3)

	.take-picture-button
		position fixed
		right 74px
		bottom 74px
		z-index 999
		color $blue
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
