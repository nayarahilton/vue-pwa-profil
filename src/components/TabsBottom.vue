<template>
	<nav class="tabs-bottom">
		<ul class="tabs-bottom__links">
			<li
				v-for="link in links"
				:key="link.class"
			>
				<router-link
					:to="link.url"
					class="tabs-bottom__link"
					:class="link.class"
					active-class="active"
				>
					{{ link.name }}
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			linksTop: [
				{
					class: 'minha-area',
					url: '/',
					name: 'minha área',
				},
				{
					class: 'todas-areas',
					url: '#',
					name: 'todas as áreas',
				},
				{
					class: 'hashtags',
					url: '#',
					name: '#hashtags',
				},
			],
			linksBottom: [
				{
					class: 'home',
					url: '/',
					name: 'home',
				},
				{
					class: 'buscar',
					url: '#',
					name: 'buscar',
				},
				{
					class: 'postar',
					url: '#',
					name: 'postar',
				},
				{
					class: 'perfil',
					url: '#',
					name: 'perfil',
				},
			],
		};
	},
	props: {
		links: {
			type: String,
		},
	},
};
</script>

<style lang="stylus" scoped>
	@import '../assets/styles/_colors'

	*
		box-sizing border-box

	.tabs-bottom
		background #fff
		bottom 0
		box-shadow 0px 0px 20px 0px rgba(0, 0, 0, 0.3)
		padding 10px
		position fixed
		width 100%
		z-index 99

		&__links
			align-items center
			display flex
			justify-content space-between
			margin 0
			padding 0 10px

			li
				list-style none

		&__link
			color $pink
			font-size 12pt
			text-transform lowercase

			&.active
				font-weight 600
				position relative

				&:after
					background $pink
					top -13px
					content ''
					height 5px
					left 0
					margin 0 auto
					position absolute
					right 0
					width 80%
</style>
