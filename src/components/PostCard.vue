<template>
	<div v-if="!preloading">
		<div v-for="picture in this.getCards()" class="card">
			<ul class="hashtags-list">
				<li v-for="hash in hashtags" class="hash">{{hash.hash}}</li>
			</ul>
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
					nickname="Nayara Hilton"
					username="@nayarahilton"
					profession="#Profissão"
					@click.native="goToProfile(picture['.key'])"
					v-if="resume === 'true'"
				>
				</profile-resume>
				<post-reactions />
			</div>
			<div class="post-reading-time"><span>leitura: 13 minutos</span></div>
		</div>
	</div>
	<pre-loading v-else></pre-loading>
</template>

<script>
import ProfileResume from '@/components/ProfileResume';
import PostReactions from '@/components/PostReactions';
import PreLoading from '@/components/PreLoading';

export default {
	data() {
		return {
			autor: 'Nayara Hilton',
			preloading: true,
			hashtags: [
				{ hash: '#Desigin' },
				{ hash: '#Motion' },
				{ hash: '#UX' },
				{ hash: '#Front' },
			],
		};
	},
	mounted() {
		this.saveCardsToCache();
	},
	props: ['resume'],
	components: {
		'profile-resume': ProfileResume,
		'post-reactions': PostReactions,
		'pre-loading': PreLoading,
	},
	methods: {
		displayDetails(id) {
			this.$router.push({ name: 'detail', params: { id } });
		},
		goToProfile(id) {
			this.$router.push({ name: 'profile', params: { id } });
		},
		getCards() {
			if (navigator.onLine) {
				this.saveCardsToCache();
				return this.$root.card;
			}
			return JSON.parse(localStorage.getItem('cards'));
		},
		saveCardsToCache() {
			this.$root.$firebaseRefs.card.orderByChild('created_at').once('value', (snapchot) => {
				const cachedcards = [];

				snapchot.forEach((cardSnapchot) => {
					const cachedcard = cardSnapchot.val();
					cachedcard['.key'] = cardSnapchot.key;
					cachedcards.push(cachedcard);
				});

				this.preloading = false;

				// localStorage.setItem('cards', JSON.stringify(cachedcards));
			});
		},
		mounted() {
			this.saveCatsToCache();
		},
	},
};
</script>

<style lang="stylus" scoped>
	@import '../assets/styles/_colors'

	.card
		padding-bottom 10px
		border-bottom 1px solid #eee
		margin-bottom 40px
		background #fff
		max-width 500px
		margin-left auto
		margin-right auto

	.card-picture img
		width 100%

	.card-info
		padding 5px 15px
		display flex
		justify-content space-between
		margin-top 10px

	.card-comment
		padding 0 20px
		max-height 80px
		overflow hidden
		line-height 20px
		font-size 15px

	.post-reading-time
		padding 0 20px
		font-size 15px

		span
			vertical-align middle
			display inline-block

		&:before
			content ''
			background-image url('../assets/icons/clock-icon.svg')
			background-size 14px 14px
			background-repeat no-repeat
			width 14px
			height 14px
			margin-right 5px
			display inline-block
			vertical-align middle


	.hashtags-list
		margin 10px 0
		padding 0 20px
		list-style none

	.hash
		display inline-block
		color $blue
		font-size 15px
		+ .hash
			margin-left 10px

	@media screen and (min-width 480px)
		.card
			margin-top 40px
</style>
