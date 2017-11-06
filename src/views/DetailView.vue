<template>
	<div class="detail-view">
		<div class="picture">
			<img :src="cat.url" />
		</div>
		<div class="info">
			<span>{{ cat.info }}</span>
		</div>
		<div class="comment">
			<span>{{ cat.comment }}</span>
		</div>
	</div>
</template>

<script>
import { find } from 'lodash';

export default {
	data() {
		return {
			cat: null,
		};
	},
	mounted() {
		this.cat = find(this.$root.cat, cat => cat['.key'] === this.$route.params.id);
	},
};
</script>

<style lang="stylus" scoped>
	img
		max-width 100%
</style>