<template>
	<div class="detail-view">
		<status-bar
			link="/home"
			title="Home"
		/>
		<div class="holder">
			<div class="picture">
				<img :src="card.url" />
			</div>
			<div class="comment">
				<span>{{ card.comment }}</span>
			</div>
		</div>
	</div>
</template>

<script>
import { find } from 'lodash';
import StatusBar from '@/components/StatusBar';

export default {
	data() {
		return {
			card: null,
		};
	},
	components: {
		'status-bar': StatusBar,
	},
	mounted() {
		this.card = find(this.$root.card, card => card['.key'] === this.$route.params.id);
	},
};
</script>

<style lang="stylus" scoped>
	@import '../assets/styles/*'

	.holder
		holder()
		margin-top 20px

	.comment
		padding 20px

	img
		max-width 100%
</style>
