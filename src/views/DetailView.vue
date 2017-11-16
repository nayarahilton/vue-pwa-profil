<template>
	<div class="detail-view">
		<div class="picture">
			<img :src="card.url" />
		</div>
		<div class="info">
			<span>{{ card.info }}</span>
		</div>
		<div class="comment">
			<span>{{ card.comment }}</span>
		</div>
	</div>
</template>

<script>
import { find } from 'lodash';

export default {
	data() {
		return {
			card: null,
		};
	},
	mounted() {
		this.card = find(this.$root.card, card => card['.key'] === this.$route.params.id);
	},
};
</script>

<style lang="stylus" scoped>
	img
		max-width 100%
</style>
