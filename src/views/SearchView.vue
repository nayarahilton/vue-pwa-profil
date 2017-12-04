<template>
	<div class="search-view">
		<status-bar
			link="/home"
			title="Buscar"
		/>
		<main class="search-view">
			<div class="search-holder">
				<input
					type="text"
					placeholder="Busque uma profissão"
					class="search-input"
					v-model="search"
				/>
			</div>
			<div class="profession-holder">
				<div class="profession" v-for="profissao in filteredList">
					<a v-bind:href="profissao.link" target="_blank">
						Profissão: {{ profissao.name }}
					</a>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import StatusBar from '../components/StatusBar';

export default {
	data() {
		return {
			search: '',
			profissaoList: [
				{
					name: 'Design Digital',
					link: '/',
				},
				{
					name: 'Arquitetura',
					link: '/',
				},
				{
					name: 'Enguenharia',
					link: '/',
				},
				{
					name: 'Medicina',
					link: '/',
				},
			],
		};
	},
	computed: {
		/* eslint-disable */
		filteredList() {
			return this.profissaoList.filter((profissao) => {
				return profissao.name.toLowerCase().includes(this.search.toLowerCase());
			});
		},
	},
	components: {
		'status-bar': StatusBar,
	},
};
</script>
<style lang="stylus">
	@import '../assets/styles/*'

	.search-view
		padding 0

	.search-holder,
	.profession-holder
		holder()
		margin-top 30px
		box-sizing border-box


	.search-holder
		padding 0 20px

	.search-input
		background transparent
		font-size 14px
		padding 15px
		width 100%
		display block
		border 1px solid $gray
		border-radius 15px
		color $dark-gray
		box-sizing border-box

		&:focus
			border-color $dark-blue
			outline 0


	.profession
		border-bottom 1px solid #ddd
		font-size 18px
		text-align left
		transition: .15s all ease-in-out;

		a
			color $blue
			padding 15px
			box-sizing border-box
			display block


</style>
