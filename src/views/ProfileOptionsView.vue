<template>
	<div class="options">
		<header class="options-header">
			<status-bar
				link="/meu-perfil"
				title="Opções"
			/>
		</header>
		<main class="options-main">
			<router-link
				class="options-link"
				v-for="link of links"
				:key="link.id"
				:to="link.url"
			>
				{{ link.text }}
			</router-link>
			<div class="logout-btn">
				<button @click="onLogout" class="submit-button">Sair</button>
			</div>
		</main>

	</div>
</template>

<script>
import StatusBar from '@/components/StatusBar';

export default {
	data() {
		return {
			links: [
				{
					id: 1,
					text: 'Fale conosco',
					url: '/contato',
				},
				{
					id: 2,
					text: 'Termo de política e privacidade',
					url: 'termos',
				},
				{
					id: 3,
					text: 'Deixe seu comentário',
					url: '#',
				},
			],
		};
	},
	components: {
		StatusBar,
	},
	methods: {
		onLogout() {
			this.$store.dispatch('logout');
		},
	},
};
</script>

<style lang="stylus">
	@import '../assets/styles/*'

	.options-link
		color $dark-gray
		display block
		font-size 16pt
		line-height 35pt

	.logout-btn
		bottom 60px
		left 0
		position absolute
		right 0
		text-align center
		width 100%

		.submit-button
			margin 0 auto

</style>
