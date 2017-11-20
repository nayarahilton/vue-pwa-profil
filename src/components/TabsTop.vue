<template>
	<nav class="tabs-top">
		<ul class="tabs-top__links">
			<li
				v-for="link of links"
				:key="link.class"
				class="tabs-top__link"
			>
				<a
					:href="link.url"
					:class="link.class"
				>
					{{ link.name }}
				</a>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			links: [
				{
					class: 'minha-area',
					url: '#',
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
		};
	},
};
</script>

<style lang="stylus" scoped>
	@import '../assets/styles/_colors'

	*
		box-sizing border-box

	.tabs-top
		background transparent
		border-bottom 1px solid $pink
		margin-bottom 20px
		padding 15px
		width 100%

		&__links
			align-items center
			display flex
			justify-content: space-between;
			margin 0

		&__link
			list-style none

			a
				color $pink
				font-size 12pt
				text-transform lowercase

				&.active
					font-weight 600
					position relative

					&:after
						background $pink
						bottom 0
						content ''
						display block
						height 4px
						position absolute
						width inherit
</style>
