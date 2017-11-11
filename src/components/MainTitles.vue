<template>
    <div
        :class="titlesStyle"
        class="titles"
    >
        <h2 class="titles__title">
            {{ titleText }}
        </h2>
        <h3>
            {{ subtitleText }}
        </h3>
    </div>
</template>

<script>
export default {
		props: {
		titleText: {
			required: true,
			type: String,
		},
		subtitleText: {
			type: String,
		},		
		design: {
			type: String,
		},
	},
    computed: {
		titlesStyle() {
			if (this.design === 'left' || !this.design) return 'titles--left';
            if (this.design === 'center') return 'input--center';
		},
	},
};
</script>

<style lang="stylus" scoped>
	@import '../assets/styles/_colors'

	*
		box-sizing border-box

	.titles
		background transparent
        color $gray
		margin-bottom 20px
		padding 15px
		width 100%

		&--left
			text-align left 

        &--center
            text-align center

        &__title
            font-size 16pt

        &__subtitle
            font-size 12pt
    
</style>